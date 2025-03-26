import ProductManagement from "../assets/product-management.png";
import PaymentManagement from "../assets/payment-management.jpeg";
import DataManagement from "../assets/data-management.png";
import FollowUp from "../assets/follow-up.jpeg";
import LiveShop from "../assets/live-shop.jpeg";
import CustomerRelation from "../assets/customer-relation.jpeg";
import CategoryManagement from "../assets/category-management.jpeg";

import { MdStarBorderPurple500 } from "react-icons/md";

const Features = () => {
  return (
    <div className="bg-white-50 text-black p-8">
      <h2 className="text-3xl font-semibold mb-8">Feature</h2>

      <div className="space-y-6">
        {/* Product Management & Payment Management */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Product Management</h3>
            <p>Discover a world of possibilities and give your customers a breezy online shopping experience with AU Shop.</p>
            <ul className="m-3">
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Effortless Catalog Management</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Customisable Product Showcases</li>
            </ul>
            <img src={ProductManagement} alt="FAQ" className="mt-4 rounded-lg" />
          </div>
          <div className="md:col-span-2 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Payment Management</h3>
            <p>We provide a host of payment options and features to make transactions easier for your customers.</p>
            <ul className="m-3">
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Secure Payment Gateways</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Flexible Payment Options</li>
            </ul>
            <img src={PaymentManagement} alt="Social Media" className="mt-4 rounded-lg" />
          </div>
        </div>

        {/* Enquiry & Data Management */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Enquiry & Follow-up Management</h3>
            <p>With our flawless enquiry feature, your customers can make their concerns known at any time!</p>
            <ul className="m-3">
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Customisable Enquiry Forms</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Automated Follow-Up</li>
            </ul>
            <img src={FollowUp} alt="Order Tracking" className="mt-4 rounded-lg" />
          </div>
          <div className="md:col-span-3 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Data Management</h3>
            <p>Make shopping on AU Shop a personalised experience, specially catered to every customer.</p>
            <ul className="m-3">
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Advanced Inventory Tracking</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Customer Behaviour Analysis</li>
            </ul>
            <img src={DataManagement} alt="SMS" className="mt-4 rounded-lg" />
          </div>
        </div>

        {/* Live Shop */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Live Shop</h3>
          <p>If customers can't come to the store, take the store to your customers and make it an unforgettable experience!</p>
          <div className="flex flex-col md:flex-row mt-3 gap-10">
            <ul className="m-3">
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Live-Shop Exclusives</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Real-Time Engagement</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Interactive Virtual Showcases</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Instant Transactions</li>
            </ul>
            <img src={LiveShop} alt="FAQ" className="mt-4 rounded-lg" />
          </div>
        </div>

        {/* Category & Customer Relationship Management */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Category Management</h3>
            <p>Seamless segmentation and easy browsing for your customers - now made possible with AU Shop!</p>
            <ul className="m-3">
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Improved Supplier Relationship</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Order Receipt and Review</li>
            </ul>
            <img src={CategoryManagement} alt="FAQ" className="mt-4 rounded-lg" />
          </div>
          <div className="md:col-span-2 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Customer Relationship Management</h3>
            <p>Make your customer base stick. Make them feel loved and remembered to keep them coming back!</p>
            <ul className="m-3">
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Automated birthday and anniversary wishes</li>
              <li className="mb-3 flex items-center"> <MdStarBorderPurple500 /> Customer-centric customisations</li>
            </ul>
            <img src={CustomerRelation} alt="Social Media" className="mt-4 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;