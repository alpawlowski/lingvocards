import React, { useState, useEffect } from 'react';

interface LocalStorageData {
  [key: string]: string | null;
}

interface Deck {
  description?: string;
}

const TreeLocalStorage: React.FC = () => {
  const [localStorageData, setLocalStorageData] = useState<LocalStorageData | null>(null);
  const [newLocalStorageData, setNewLocalStorageData] = useState<Record<string, Deck> | null>(null);

  useEffect(() => {
    const getDataFromLocalStorage = () => {
      const data: LocalStorageData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key!);
        if (key && value) {
          data[key] = value;
        }
      }
      return data;
    };

    const data = getDataFromLocalStorage();
    setLocalStorageData(data);
  }, []);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('decks');
    if (dataFromLocalStorage) {
      const parsedData: Record<string, Deck> = JSON.parse(dataFromLocalStorage);
      setNewLocalStorageData(parsedData);
    }
  }, []);

  return (
    <div>
      <h2>LocalStorage Content:</h2>
      {localStorageData ? (
        <ul>
          {Object.keys(localStorageData).map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {localStorageData[key] || "null"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data in localStorage</p>
      )}

      {newLocalStorageData ? (
        <ul>
          {Object.keys(newLocalStorageData).map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {newLocalStorageData[key].description || "No description available"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data in localStorage</p>
      )}
    </div>
  );
};

export default TreeLocalStorage;
