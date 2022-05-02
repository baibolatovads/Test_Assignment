import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import { Button } from './Button'
import './Features.css'
import Axios from 'axios'

function Features() {
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
    <div className='features__section'>
        <div className='features__wrapper'>
          <div className='features__container'>
            <Link to='/' className='features__container-card'>
              <div className='features__container-cardInfo'>
                <div className='icon'>
                  <AiFillStar />
                  Special offer
                </div>
                <h3>7-day trial for {price}$</h3>
                <p>19.99 billed monthly after the 1st week</p>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Start my trial
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Features