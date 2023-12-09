import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleState() {
    setNav((prevState) => !prevState);
  }
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <div className="text-white font-bold text-2xl">Ecommerce App</div>
            <div className="lg:hidden" onClick={handleState}>
              {!nav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>

            <div className="hidden mt-1 lg:flex space-x-4">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link to="/products" className="text-white hover:text-gray-300">
                Shop
              </Link>
              <Link to="/cart" className="text-white hover:text-gray-300">
                Cart
              </Link>
            </div>
            {nav && (
              <div className="mt-2 space-y-2 text-center  ">
                <Link
                  to="#"
                  className="block text-white p-2 hover:text-gray-300"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="block text-white p-2 hover:text-gray-300"
                >
                  Shop
                </Link>
                <Link
                  to="#"
                  className="block text-white p-2 hover:text-gray-300"
                >
                  Cart
                </Link>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <button className="border border-white bg-white px-8 py-2 text-black"> Sign up</button>
            <button className="border boder-white px-8 py-2 text-white"> Log in</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
