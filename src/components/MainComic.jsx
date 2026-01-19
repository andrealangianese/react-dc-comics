import comics from "../comics.js"

function ComicsList() {
    return(
    <div className="card-container">
        {/* itero con .map su array */}
        {
            comics.map((comic) =>
                <div className="card-img">
                    <img src={comic.thumb} alt={comic.series} />
                    <h3>{comic.series}</h3>
                </div>
            )
        }
    </div>
    )
}

export default ComicsList