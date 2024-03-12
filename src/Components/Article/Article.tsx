import "./Article.scss";
import moment from "moment";

interface ArticleProps {
  title: string;
  description: string;
  path: string;
  date: string;
  image: string;
  category: string;
  source: string;
}

export const Article = ({
  title,
  description,
  path,
  date,
  image,
  category,
  source,
}: ArticleProps) => {
  return (
    <div className="article">
      <div className="article__image">
        <img src={image} alt={title} />
      </div>

      <div className="article__info">
        <div className="article__info__label">
          <p className="article__date">{moment(date).format("DD MMM YYYY")}</p>
          <p className="article__category">{category}</p>
        </div>
        <h3 className="article__title">{title}</h3>
        <p className="article__description">{description}</p>
        <p className="article__source">{source}</p>
        <a
          className="article__link"
          href={path}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
