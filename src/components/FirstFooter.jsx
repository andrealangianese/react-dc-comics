import bigLogo from "../assets/img/dc-logo-bg.png"

function FirstFooter() {
    return (
        <div className="container">
            <div>
                <h5>DC COMICS</h5>
                <ul>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>
                </ul>
                <h5>SHOP</h5>
                <ul>
                    <li><a href="">Shop DC</a></li>
                    <li><a href="">Shop DC Collectibles</a></li>
                </ul>
                <h5>DC</h5>
                <ul>
                    <li><a href="#">Terms of Use </a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Advertiising</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Talent Workshop</a></li>
                    <li><a href="#">CPSC Certificates</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Shop Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <h5>SITES</h5>
                <ul><li><a href="#">DC</a></li>
                    <li><a href="#">Mad Magazzine</a></li>
                    <li><a href="#">DC Kids</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">DC Power Visa</a></li>
                </ul>
            </div>
            <div>
                <img src={bigLogo} alt="big logo" />
            </div>
        </div>
    )
}

export default FirstFooter