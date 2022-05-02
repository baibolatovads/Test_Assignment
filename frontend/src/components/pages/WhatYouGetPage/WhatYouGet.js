import React from 'react'
import Features from '../../Features'
import InfoSection from '../../InfoSection'
import Trial from '../../Trial'
import { infoObjOne, infoObjThree, infoObjTwo } from './Data'

function WhatYouGet() {
  return (
    <>
        <InfoSection {...infoObjOne}></InfoSection>
        <InfoSection {...infoObjTwo}></InfoSection>
        <InfoSection {...infoObjThree}></InfoSection>
        <Trial/>
        <Features></Features>
    </>
  )
}

export default WhatYouGet