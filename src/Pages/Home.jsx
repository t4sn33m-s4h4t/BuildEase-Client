import Slider from '../Components/Home/Slider'
import About from '../Components/Home/About'
import Coupons from '../Components/Home/Coupons'
import Location from '../Components/Home/Location.jsx'
import HomeApartments from '../Components/Home/HomeApartments.jsx'
const Home = () => {
  return (
    <div>
       <Slider />
       <HomeApartments />
       <About />
       <Coupons />
       <Location />
    </div>
  )
}

export default Home
