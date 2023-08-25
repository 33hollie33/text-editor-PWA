import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
  
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database exists!');
        return;
      }
      
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('A jate database has successfully been created!');
    },
  });


export const putDb = async (content) => {
  console.log('Post to the database');

  
  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.put({ id: 1, content: content });

  const result = await request;
  console.log('saved!', result);
}

export const getDb = async () => {
  console.log('GET request');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.get(1);

  const result = await request;
  return result.value;
}

initdb();
