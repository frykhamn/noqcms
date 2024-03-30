import { useState } from 'react';
import { db } from '../../../services/firebase.config';
import {
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from '@firebase/firestore';

const useCrud = (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, collectionName));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(items);
      // console.log('Fetched data:', items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (itemData) => {
    try {
      await addDoc(collection(db, collectionName), {
        ...itemData,
        dateAdded: serverTimestamp(),
      });
      fetchData(); // Refresh data after creation
    } catch (error) {
      setError(error.message);
    }
  };

  const updateItem = async (itemId, updatedData) => {
    try {
      const itemRef = doc(db, collectionName, itemId);
      await updateDoc(itemRef, updatedData);
      fetchData(); // Refresh data after update
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, collectionName, itemId));
      fetchData(); // Refresh data after deletion
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    loading,
    error,
    data,
    createItem,
    updateItem,
    deleteItem,
    fetchData,
  };
};

export default useCrud;
