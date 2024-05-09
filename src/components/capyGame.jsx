import * as React from 'react';
import { useState } from 'react';
import CapyCard from './capyCard';
import './capyGame.css';

import king from '../pictures/capybara/king.png';
import sad from '../pictures/capybara/sad.png';
import happy from '../pictures/capybara/happy.png';
import hungry from '../pictures/capybara/hungry.png';
import slay from '../pictures/capybara/slay.png';
import mad from '../pictures/capybara/mad.png';
import frontside from '../pictures/capybara/questionmark.png';

export default function CapybaraGame() {

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);

  return (
    <div className='capy-grid'>

      <CapyCard
        isFlipped={isFlipped1}
        setIsFlipped={setIsFlipped1}
        frontImage={frontside}
        frontAlt={"questionmark"}
        backImage={slay}
        backAlt={"slay capy"} 
      />

      <CapyCard
        isFlipped={isFlipped2}
        setIsFlipped={setIsFlipped2}
        frontImage={frontside}
        frontAlt={"questionmark"}
        backImage={hungry}
        backAlt={"hungry capy"} 
      />

      <CapyCard
        isFlipped={isFlipped3}
        setIsFlipped={setIsFlipped3}
        frontImage={frontside}
        frontAlt={"questionmark"}
        backImage={happy}
        backAlt={"happy capy"} 
      />

      <CapyCard   
        isFlipped={isFlipped4}
        setIsFlipped={setIsFlipped4}
        frontImage={frontside}
        frontAlt={"questionmark"}
        backImage={king}
        backAlt={"king capy"} 
      />

      <CapyCard   
        isFlipped={isFlipped5}
        setIsFlipped={setIsFlipped5}
        frontImage={frontside}
        frontAlt={"questionmark"}
        backImage={sad}
        backAlt={"sad capy"} 
      />

      <CapyCard   
        isFlipped={isFlipped6}
        setIsFlipped={setIsFlipped6}
        frontImage={frontside}
        frontAlt={"questionmark"}
        backImage={mad}
        backAlt={"mad capy"} 
      />


    </div>
  );
}