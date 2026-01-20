const ProductComicCard = (props) => {
    // destrutturo l'oggetto

    const { thumb, series } = props;
    
    //uso il riferimento di ciò che avevo già creato e lo sostituisco sotto
    return(
    // <div className="card-img ">
    //     <img src={comic.thumb} alt={comic.series} />
    //     <h3>{comic.series}</h3>
    // </div>
    <div className="card-img ">
        <img src={thumb} alt={series} />
        <h3>{series}</h3>
    </div>
    )
}
export default ProductComicCard