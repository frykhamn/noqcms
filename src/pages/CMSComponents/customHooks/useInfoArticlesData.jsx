import { useState, useEffect } from 'react';
import { db } from '../../../services/firebase.config';
import { getDocs, collection } from '@firebase/firestore';

const useArticlesList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'infoContent'));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setArticles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { loading, error, articles };
};

export default useArticlesList;
