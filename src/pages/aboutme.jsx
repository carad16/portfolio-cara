function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="text-center flex mt-6 mb-6">
        <img
          src="src/assets/2x2 Corporate.jpg"
          alt="Profile"
          className="rounded-full h-24 w-24 mx-auto mb-2"
        />
        <div className="flex flex-col items-center align-middle ms-4 mt-5">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Cara Elyssa Dulay</h1>
          <p className="text-xs text-gray-600">Web Developer/Back-end Developer</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl w-full flex mb-6">
        <div className="flex-shrink-0 mr-6">
          <img
            src="src/assets/2x2 Corporate.jpg"
            alt="Profile"
            className="rounded-full h-24 w-24"
          />
        </div>
        <div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-700">
              Hello! I'm a creative web developer passionate about crafting beautiful and
              user-friendly experiences. With a background in [Your Field], I bring a unique
              perspective to problem-solving and enjoy turning ideas into reality.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">C</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">C++</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">Java</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">Python</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">PHP</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">Laravel</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">Django</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">JavaFX</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">React.js</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">JavaScript</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">HTML5</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">CSS3</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">GitHub</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">MySQL</span>
              <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs">PhpMyAdmin</span>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Education</h2>
            <p className="text-gray-700">
              Bachelor of Science in Information Technology | Polytechnic University of the Philippines | September 2024
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact</h2>
            <p className="text-gray-700">Email: dulaycara@gmail.com</p>
            <p className="text-gray-700">LinkedIn: https://www.linkedin.com/in/cara-elyssa-dulay</p>
            <p className="text-gray-700">GitHub: https://github.com/carad16</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;