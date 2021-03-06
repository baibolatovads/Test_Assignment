import React, { useEffect, useState } from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './BodySection.css';

function BodySection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__body-section' : 'home__body-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__body-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__body-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p className={lightTextDesc ? 'home__body-subtitle' : 'home__body-subtitle dark'}>
                  {description}
                </p>
                
                <Link to='/start-investing'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__body-img-wrapper'>
                <img src={img} alt={alt} className='home__body-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodySection;