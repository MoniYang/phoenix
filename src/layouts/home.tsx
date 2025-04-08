
import PromoSwiper from '../features/promo/promo';
import { bannerItems } from '../constants/promo';


const Home = () => {
    
   
    return (

        <div className="bg-black">
            <PromoSwiper items={bannerItems}/>
        </div>
      
    );
  };
  
  export default Home;