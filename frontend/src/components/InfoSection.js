import React from 'react'
import './InfoSection.css'

function InfoSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    img,
    alt,
    imgStart
  }) {
    return (
      <>
        <div
          className={lightBg ? 'home__info-section' : 'home__info-section darkBg'}
        >
          <div className='container'>
            <div
              className='row home__info-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__info-text-wrapper'>
                  <div className='top-line'>{topLine}</div>
                  <h1 className={lightText ? 'info_heading' : 'info_heading dark'}>
                    {headline}
                  </h1>
                  <p className={lightTextDesc ? 'home__info-subtitle' : 'home__info-subtitle dark'}>
                    {description}
                  </p>
                </div>
              </div>
              <div className='col'>
                <div className='home__info-img-wrapper'>
                  <img src={img} alt={alt} className='home__info-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  

export default InfoSection