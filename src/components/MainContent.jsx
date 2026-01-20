import DcSmartphone from "../assets/img/buy-comics-digital-comics.png"
import DcTshirt from "../assets/img/buy-comics-merchandise.png"
import DcCard from "../assets/img/buy-comics-subscriptions.png"
import DcLuogo from "../assets/img/buy-comics-shop-locator.png"
import DcPower from "../assets/img/buy-dc-power-visa.svg"

function MainContent() {
    return (
        <div className="container">
            <a href="#">
                <img src={DcSmartphone} alt="" />
                <span> DIGITAL COMICS</span>
            </a>
            <a href="#">
                <img src={DcTshirt} alt=""/>
                <span> DC MERCHANDISE</span>
            </a>
            <a href="#">
                <img src={DcCard} alt=""  />
                <span> SUBSCRIPTION</span>
            </a>
            <a href="#">
                <img src={DcLuogo} alt=""  />
                <span> COMIC SHOP LOCATOR</span>
            </a>
            <a href="#">
                <img src={DcPower} alt="" />
                <span> DC POWER VISA</span>
            </a>
        </div>

    )
}

export default MainContent