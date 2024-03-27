import SmallButtonComponent from "./SmallButtonComponent";
import { useState, useEffect } from 'react';
import { db } from '../../../services/firebase.config';
import { getDocs, collection } from '@firebase/firestore';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from "draft-js-export-html";
import parse from 'html-react-parser';

export default function InformationComponent() {
  const [infoContent, setInfoContent] = useState([]);
  const infoContentCollectionRef = collection(db, 'infocontenttest');

  const getInfoContent = async () => {
    try {
      const data = await getDocs(infoContentCollectionRef);
      const fetchedInfoContent = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setInfoContent(fetchedInfoContent);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfoContent();
  }, []);

  return (
    <section className="p-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-4">
            En IT-lösning för att hitta<span className="block"> sovplats för natten</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {infoContent.map((item) => {
            const content = stateToHTML(convertFromRaw(JSON.parse(item.text)));

            return (
              <div key={item.id} className="mb-8 marker list-revert">
                <h3 className="font-semibold mb-8">{item.title}</h3>
   
                {parse(content)}
                {/* <SmallButtonComponent title={item.title}></SmallButtonComponent> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

}