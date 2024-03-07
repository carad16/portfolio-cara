import pic from '/pic1.png'

export default function Home() {

  return (
    <div className="bg-white p-4 md:p-8">
      <div className="relative isolate px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8">
            <div className="order-2 md:order-1">
                <div className="mx-auto max-w-2xl py-0 sm:py-12 lg:py-28">
                <div className="hidden sm:mb-8 sm:flex text-left">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Welcome to My Portfolio.{' '}
                    <a href="#" className="font-semibold text-blue-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                    </div>
                </div>
                <div className="text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Hello, I am...
                    </h1>
                    <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    <span className="text-blue-600">Cara Elyssa Dulay</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Meet Cara, an aspiring web developer with a like of developing &lt;websites/apps&gt; and loves to &lt;code&gt;.
                    </p>
                    <div className="mt-5 flex items-center text-left gap-x-6">
                    <a href="https://www.linkedin.com/in/cara-elyssa-dulay"  className="inline-block rounded-full border-4 border-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                            <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/cara.dulay"  className="inline-block rounded-full border-4 border-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                            <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/carad16"  className="inline-block rounded-full border-4 border-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
                </div>
                <div className="order-1 md:order-2">
                <div className="mx-auto max-w-2xl">
                <div className="hidden sm:mb-14 sm:flex text-left"></div>
                    <div className="text-left mb-6 sm:mb-14 mt-14">
                        <div className="image-container w-full">
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
      </div>
    </div>
  )
}
