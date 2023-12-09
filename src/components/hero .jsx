import macbookImage from "../assets/images/main.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-white pl-16 pr-9 py-12 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[40%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col mt-36 items-start max-md:max-w-full max-md:mt-10">
            <header className="text-black text-6xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
              Discover the Best Deals on Our Website
            </header>
            <div className="text-black text-xl self-stretch mt-10 max-md:max-w-full">
              Welcome to our ecommerce website, where you can find a wide range
              of high-quality products at unbeatable prices.
            </div>
            <div className="flex items-stretch justify-between gap-7 mt-9">
              <Link to="/products">
                <button className="border px-10 py-4 text-white bg-gray-800">
                  Shop
                </button>
              </Link>
              <button className="border border-black px-16">Learn more </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[60%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet={macbookImage}
            className=" object-contain aspect-[1.5] object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
