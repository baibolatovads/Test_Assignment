import React from 'react'
import './Trial.css'
import {MdDone} from 'react-icons/md'
function Trial() {
  return (
    <>
    <div className='whatYouGet__trial-section'>
          <div className='container'>
            <div
              className='row whatYouGet__trial-row'
              style={{
                display: 'flex'
              }}
            >
              <div className='col'>
                <div className='whatYouGet__trial-text-wrapper'>
                  <h1 className= 'heading'>
                    Try Prosperi for 7 days, and you will:
                  </h1>
                  <ul className='trial__container-features'>
                      <li className='whatYouGet__trial-subtitle'>
                          <MdDone/>
                          Know key investment terms and rules
                      </li>
                      <li className='whatYouGet__trial-subtitle'>
                          <MdDone/>
                          Become an investor and buy your first stocks/crypto
                      </li>
                      <li className='whatYouGet__trial-subtitle'>
                          <MdDone/>
                          Start generating additional income
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Trial