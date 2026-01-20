import comics from "../../comics.js"
import ProductComicCard from "./ProductComicCard.jsx"

function ComicsList() {
    return(
    <div className="container card-container">
        {/* itero con .map su array */}
        {
            comics.map((comic) =>

            //     vado a sostituire con la card importa
            //     <div className="card-img ">
            //         <img src={comic.thumb} alt={comic.series} />
            //         <h3>{comic.series}</h3>
            //     </div>
            // )
            <ProductComicCard 
            thumb={comic.thumb}
            series={comic.series}
            />
        )}
    </div>
    )
}

export default ComicsList