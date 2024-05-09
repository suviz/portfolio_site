import ReactCardFlip from 'react-card-flip';

export default function CapyCard({isFlipped, handleClick, frontImage, frontAlt, backImage, BackAlt}) {

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

            <div className="front" onClick={handleClick}>
            <img
                src={frontImage}
                alt={frontAlt}
            />
            </div>

            <div className="back" onClick={handleClick}>
            <img
                src={backImage}
                alt={BackAlt}
            />
            </div>

        </ReactCardFlip>
    );
}