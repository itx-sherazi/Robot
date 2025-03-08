import React from 'react'
import { useState } from 'react'
import wbg from '../images/image_w_bg.png'
import withoutbg from '../images/image_wo_bg.png'

const BgSlider = () => {

    const [sliderPosition, setsliderPosition] = useState(50)
    const handleSliderChange = (e) => {
        setsliderPosition(e.target.value)
    }
  return (
    <div className='pb-10 md:py-20 mx-2'>
        <h1 className=' sm:mb-20 text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10'>Remove Background With High<br/>
        Quality and Accuracy</h1>
        <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
            {/* //image one */}
            <img src={wbg} style={{clipPath:`inset(0 ${100.2-sliderPosition}%0 0)`}} alt="" />
            {/* //image two */}
            <img className='absolute top-0 left-0 w-full h-full' src={withoutbg} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} alt="" />
          {/* input field */}
          <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />
        </div>
    </div>
  )
}

export default BgSlider