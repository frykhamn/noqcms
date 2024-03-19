import { useState, useEffect } from "react";
import { collection, getDocs, limit, query } from "@firebase/firestore";
import { db } from "../../../services/firebase.config";
import { Link } from "react-router-dom";
import slugGenerator from "../../CMSComponents/customHooks/slugGenerator";

import BigButton from "./BigButton";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollectionRef = collection(db, "news-test");
        const dbQuery = query(newsCollectionRef, limit(1));
        const data = await getDocs(dbQuery);
        const fetchedNews = data.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }));
        setNews(fetchedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  console.log(news);

  return (
    <section className="p-10 bg-bkg-dark text-white">
      <h3 className="mb-10 text-5xl">Senaste nytt</h3>
      <div className="flex flex-row justify-between">
        {news.map((article) => (
          <div key={article.id} className="w-2/5 flex flex-col">
            <div className="flex flex-row justify-between font-semibold text-lg mb-10">
              <span>{`${article.title}, ${article.author}`}</span>
              <span>{article.created}</span>
            </div>
            <p className="mb-6">{article.body}</p>
            <div className="flex flex-row justify-end">
              <Link
                to={`/nyheter/${slugGenerator(article.title)}`}
                state={{ article: article }}
              >
                <BigButton variant={"primary"} title={"Läs mer"} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
