import Main from "./home/page";
import Center from '../app/components/Center'
import ServiceFeatures from "../app/components/Features";
import Products from '../app/components/Products'
import Arival from '../app/components/Arrivals-slide'
import Banner from "./components/Banner";


export default function Home() {
  return (
   <>
   <Main/>
   <div id="features">
   <ServiceFeatures />
   </div>
   <Products/>
   <Center/>
   <div id="arrival">
  <Arival />
   </div>
   <Banner/>
   </>
  );
}
