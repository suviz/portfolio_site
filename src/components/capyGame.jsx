import * as React from 'react';
import { useState, useEffect } from "react";
import Confetti from 'react-confetti'
import CapyCard from './capyCard';
import './capyGame.css';

import king from '../pictures/capybara/king.png';
import sad from '../pictures/capybara/sad.png';
import happy from '../pictures/capybara/happy.png';
import hungry from '../pictures/capybara/hungry.png';
import slay from '../pictures/capybara/slay.png';
import mad from '../pictures/capybara/mad.png';

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

const cards = [
  { id: 0, name: "king", img: king },
  { id: 1, name: "king", img: king },
  { id: 2, name: "sad", img: sad },
  { id: 3, name: "sad", img: sad },
  { id: 4, name: "happy", img: happy },
  { id: 5, name: "happy", img: happy },
  { id: 6, name: "hungry", img: hungry },
  { id: 7, name: "hungry", img: hungry },
  { id: 8, name: "slay", img: slay },
  { id: 9, name: "slay", img: slay },
  { id: 10, name: "mad", img: mad },
  { id: 11, name: "mad", img: mad },
];

function shuffle(array){
  return array
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
}

export const cardsShuffled = shuffle(cards);

export default function CapyGame() {

  // Screen size for winning confetti dimensions
  const screenSize = useScreenSize();

  // States for cards array, first card clicked, second click status and waiting mode status
  const [cards, setCards] = useState(cardsShuffled);
  const [firstCard, setFirstCard] = useState(null);
  const [secondClick, setSecondClick] = useState(false);
  const [cardsLeft, setCardsLeft] = useState(cardsShuffled.length);
  const [waiting, setWaiting] = useState(false);
  const [isWon, setIsWon] = useState(false);

  function handleClick(e, clickedCard) {
    // Ignore clicks if in waiting more or clicked card is already found
    if (waiting || clickedCard.found) {return;} 

    if (!secondClick) { // If first click
      setFirstCard(clickedCard);
      flipCard(clickedCard);
      setSecondClick(true);
    } else { // If second click
      // Flip only if card is not the same as first clicked-one
      if(clickedCard.id != firstCard.id){
        flipCard(clickedCard);
      }
      checkCard(clickedCard);
      setFirstCard(null);
      setSecondClick(false);
    }
  };

  function checkCard(card) {
    if((card.id === firstCard.id)){ // If card is the same as the first clicked-one
      // Flip card back after timeout
      setWaiting(true);
      setTimeout(() => {
        flipCard(card);
        setWaiting(false);
      }, 200);
    } else if (card.name === firstCard.name) { // If card matches with the first clicked-one
      // Change statuses to found (-> cards stay flipped) & update cardsLeft and isWon
      console.log("WON ??");
      card["found"] = true;
      firstCard["found"] = true;
      flipCard(card);
      flipCard(firstCard);
      if(cardsLeft <= 2){
        setIsWon(true);
      }
      setCardsLeft(cardsLeft - 2);      
    } else { // If cards don't match
      // Wait timeout and then change statuses (cards remain unfound & are flipped back)
      setWaiting(true);
      setTimeout(() => {
        flipCard(card);
        flipCard(firstCard);
        setWaiting(false);
      }, 1000);
    }
  };

  function flipCard(clickedCard) {
    // Flip card if it hasn't been found yet
    if (!clickedCard.found) { 
      clickedCard.isFlipped = !clickedCard.isFlipped;

      // Save card's new state in the cards array
      let index = cards.findIndex((card) => card.id === clickedCard.id);
      let newState = [...cards];
      newState.splice(index, 1, clickedCard);
      setCards(newState);
    }
  };

  return (
    <section className='capy-game'>

      <div className='game-title'>
        <h1>{!isWon ? "Match the capybaras 🦫" : "Capy Slay 💅 🦫"}</h1>
      </div>

      <div className="capy-grid">
        {cards?.map((card) => (
            <CapyCard
              key={card.id}
              card={card}
              onClick={(e) => handleClick(e, card)}
            />
          )
        )}
      </div>

    {isWon  ? <Confetti
                width={screenSize.width}
                height={screenSize.height}
                numberOfPieces={1000}
              /> 
            : ""}

    </section>
  );
}
