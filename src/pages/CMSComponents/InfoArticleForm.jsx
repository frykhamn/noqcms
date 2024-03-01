import { useState, useEffect } from 'react';
import useCrud from './customHooks/useCrud';
import { serverTimestamp } from '@firebase/firestore';
import PropTypes from 'prop-types';

// In CMS web page
// In the "Info Articles" tab, when you press Create Article or Update
// a form pops up that lets the user create or update using the form.

const ArticleForm = ({ article, onCreateDone, onCancel }) => {
  const [title, setTitle] = useState(article ? article.title : '');
  const [text, setText] = useState(article ? article.text : '');
  const isUpdateMode = !!article;
  const { createItem: createArticle, updateItem: updateArticle } =
    useCrud('infoContent');

  const handleAction = async () => {
    try {
      if (isUpdateMode) {
        if (!article.id) {
          console.error('Error: Article ID is missing.');
          return;
        }
        await updateArticle(article.id, { title, text });
        // onUpdate(); // Notify parent component that update is done
      } else {
        await createArticle({ title, text, dateAdded: serverTimestamp() });
        onCreateDone(); // Notify parent component that creation is done
      }
    } catch (error) {
      console.error('Update/Create error:', error);
    }
  };

  const handleCancel = () => {
    onCancel(); // Invoke the onCancel prop passed from the parent component
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCancel(); // Cancel if Escape key is pressed
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Run only on component mount

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          {isUpdateMode ? 'Update Article' : 'Create New Article'}
        </h2>
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
        <div className="flex justify-end">
          <button
            onClick={handleCancel}
            className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAction}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
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
  }),
  onCreateDone: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ArticleForm;
