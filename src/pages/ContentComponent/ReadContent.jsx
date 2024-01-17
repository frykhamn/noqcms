import { useState, useEffect } from 'react';
import { db } from '../../services/firebase.config';
import { getDocs, collection } from '@firebase/firestore';
import DeleteContent from './DeleteContent';
import ArticleForm from './ArticleForm';

const ReadContent = () => {
  const [articles, setArticles] = useState([]);
  const [isCreateMode, setCreateMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articlesCollectionRef = collection(db, 'articles');

  const getArticlesList = async () => {
    try {
      const data = await getDocs(articlesCollectionRef);
      const filteredArticles = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // sorting based on dateAdded
      filteredArticles.sort((a, b) => b.dateAdded - a.dateAdded);
      setArticles(filteredArticles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticlesList();
  }, []);

  const handleDelete = (deletedArticleId) => {
    // Update state to remove the deleted article
    setArticles((prevArticles) => prevArticles.filter((article) => article.id !== deletedArticleId));
  };

  const handleUpdateClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCancel = () => {
    // Reset selected article and create mode when canceling
    setSelectedArticle(null);
    setCreateMode(false);
  };

  const handleUpdateDone = () => {
    // Reset selected article after update is done
    setSelectedArticle(null);
    // Refresh the articles list
    getArticlesList();
  };

  const handleCreateClick = () => {
    setCreateMode(true);
  };

  const handleCreateDone = () => {
    // Reset create mode after new article is created
    setCreateMode(false);
    // Refresh the articles list
    getArticlesList();
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Latest Articles</h1>

      {/* Style for Create Article button */}
      <button
        onClick={handleCreateClick}
        className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Create Article
      </button>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {articles.map((article) => (
          <li key={article.id} className="bg-white p-6 rounded-md shadow-md mb-4">
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700">{article.body}</p>
            <div className="mt-4 flex justify-between items-center space-x-4">
              <small className="text-gray-500">
                {article.dateAdded && article.dateAdded.toDate().toLocaleString()}
              </small>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleUpdateClick(article)}
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Update
                </button>
                <DeleteContent
                  articleId={article.id}
                  onDelete={handleDelete}
                  className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Render ArticleForm when an article is selected for update or in create mode */}
      {(selectedArticle || isCreateMode) && (
        <ArticleForm
          article={selectedArticle}
          onUpdate={handleUpdateDone}
          onCreate={handleCreateDone}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default ReadContent;