import React, { useState } from 'react';
import { TableWrapper, TableContainer, TableHead, TableRow, TableCell, EmptyCell, ButtonsContainer } from './Table.styles';
import ButtonLink from '../ButtonLink/ButtonLink';
import Button from '../Button/Button';
import { useAppContext } from '../../context/AppContext';

interface TableProps {
  data: { [key: string]: { text: string } }[];
  dataToShow: string[];
  deckName: string;
}

const labelsMap: { [key: string]: string } = {
  type: 'Level',
  front: 'Front',
  back: 'Back',
};

const isSmartphone = () => window.innerWidth < 768;

const Table: React.FC<TableProps> = ({ data, dataToShow, deckName }) => {
  const [tableData, setTableData] = useState(data);
  const { decks, updateDeckContent } = useAppContext();

  const handleDeleteCard = (index: number) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
  
    const currentDeckName = Object.keys(decks)[0]; 
    decks[currentDeckName].content = updatedData;
    updateDeckContent(currentDeckName, updatedData);
  
    setTableData(updatedData);
  };


  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();
    const sourceIndex = Number(e.dataTransfer.getData("index"));
    const targetIndex = Number(e.currentTarget.dataset.index);
  
    const updatedData = [...tableData];
    const [movedItem] = updatedData.splice(sourceIndex, 1);
    updatedData.splice(targetIndex, 0, movedItem);
  
    const storedDecks = JSON.parse(localStorage.getItem('decks') || '{}');
    const currentDeckName = Object.keys(storedDecks)[0]; 
    storedDecks[currentDeckName].content = updatedData;
    localStorage.setItem('decks', JSON.stringify(storedDecks));
    updateDeckContent(currentDeckName, updatedData);
    setTableData(updatedData);
  };

  return (
    <TableWrapper>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell width={isSmartphone() ? '20px' : '50px'} textAlign="center">#</TableCell>
            {dataToShow.map((column, columnIndex) => (
              columnIndex === 0 && isSmartphone() 
              ? null
              : 
              <TableCell key={`${column}-${columnIndex}`} textAlign={isSmartphone() ? 'center' : 'left'} width={columnIndex === 0 ? '150px' : 'auto'}>
                {labelsMap[column]}
              </TableCell>
            ))}
            <TableCell width={isSmartphone() ? 'auto' : '350px'}>Options</TableCell>
          </TableRow>
        </TableHead>

        <tbody>
          {tableData.length === 0 ? (
            <TableRow>
              <EmptyCell textAlign="center" colSpan={dataToShow.length + 2}>
                No content available
              </EmptyCell>
            </TableRow>
          ) : (
            tableData.map((item, index, arr) => (
              <TableRow 
                key={index} 
                draggable={true} 
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e)}
                data-index={index}
              >
                <TableCell width={isSmartphone() ? '20px' : '50px'} textAlign="center">{index + 1}</TableCell>
                {dataToShow.map((column, i) => (
                  i === 0 && isSmartphone() 
                  ? null
                  : 
                  <TableCell key={`${column}-${index}`}  textAlign={isSmartphone() ? 'center' : 'left'}>
                    {item[column].text ? item[column].text : '-'}
                  </TableCell>
                ))}
                <TableCell>
                  { isSmartphone() ? (
                    <ButtonsContainer>
                      <ButtonLink icon to={`/${deckName}/edit/${index}`}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M9 15V12.5L17.75 3.75C18.4404 3.05964 19.5596 3.05964 20.25 3.75V3.75C20.9404 4.44036 20.9404 5.55964 20.25 6.25L15.5 11L11.5 15H9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </ButtonLink>
                      <Button icon onClick={() => handleDeleteCard(index)}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </Button>
                    </ButtonsContainer>
                  ) : (
                    <ButtonsContainer>
                      <ButtonLink secondary to={`/${deckName}/edit/${index}`}>
                        Edit
                      </ButtonLink>
                      <Button secondary onClick={() => handleDeleteCard(index)}>
                        Delete
                      </Button>
                    </ButtonsContainer>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </TableContainer>
    </TableWrapper>
  );
};

export default Table;