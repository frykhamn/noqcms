import { db } from "../../../services/firebase.config";
import { getDocs, collection } from '@firebase/firestore';
import { useState, useEffect } from "react";

const Post = () => {
  const [latestArticle, setLatestArticle] = useState(null);

  const infoContentCollectionRef = collection(db, 'blog1');

  const getLatestArticle = async () => {
    try {
      const data = await getDocs(infoContentCollectionRef);
      const articles = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // sorting based on dateAdded and picking the latest
      articles.sort((a, b) => b.dateAdded - a.dateAdded);
      if (articles.length > 0) {
        setLatestArticle(articles[0]);
      }
      console.log(articles[0]); // Log the latest article
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    getLatestArticle();
  }, []);

  return (
    <>{latestArticle ? <li>{latestArticle.body}</li> : <p>No articles found.</p>}
    </>
  );
};

export default Post;
