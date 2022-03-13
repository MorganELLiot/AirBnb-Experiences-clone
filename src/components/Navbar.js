import logo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
                <img className="nav--img" src={logo} alt="AirBnb logo" />
        </nav>
    )
}