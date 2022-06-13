import './Singlecard.css'

export default function Singlecard({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }

    }
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front"></img>
                <img className="back" src="/img/background.jpeg"
                    alt="card back"
                    onClick={handleClick}></img>
            </div>
        </div>
    )
}
