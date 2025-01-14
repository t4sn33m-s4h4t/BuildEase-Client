import React from 'react'
import Slider from '../Components/Home/Slider'
import About from '../Components/Home/About'
import Coupons from '../Components/Home/Coupons'
import Location from '../Components/Home/Location.jsx'
const Home = () => {
  return (
    <div>
       <Slider />
       <About />
       <Coupons />
       <Location />
    </div>
  )
}

export default Home
