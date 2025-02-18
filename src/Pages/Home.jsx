import Slider from '../Components/Home/Slider'
import About from '../Components/Home/About'
import Coupons from '../Components/Home/Coupons'
import Location from '../Components/Home/Location.jsx'
import HomeApartments from '../Components/Home/HomeApartments.jsx'
import Contact from "../Components/Home/Contact.jsx"
import Newsletter from '../Components/Home/Newsletter.jsx'
const Home = () => {
  return (
    <div> 
       <HomeApartments />
       <About />
       <Coupons />
       <Location />
       <Contact />
       <Newsletter />
    </div>
  )
}

export default Home
