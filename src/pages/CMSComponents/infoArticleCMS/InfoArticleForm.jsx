import { useState, useEffect } from 'react'; // Importera useState och useEffect från React för att hantera komponentens tillstånd och effekter.
import useCrud from '../customHooks/useCrud'; // Importera useCrud för att skapa eller uppdatera artiklar i Firebase.
import { serverTimestamp } from '@firebase/firestore'; // Importera serverTimestamp för att generera tidsstämplar för artiklar.
import PropTypes from 'prop-types'; // Importera PropTypes för att definiera egenskapstyper.
import { convertFromHTML, convertToRaw, convertFromRaw } from 'draft-js';
import RichEditor from '../RichText/RichTextEditor';

const ArticleForm = ({ article, onCreateDone, onCancel }) => {
  const [title, setTitle] = useState(article ? article.title : ''); // Skapa ett statiskt tillstånd för titeln med useState-kroken.
  const [text, setText] = useState(article ? article.text : ''); // Skapa ett statiskt tillstånd för texten med useState-kroken.
  const isUpdateMode = !!article; // Kontrollera om formuläret används för att uppdatera en befintlig artikel.

  const { createItem: createArticle, updateItem: updateArticle } =
    useCrud('infocontenttest'); // Använd useCrud för att skapa eller uppdatera artiklar i Firebase.

  const handleAction = async () => {
    try {
      if (!text) {
        console.error('Error: Text is undefined.');
        console.log(text);
        return;
      }


      if (isUpdateMode) {
        if (!article.id) {
          console.error('Error: Article ID is missing.');
          return;
        }

        await updateArticle(article.id, { title, text }); // Uppdatera den befintliga artikeln med den nya titeln och texten.
        // onUpdate(); // Notify parent component that update is done
      } else {
        await createArticle({ title, text, dateAdded: serverTimestamp() }); // Skapa en ny artikel med titel, text och tidsstämpel.
        onCreateDone(); // Notify parent component that creation is done
      }
    } catch (error) {
      console.error('Update/Create error:', error);
    }
  };

  const handleCancel = () => {
    onCancel(); // Används för att hantera avbrytande av formuläret.
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCancel(); // Lyssna på Escape-tangenten för att avbryta formuläret.
      }
    };

    document.addEventListener('keydown', handleKeyDown); // Lägg till händelselyssnare för tangenttryckning.

    return () => {
      document.removeEventListener('keydown', handleKeyDown); // Ta bort händelselyssnaren när komponenten avmonteras.
    };
  }, []); // Kör effekten endast när komponenten monteras.

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md" style={{ height: '80%', width: '80%', padding: '20px' }}>
        <h2 className="text-3xl font-bold mb-6">
          {isUpdateMode ? 'Update Article' : 'Create New Article'}
        </h2>
        <label className="block mb-4">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Uppdatera titeln vid inmatning.
          className="w-full border p-3 mb-6"
        />
        <label className="block mb-4">Text:</label>

        <RichEditor text={text} setText={setText} />

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
