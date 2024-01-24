import { useState, useEffect } from 'react';
import { db } from '../../services/firebase.config';
import { doc, updateDoc, addDoc, collection, serverTimestamp } from '@firebase/firestore';
import PropTypes from 'prop-types';

const ArticleForm = ({ article, onUpdate, onCreate, onCancel }) => {
  const [title, setTitle] = useState(article ? article.title : '');
  const [text, setText] = useState(article ? article.text : '');

  const isUpdateMode = !!article;

  const handleAction = async () => {
    try {
      if (isUpdateMode) {
        if (!article.id) {
          console.error('Error: Article ID is missing.');
          return;
        }

        const articleRef = doc(db, 'infoContent', article.id);
        await updateDoc(articleRef, {
          title,
          text,
        });
        onUpdate(); // Notify parent component that update is done
      } else {
        const newArticleRef = await addDoc(collection(db, 'infoContent'), {
          title,
          text,
          dateAdded: serverTimestamp(),
          // Add other fields here
        });
        onCreate(newArticleRef.id); // Notify parent component that creation is done
      }
    } catch (error) {
      console.error('Update/Create error:', error);
    }
  };

  const handleCancel = () => {
    // Invoke the onCancel prop passed from the parent component
    onCancel();
  };

  // Event listener for the Escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCancel(); // Cancel if Escape key is pressed
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('keydown', handleKeyDown);
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">{isUpdateMode ? 'Update Article' : 'Create New Article'}</h2>
        <label className="block mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <label className="block mb-2">Text:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border p-2 mb-4"
        ></textarea>
        {/* Add other input fields for img, date, etc. */}
        <div className="flex justify-end">
          <button onClick={handleCancel} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleAction} className="bg-blue-500 text-white px-4 py-2 rounded">
            {isUpdateMode ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
};
ArticleForm.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    // Add any other properties as needed
  }),
  onUpdate: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired, 
};

export default ArticleForm;