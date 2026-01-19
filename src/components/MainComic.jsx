import comics from "../comics.js"

function ComicsList() {
    return(
    <div>
        {/* itero con .map su array */}
        {
            comics.map((comic) =>
                <>
                    <img src={comic.thumb} alt={comic.series} />
                    <h3>{comic.series}</h3>
                </>
            )
        }
    </div>
    )
}

export default ComicsList