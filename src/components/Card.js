import star from '../images/small-star.png';

export default function Card(props) {
    return (
        <div className="card">
            <a className="btn btn-default card--button">SOLD OUT</a>
            <img className="card--image" src={props.img} alt="Katie Zaferes photograph" />
            <div>
                <img className="card--star" src={star} alt="Star icon" />
                <span className="card--rating">{props.rating}&nbsp;</span>
                <span className="card--stats">({props.reviewCount})·{props.location}</span>
            </div>
            <div>
                <span className="card--title">{props.title}</span>
            </div>
            <div>
                <span className="card--price">From ${props.price}</span>
                <span>&nbsp;/ person</span>
            </div>
        </div>
    );
}