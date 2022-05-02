import React from 'react';
import BodySection from '../../BodySection';
import PriceSection from '../../PriceSection';
import {homeObjOne, homeObjThree, homeObjTwo} from './Data';

function Home() {
  return (
    <>
        <PriceSection {...homeObjOne} />
        <BodySection {...homeObjTwo} />
        <BodySection {...homeObjThree} />
    </>
  );
}

export default Home;