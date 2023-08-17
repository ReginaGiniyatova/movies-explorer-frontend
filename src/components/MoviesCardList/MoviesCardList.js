import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import "./MoviesCardList.css";

function MoviesCardList({ isSavedMovies }) {
  let cards = [
    {
      name: "Animal",
      duration: "1ч42м",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
    {
      name: "Animal",
      duration: "1h 42m",
      link: "https://s.mediasalt.ru/images/243/243729/original.jpg",
    },
  ];
  const visibleCardsCount = 16;
  const [visibleCards, setVisibleCards] = useState([]);
  const [isEmptyResults, setEmptyResults] = useState(false);
  const [isMoreButtonVisible, setMoreButtonVisible] = useState(true);

  useEffect(() => {
    setVisibleCards(cards.slice(0, visibleCards.length + visibleCardsCount));
  }, []);

  let onMoreButtonClick = () => {
    setEmptyResults(false);
    setVisibleCards(cards.slice(0, visibleCards.length + visibleCardsCount));
    console.log(`${visibleCards.length} ${cards.length} `);
    setMoreButtonVisible(visibleCards.length < cards.length);
  };

  return (
    <section className="movies-list">
      {isEmptyResults && (
        <h2 className="movies-list__empty-result-text movies-list__empty-result-text_visible">
          Ничего не найдено
        </h2>
      )}
      <ul className="movies-list__grid">
        {visibleCards.map((card, id) => (
          <MoviesCard card={card} key={id} isSavedMovies={isSavedMovies} />
        ))}
      </ul>
      <button
        className={`movies__more-btn ${
          !isMoreButtonVisible && "movies__more-btn_hidden"
        }`}
        type="button"
        onClick={onMoreButtonClick}
      >
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
