import { useState, useEffect } from 'react';
import useCrud from '../customHooks/useCrud';
import { serverTimestamp } from '@firebase/firestore';
import PropTypes from 'prop-types';

const NewsArticleForm = ({ article, onCreateDone, onCancel }) => {
  const [title, setTitle] = useState(article ? article.title : '');
  const [body, setBody] = useState(article ? article.body : '');
  const [author, setAuthor] = useState(article ? article.author : '');
  const [preamble, setPreamble] = useState(article ? article.preamble : '');
  const [created, setCreated] = useState(article ? article.created : '');
  const isUpdateMode = !!article;
  const { createItem: createArticle, updateItem: updateArticle } =
    useCrud('news-test');

  const handleAction = async () => {
    try {
      if (isUpdateMode) {
        if (!article.id) {
          console.error('Error: Article ID is missing.');
          return;
        }
        await updateArticle(article.id, { title, body, author, preamble, created });
      } else {
        await createArticle({ title, body, author, preamble, created: serverTimestamp() });
        onCreateDone();
      }
    } catch (error) {
      console.error('Update/Create error:', error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCancel();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          {isUpdateMode ? 'Update News Article' : 'Create New News Article'}
        </h2>
        <label className="block mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <label className="block mb-2">Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border p-2 mb-4 h-64" // Increased height
        ></textarea>
        <label className="block mb-2">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <label className="block mb-2">Preamble:</label>
        <input
          type="text"
          value={preamble}
          onChange={(e) => setPreamble(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <label className="block mb-2">Created:</label>
        <input
          type="text"
          value={created}
          onChange={(e) => setCreated(e.target.value)}
          className="w-full border p-2 mb-4"
        />
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

NewsArticleForm.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    preamble: PropTypes.string,
    created: PropTypes.any,
  }),
  onCreateDone: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default NewsArticleForm;
