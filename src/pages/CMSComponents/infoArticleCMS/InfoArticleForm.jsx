
import { useState, useEffect } from 'react';
import useCrud from '../customHooks/useCrud';
import { serverTimestamp } from '@firebase/firestore';
import PropTypes from 'prop-types';
import RichEditor from '../RichTextEditor';

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
<div className="fixed inset-0 flex justify-center items-center bg-opacity-50">
  <div className="bg-white p-8 rounded-md shadow-md" style={{ width: '50%', padding: '20px' }}>
    <h2 className="text-3xl font-bold mb-6">
      {isUpdateMode ? 'Update Article' : 'Create New Article'}
    </h2>
    <label className="block mb-4">Title:</label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border p-3 mb-6"
    />
    <label className="block mb-4">Text:</label>

    <RichEditor text={text} onChangeText={setText} />


    <div className="flex justify-end mt-6">
      <button
        onClick={handleCancel}
        className="mr-4 bg-gray-500 text-white px-6 py-3 rounded"
      >
        Cancel
      </button>
      <button
        onClick={handleAction}
        className="bg-blue-500 text-white px-6 py-3 rounded"
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