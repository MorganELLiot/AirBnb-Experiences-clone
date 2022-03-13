import star from '../images/small-star.png';

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0)
        badgeText = "SOLD OUT"
    else if ( props.location === "Online")
        badgeText = "ONLINE"

    return (
        <div id="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={props.coverImg} alt="Katie Zaferes photograph" />
            <div className="card--line">
                <img className="card--star" src={star} alt="Star icon" />
                <span className="card--rating">{props.stats.rating}&nbsp;</span>
                <span className="card--stats">({props.stats.reviewCount})·{props.location}</span>
            </div>
            <div className="card--line">
                <span className="card--title">{props.title}</span>
            </div>
            <div className="card--line">
                <span className="card--price">From ${props.price}</span>
                <span>&nbsp;/ person</span>
            </div>
        </div>
    );
}