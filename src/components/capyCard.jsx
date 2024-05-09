import ReactCardFlip from 'react-card-flip';
import './capyCard.css';

export default function CapyCard({isFlipped, setIsFlipped, frontImage, frontAlt, backImage, backAlt}) {

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className='capy-card'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

                <div className="front" onClick={handleClick}>
                <img className='capy-img'
                    src={frontImage}
                    alt={frontAlt}
                />
                </div>

                <div className="back" onClick={handleClick}>
                <img className='capy-img'
                    src={backImage}
                    alt={backAlt}
                />
                </div>

            </ReactCardFlip>
        </div>
    );
}