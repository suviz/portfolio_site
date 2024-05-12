import frontside from '../../pictures/capybara/questionmark.png';
import './capyCard.css';

export default function CapyCard({ card, onClick }) {

    return (
      <div
        className={`capy-card ${card.isFlipped ? "flipped" : ""}`}
        onClick={onClick}
      >
        <img className="frontside" src={card.img} alt="card frontside" />
        <img className="backside" src={frontside} alt="card backside" />
      </div>
    );
}