 
import Slider from '../Components/Home/Slider';
import About from '../Components/Home/About';
import Coupons from '../Components/Home/Coupons';
import Location from '../Components/Home/Location.jsx';
import HomeApartments from '../Components/Home/HomeApartments.jsx';
import Contact from "../Components/Home/Contact.jsx";
import Newsletter from '../Components/Home/Newsletter.jsx';
import Reviews from '../Components/Home/Reviews.jsx';

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      {/* <Slider /> */}
      <HomeApartments />
      <About />
      <Coupons />
      <Location />
      <Contact />
      <Reviews />
      <Newsletter />
    </div>
  );
};

export default Home; 