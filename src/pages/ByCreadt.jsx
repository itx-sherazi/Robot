import React from 'react'
import icon from '../images/images.jpeg'
const plans =[
  {
    id:'Basic',
    price:10,
    credits:100,
    desc:'Best for personal use'
  },
  {
    id:'Advance',
    price:50,
    credits:500,
    desc:'Best for small businesses'
  },
  {
    id:'Bussiness',
    price:250,
    credits:2000,
    desc:'Best for corporate use'
  },
]

const ByCreadt = () => {
  
  return (
    <div className=' text-center mb-10 pt-14  min-h-[75vh]'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
        Our plans
      </button>
      <h1 className='text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-10 '>Choose the plan that's right for you</h1>
      <div className=' flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((plan,index)=>(
          <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500' >
            <img width={40} src={icon} alt="" />
<p className='mt-3 font-semibold'>{plan.id}</p>            
<p className='text-sm'>{plan.desc}</p>

<p className='mb-6'>
  <span className='text-3xl font-medium'>
    ${plan.price}/ {plan.credits} credits
    
  </span>
  <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 '>Purchase</button>
</p>
          </div>
        ))}
      </div>

      </div>
  )
}

export default ByCreadt