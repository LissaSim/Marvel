import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import {useState} from "react";


const ComicsPage = () => {

    const [comicsSelected, setComics] = useState(null)
    const onComicsSelected = (id) => {
        setComics(id)
    }

    return (
        <>
            <AppBanner/>
            <ComicsList onComicsSelected={onComicsSelected}/>
            {/*<SingleComic/>*/}
        </>
    )
}

export default ComicsPage