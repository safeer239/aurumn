import mobileImg from "../assets/mobileImg.svg"
const About = () => {
    return (
      <section className="bg-white py-16 px-4 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h4 className="text-sm font-bold uppercase mb-4">AU Shop</h4>
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="text-yellow-500">Open Your Shop To World</span>
          </h2>
          <h3 className="text-3xl font-bold mb-6">
            A Smooth Jewellery Shopping Experience
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Welcome to AU Shop, where luxury intertwines seamlessly with the
            cutting-edge world of e-commerce! Our platform is meticulously
            designed to be the haven for dedicated jewellery stores, offering
            your establishment an unparalleled and sleek platform to launch your
            e-commerce apps with grace and innovation.
          </p>
        </div>
  
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={mobileImg}
            width={300}
            alt="Jewellery Shopping Experience"
            className="max-w-full h-auto"
          />
        </div>
      </section>
    );
  };
  
  export default About;
  