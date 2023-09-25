import React, { useState } from 'react';
import { TableWrapper, TableContainer, TableHead, TableRow, TableCell, EmptyCell, ButtonsContainer } from './Table.styles';
import ButtonLink from '../ButtonLink/ButtonLink';
import Button from '../Button/Button';

interface TableProps {
  data: { [key: string]: { text: string } }[];
  dataToShow: string[];
}

const labelsMap: { [key: string]: string } = {
  type: 'Type',
  front: 'Front',
  back: 'Back',
};

const Table: React.FC<TableProps> = ({ data, dataToShow }) => {
  const [tableData, setTableData] = useState(data);

  const handleDeleteCard = (index: number) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);

    const storedDecks = JSON.parse(localStorage.getItem('decks') || '{}');
    const currentDeckName = Object.keys(storedDecks)[0]; 

    storedDecks[currentDeckName].content = updatedData;
    localStorage.setItem('decks', JSON.stringify(storedDecks));

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
  
    setTableData(updatedData);
  };
  

  return (
    <TableWrapper>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell width="50px" textAlign="center">#</TableCell>
            {dataToShow.map((column, columnIndex) => (
              <TableCell key={`${column}-${columnIndex}`} width={columnIndex === 0 ? '150px' : 'auto'}>
                {labelsMap[column]}
              </TableCell>
            ))}
            <TableCell width="350px">Options</TableCell>
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
            tableData.map((item, index) => (
              <TableRow 
                key={index} 
                draggable={true} 
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e)}
                data-index={index}
              >
                <TableCell textAlign="center">{index + 1}</TableCell>
                {dataToShow.map((column) => (
                  <TableCell key={`${column}-${index}`}>{item[column].text}</TableCell>
                ))}
                <TableCell>
                  <ButtonsContainer>
                    <ButtonLink secondary to={`/decks`}>
                      Show details
                    </ButtonLink>
                    <Button secondary onClick={() => handleDeleteCard(index)}>
                      Delete
                    </Button>
                  </ButtonsContainer>
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