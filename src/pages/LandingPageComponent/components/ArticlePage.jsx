import { useLocation } from "react-router-dom";

export const ArticlePage = () => {
  let { state } = useLocation();
  let { article } = state;

  return (
    <section>
      <div className="max-w-4xl mx-auto px-4">
        <img
          className="h-96 mx-auto"
          src="/src/assets/images/3pwolvay.bmp"
          alt="Header Image"
        />
      </div>
      <div className="bg-bkg-light py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex flex-row justify-between w-1/6 mb-4">
            <span>{article.created}</span>
            <span>{article.author}</span>
          </div>
          <p className="mb-4">{article.preamble}</p>
          <p className="mb-4">{article.body}</p>
          <p className="mb-4">{article.body}</p>
          <p>{article.body}</p>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
