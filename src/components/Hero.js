import pics from '../images/airbnb-hero-pics.png'

export default function Hero() {
    return (
        <div class="hero">
            <img className="hero--img" src={pics} alt="Background image of happy customers." />
            <div>
                <h1 className="hero--title">Online Experiences</h1>
                <p className="hero--blurb">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}