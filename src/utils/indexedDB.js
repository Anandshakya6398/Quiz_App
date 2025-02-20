import { openDB } from 'idb';

const DB_NAME = 'QuizDB';
const STORE_NAME = 'QuizHistory';
const QUIZ_ATTEMPT_STORE_NAME = 'QuizAttempts';
const FEEDBACK_STORE_NAME = 'Feedback';

const initDB = async () => {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains(QUIZ_ATTEMPT_STORE_NAME)) {
                db.createObjectStore(QUIZ_ATTEMPT_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains(FEEDBACK_STORE_NAME)) {
                db.createObjectStore(FEEDBACK_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        }
    });
};

export const saveQuizAttempt = async (quizData) => { // Save a quiz attempt to the database store  
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.add(quizData);
    await tx.done;
}; 
export const saveQuizAttemptHistory = async (attemptData) => {
    const dbRequest = indexedDB.open("QuizAppDB", 1);
  
    dbRequest.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("quizAttempts")) {
        db.createObjectStore("quizAttempts", { keyPath: "id", autoIncrement: true });
      }
    };
  
    dbRequest.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("quizAttempts", "readwrite");
      const store = transaction.objectStore("quizAttempts");
      store.add(attemptData);
    };
  
    dbRequest.onerror = (event) => {
      console.error("Error opening IndexedDB:", event.target.errorCode);
    };
  };



export const getQuizHistory = async () => { // Get all quiz history from the database store 
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const allRecords = await store.getAll();
    await tx.done;
    return allRecords;
};

export const getQuizAttemptHistory = async () => {  // Get all quiz attempt history from the database store
    const db = await initDB();
    const tx = db.transaction(QUIZ_ATTEMPT_STORE_NAME, 'readonly');
    const store = tx.objectStore(QUIZ_ATTEMPT_STORE_NAME);
    const allRecords = await store.getAll();
    await tx.done;
    return allRecords;
};

export const saveFeedback = async (feedbackData) => {
    const db = await initDB();
    const tx = db.transaction(FEEDBACK_STORE_NAME, 'readwrite');
    const store = tx.objectStore(FEEDBACK_STORE_NAME);
    await store.add(feedbackData);
    await tx.done;
};

export const getFeedback = async () => {
    const db = await initDB();
    const tx = db.transaction(FEEDBACK_STORE_NAME, 'readonly');
    const store = tx.objectStore(FEEDBACK_STORE_NAME);
    const allRecords = await store.getAll();
    await tx.done;
    return allRecords;
};



 