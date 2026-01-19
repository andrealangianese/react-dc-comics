import dcLogo from "../assets/img/dc-logo.png";
import jumbo from "../assets/img/jumbotron.jpg"

function MainHeader() {
    return (
        <>
            <div className="header-flex">
                <img src={dcLogo} alt="DC Logo" />
                <ul>
                    <li><a className="flex-a" href="#">CHARACTERS</a></li>
                    <li><a className="flex-a" href="#">COMICS</a></li>
                    <li><a className="flex-a" href="#">MOVIES</a></li>
                    <li><a className="flex-a" href="#">TV</a></li>
                    <li><a className="flex-a" href="#">GAMES</a></li>
                    <li><a className="flex-a" href="#">COLLECTIBLES</a></li>
                    <li><a className="flex-a" href="#">VIDEOS</a></li>
                    <li><a className="flex-a" href="#">FANS</a></li>
                    <li><a className="flex-a" href="#">NEWS</a></li>
                    <li><a className="flex-a" href="#">SHOP</a></li>
                </ul>

            </div>
            <div>
                <img className="img-jumbo" src={jumbo} alt="jumbo-img" />
            </div>
        </>
    )
}

export default MainHeader