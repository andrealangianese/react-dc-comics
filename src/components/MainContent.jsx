import DcSmartphone from "../assets/img/buy-comics-digital-comics.png"
import DcTshirt from "../assets/img/buy-comics-merchandise.png"
import DcCard from "../assets/img/buy-comics-subscriptions.png"
import DcLuogo from "../assets/img/buy-comics-shop-locator.png"
import DcPower from "../assets/img/buy-dc-power-visa.svg"

function MainContent() {
    return (
        <div>
            <a href="#">
                <img src={DcSmartphone} alt="" style={{ width: "200px", border: "1px solid red" }} />
                <span> DIGITAL COMICS</span>
            </a>
            <a href="#">
                <img src={DcTshirt} alt="" style={{ width: "200px", border: "1px solid red" }} />
                <span> DC MERCHANDISE</span>
            </a>
            <a href="#">
                <img src={DcCard} alt="" style={{ width: "200px", border: "1px solid red" }} />
                <span> SUBSCRIPTION</span>
            </a>
            <a href="#">
                <img src={DcLuogo} alt="" style={{ width: "200px", border: "1px solid red" }} />
                <span> COMIC SHOP LOCATOR</span>
            </a>
            <a href="#">
                <img src={DcPower} alt="" style={{ width: "200px", border: "1px solid red" }} />
                <span> DC POWER VISA</span>
            </a>
        </div>

    )
}

export default MainContent