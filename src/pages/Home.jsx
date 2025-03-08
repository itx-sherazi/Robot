import BgSlider from '@/components/BgSlider'
import Header from '@/components/Header'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import Uploads from '@/components/Upload'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimonials/>
      <Uploads/>
    </div>
  )
}

export default Home