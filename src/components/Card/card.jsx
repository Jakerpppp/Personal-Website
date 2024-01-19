import './card.css'

function Card() {

    return (
    <div class="card">
        <img src="github-mark-white.png" alt="Card Image" class="card-image"/>
        <div class="card-content">
        <h2 class="card-title">Card Title</h2>
        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget dolor mauris.</p>
        <button class="card-button">More Info!</button>
        </div>
    </div>
    )

}

export default Card