import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa"; // Importing icons
import Heading from "./Heading";

const ServiceFeatures = () => {
  return (
    <> 
    <div>
      <Heading title="Our Features"/>
    </div>
    <div className="grid lg:grid-cols-3 grid-cols-1 place-content-center gap-10 p-5">

      <div className="flex flex-col items-center space-y-4 border   rounded-lg p-6 hover:bg-gray-100 transition ease-in">
        <FaShippingFast size={40} />
        <div className="text-center">
          <h4 className="font-semibold text-2xl">Flat-rate Delivery</h4>
          <p className="text-sm text-gray-600">Affordable delivery options</p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 border  rounded-lg p-6 hover:bg-gray-100 transition ease-in">
        <FaHeadset size={40} />
        <div className="text-center">
          <h4 className="font-semibold text-2xl">Support 24/7</h4>
          <p className="text-sm text-gray-600">We are here to help anytime</p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 hover:bg-gray-100  transition ease-in">
        <FaUndo size={40} />
        <div className="text-center">
          <h4 className="font-semibold text-2xl">Free Return</h4>
          <p className="text-sm text-gray-600">Easy returns within 30 days</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceFeatures;
