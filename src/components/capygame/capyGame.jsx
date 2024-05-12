import * as React from 'react';
import { useState, useEffect } from "react";
import Confetti from 'react-confetti'
import CapyCard from './capyCard';
import './capyGame.css';
import capyArray from './gameData.js';

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

export function shuffleCards() {
  return capyArray.map(value => ({ value, sort: Math.random() }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(({ value }) => value);
}

export default function CapyGame() {

  // Screen size for winning confetti dimensions
  const screenSize = useScreenSize();

  // States for cards array, first card clicked, second click status and waiting mode status
  const [cards, setCards] = useState(shuffleCards());
  const [firstCard, setFirstCard] = useState(null);
  const [secondClick, setSecondClick] = useState(false);
  const [cardsLeft, setCardsLeft] = useState(cards.length);
  const [waiting, setWaiting] = useState(false);
  const [isWon, setIsWon] = useState(false);

  function handleClick(e, clickedCard) {
    // Ignore clicks if in waiting more or clicked card is already found
    if (waiting || clickedCard.isFound) {return;} 

    if (!secondClick) { // If first click
      setFirstCard(clickedCard);
      flipCard(clickedCard);
      setSecondClick(true);
    } else { // If second click
      // Flip only if card is not the same as first clicked-one
      if(clickedCard.id !== firstCard.id){
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
      card.isFound = true;
      firstCard.isFound = true;
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
    // Change flip status if card hasn't been found yet
    if (!clickedCard.isFound) { 
      clickedCard.isFlipped = !clickedCard.isFlipped;
    }
    // Save card's new state in the cards array
    let index = cards.findIndex((card) => card.id === clickedCard.id);
    let newState = [...cards];
    newState.splice(index, 1, clickedCard);
    setCards(newState);
  };

  function newGame() {
    const newArr = shuffleCards();
    newArr.forEach(c => {
      c.isFlipped = false;
      c.isFound = false;
    });
    setTimeout(() => {
      setCards(newArr);
      setFirstCard(null);
      setSecondClick(false);
      setCardsLeft(newArr.length);
      setWaiting(false);
      setIsWon(false);
    }, 100);
  }

  return (
    <section className='capy-game'>
      {isWon  ? <Confetti
                  width={screenSize.width}
                  height={screenSize.height}
                  numberOfPieces={1000}
                /> 
              : ""}

      <div className='game-title'>
        <h1>{!isWon ? "Match the capybaras 🦫" : "Capy Slay 💅 🦫"}</h1>
      </div>

      <div className="game-grid">
        {cards?.map((card) => (
            <CapyCard
              key={card.id}
              card={card}
              onClick={(e) => handleClick(e, card)}
            />
          )
        )}
      </div>

      <div className='game-restart'>
        <button className='button' onClick={newGame}>
          Restart
        </button>
      </div>
    </section>
  );
}
