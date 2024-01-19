import './card.css'

function Card({image, title, description}) {

    return (
    <div class="card">
        <img src={image} alt="Card Image" class="card-image"/>
        <div class="card-content">
        <h2 class="card-title">{title}</h2>
        <p class="card-description">{description}</p>
        <button class="card-button">More Info!</button>
        </div>
    </div>
    )

}

export default Card