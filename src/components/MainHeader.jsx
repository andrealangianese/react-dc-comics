import dcLogo from "../assets/img/dc-logo.png";
import jumbo from "../assets/img/jumbotron.jpg"

const navBarData =[
    {name: "CHARACTERS" , href: "#"},
    {name: "COMICS" , href: "#"},
    {name: "MOVIES" , href: "#"},
    {name: "TV" , href: "#"},
    {name: "GAMES" , href: "#"},
    {name: "COLLECTIBLES" , href: "#"},
    {name: "VIDEOS" , href: "#"},
    {name: "FANS" , href: "#"},
    {name: "NEWS" , href: "#"},
    {name: "SHOP" , href: "#"}
]
function MainHeader() {
    return (
        <>
            <div className="header-flex container">
                <img src={dcLogo} alt="DC Logo" />
                <ul>
                    {navBarData.map((data, index) =>(
                        <li key={index}>
                            <a className="flex-a" href={data.href}> {data.name}</a>
                        </li>
                    ))
                    }
                </ul>

            </div>
            <div className="img-jumbo">
                <img src={jumbo} alt="" />
            </div>
        </>
    )
}

export default MainHeader