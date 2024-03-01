import { useState, useEffect } from 'react';
import useInfoArticlesData from './customHooks/useInfoArticlesData';
import ArticleForm from './InfoArticleForm';
import InfoArticlesDeletion from './InfoArticlesDeletion';
import { deleteDoc, doc } from 'firebase/firestore'; // Adjust the import path based on your Firestore setup
import db from '../../services/firebase.config';
import CollapsibleContainer from './cmsDashboardLayout/CollapsibleContainer';



const InfoArticles = () => {
  const { loading, error, articles: infoArticles } = useInfoArticlesData();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isCreateMode, setCreateMode] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(infoArticles);
  }, [infoArticles]);

  const handleDelete = async (deletedArticleId) => {
    try {
      setSelectedArticle(null);
      const newArticles = articles.filter(
        (article) => article.id !== deletedArticleId
      );
      setArticles(newArticles);
      await deleteArticleFromFirestore(deletedArticleId);
    } catch (error) {
      console.error('Error deleting article:', error);
      // Handle errors here, such as displaying a notification to the user
    }
  };

  const deleteArticleFromFirestore = async (articleId) => {
    try {
      // Implement Firestore deletion logic here
      await deleteDoc(doc(db, 'infoContent', articleId)); // Ensure 'db' is properly imported from your Firebase configuration
    } catch (error) {
      console.error('Error deleting article from Firestore:', error);
    }
  };

  const handleUpdateDone = () => {
    setSelectedArticle(null);
  };

  const handleCreateDone = () => {
    setCreateMode(false);
  };

  const handleCreateClick = () => {
    setCreateMode(true);
  };

  const handleUpdateClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCancel = () => {
    setSelectedArticle(null);
    setCreateMode(false);
  };

  return (
    <CollapsibleContainer title="Info Articles">
      <button
        onClick={handleCreateClick}
        className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Create Article
      </button>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          articles.map((article) => (
            <li
              key={article.id}
              className="bg-white p-6 rounded-md shadow-md mb-4"
            >
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.text}</p>
              <div className="mt-4 flex justify-between items-center space-x-4">
                <small className="text-gray-500">
                  {article.dateAdded
                    ? article.dateAdded.toDate().toLocaleString()
                    : 'N/A'}
                </small>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleUpdateClick(article)}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Update
                  </button>
                  <InfoArticlesDeletion
                    articleId={article.id}
                    onDelete={handleDelete}
                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                  />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
      {(selectedArticle || isCreateMode) && (
        <ArticleForm
          article={selectedArticle}
          onUpdate={handleUpdateDone}
          onCreate={handleCreateDone}
          onCancel={handleCancel}
        />
      )}
    </CollapsibleContainer>
  );
};

export default InfoArticles;
