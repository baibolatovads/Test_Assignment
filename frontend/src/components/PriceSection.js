import React, { useEffect, useState } from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './PriceSection.css';
import Axios from 'axios'

function PriceSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description1,
    description2,
    description3,
    buttonLabel,
    img,
    alt,
    imgStart
  }) {
    const [price, setPrice] = useState([])
    useEffect(() => {
      fetchPrice();
    }, [])
    useEffect(() => {
      console.log(price)
    }, [price])
    const fetchPrice=async()=>{
      const response=await Axios('http://0.0.0.0:8001/api/');
      setPrice(response.data)    
    }
    return (
      <>
        <div
          className={lightBg ? 'home__price-section' : 'home__price-section darkBg'}
        >
          <div className='container'>
            <div
              className='row home__price-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__price-text-wrapper'>
                  <div className='top-line'>{topLine}</div>
                  <h1 className={lightText ? 'price_heading' : 'price_heading dark'}>
                    {headline}
                  </h1>
                  <p className={lightTextDesc ? 'home__price-subtitle' : 'home__price-subtitle dark'}>
                    {description1} {price}$
                    <br></br>
                    {description2}
                    <br></br>
                    {description3}
                  </p>
                  
                  <Link to='/start-investing'>
                    <Button buttonSize='btn--wide' buttonColor='blue'>
                      {buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='col'>
                <div className='home__price-img-wrapper'>
                  <img src={img} alt={alt} className='home__price-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default PriceSection