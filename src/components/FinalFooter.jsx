import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import maps from "../assets/img/footer-periscope.png";

function FinalFooter() {
    return (
        <div className="container">
            <button> SIGN-UP NOW!</button>
            <div>
                <a href="">FOLLOW US</a>
                <a href="#"><img src={facebook} alt="facebook logo" /></a>
                <a href="#"><img src={twitter} alt="twitter logo" /></a>
                <a href="#"><img src={youtube} alt="youtube logo" /></a>
                <a href="#"><img src={pinterest} alt="pinterest logo" /></a>
                <a href="#"><img src={maps} alt="maps logo" /></a>

            </div>
        </div>
    )
}

export default FinalFooter