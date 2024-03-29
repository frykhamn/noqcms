import { useState } from 'react';
import PropTypes from 'prop-types';
import useCrud from '../customHooks/useCrud';

const InfoArticlesDeletion = ({ articleId, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteItem: deleteArticle } = useCrud('infoContent');

  const handleDelete = async () => {
    try {
      await deleteArticle(articleId);
      setIsModalOpen(false);
      onDelete(articleId); // Notify parent component about the deletion
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <>
      <button
        className="text-red-500 hover:text-red-700 cursor-pointer focus:outline-none"
        onClick={() => setIsModalOpen(true)}
      >
        Delete
      </button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg text-gray-800 mb-4">
              Are you sure you want to delete this article?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

InfoArticlesDeletion.propTypes = {
  articleId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InfoArticlesDeletion;
