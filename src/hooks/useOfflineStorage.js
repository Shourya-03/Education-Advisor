import { useState, useEffect } from 'react';
import { setItem, getItem } from '../services/storageService';

const useOfflineStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const loadData = async () => {
      try {
        const item = await getItem(key);
        if (item) {
          setStoredValue(item);
        }
      } catch (error) {
        console.error('Error reading from IndexedDB:', error);
      }
    };
    loadData();
  }, [key]);

  const setValue = async (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await setItem(key, valueToStore);
    } catch (error) {
      console.error('Error saving to IndexedDB:', error);
    }
  };

  return [storedValue, setValue];
};

export default useOfflineStorage;