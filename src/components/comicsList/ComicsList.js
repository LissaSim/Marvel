import './comicsList.scss';
import {useEffect, useState} from "react";
import useMarvelService from "../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import {Link} from "react-router-dom";

const ComicsList = (props) => {
    const [comicsList, setComicsList] = useState([]);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);
    const [offset, setOffset] = useState(0)

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    }, [])

   const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
       if (newComicsList.length < 8) {
           ended = true
       }

       setComicsList(comicsList => [...comicsList, ...newComicsList]);
       setNewComicsLoading(false);
       setOffset(offset => offset + 8);
       setComicsEnded(comicsEnded => ended)
    }

  const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <li
                    className="comics__item"
                    key={i}
                    onClick={() => props.onComicsSelected(item.id)}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            )
        })

      return (
          <ul className="comics__grid">
              {items}
          </ul>
      )
  }

    const items = renderItems(comicsList);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newComicsLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {items}
            {errorMessage}
            {spinner}
            <button
                className="button button__main button__long"
                disabled={newComicsLoading}
                onClick={ () => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;