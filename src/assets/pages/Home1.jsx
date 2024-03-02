import React from 'react'
import pic from '/pic1.png'

const Home1 = () => {
  return (
    <div className="bg-white">
      <div className="relative lg:px-14 py-14">
        <div className="mx-auto max-w-2xl">
          <div className="hidden sm:mb-14 sm:flex text-left"></div>
            <div className="text-left mb-6 sm:mb-14">
            <div className="image-container">
                <img src={pic} alt="Your Image" className="overlay-image" />
                <svg
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                
                >
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="rgba(0, 0, 255, 1)" offset="0%" />
                    <stop
                        id="stop2"
                        stopColor="rgba(31.39, 217.504, 217.504, 1)"
                        offset="100%"
                    />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#sw-gradient)"
                    d="M22.8,-34.9C29.6,-31.2,35.1,-24.8,34.8,-18.1C34.5,-11.3,28.5,-4,26.6,3.3C24.7,10.5,26.9,17.8,24.2,21.1C21.6,24.3,14.1,23.5,8.5,22.1C2.8,20.7,-1.1,18.7,-8,20C-15,21.3,-25,25.9,-30.9,24C-36.8,22.2,-38.4,14,-37,6.9C-35.6,-0.2,-31.1,-6.2,-25.7,-9.1C-20.3,-12.1,-14.1,-12.2,-9.6,-17C-5.2,-21.8,-2.6,-31.4,2.7,-35.6C8,-39.8,16.1,-38.7,22.8,-34.9Z"
                    width="100%"
                    height="100%"
                    transform="translate(50 50)"
                    strokeWidth="0"
                    style={{ transition: 'all 0.3s ease 0s' }}
                    stroke="url(#sw-gradient)"
                ></path>
                </svg>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;