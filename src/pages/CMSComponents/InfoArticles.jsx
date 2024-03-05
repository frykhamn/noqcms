import { useState, useEffect  } from 'react';
import useCrud from './customHooks/useCrud';
import CollapsibleContainer from './cmsDashboardLayout/CollapsibleContainer';
import ArticleForm from './InfoArticleForm';
import InfoArticlesDeletion from './InfoArticlesDeletion';

// In CMS page, in Info Aricles tab
// We display the four articles using the code here. We use customHook useCrud to retrieve the articles from Firestore.

const InfoArticles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isCreateMode, setCreateMode] = useState(false);
  const {
    loading,
    error,
    data: articles,
    deleteItem: deleteArticle,
    fetchData 
  } = useCrud('infoContent');

  useEffect(() => {
    fetchData();
  },[]);

  const handleDelete = async (deletedArticleId) => {
    try {
      await deleteArticle(deletedArticleId);
      setSelectedArticle(null);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  // const deleteArticleFromFirestore = async (articleId) => {
  //   try {
  //     // Implement Firestore deletion logic here
  //     await deleteDoc(doc(db, 'infoContent', articleId));
  //   } catch (error) {
  //     console.error('Error deleting article from Firestore:', error);
  //   }
  // };

  // //Resets the selected article after an update operation.
  // const handleUpdateDone = () => {
  //   setSelectedArticle(null);
  // };
  // Sets the create mode to false after creating a new article.
  const handleCreateDone = () => {
    setCreateMode(false);
  };
  // Sets the create mode to true to initiate article creation.
  const handleCreateClick = () => {
    setCreateMode(true);
  };
  // Sets the selected article for update operation.
  const handleUpdateClick = (article) => {
    setSelectedArticle(article);
  };
  // Cancels the article creation or update operation.
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
           <div>
           <p>Loading articles...</p>
           <p>This may take a moment depending on the data size.</p>
         </div>
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
          onCreateDone={handleCreateDone}
          onCancel={handleCancel}
        />
      )}
    </CollapsibleContainer>
  );
};

export default InfoArticles;
