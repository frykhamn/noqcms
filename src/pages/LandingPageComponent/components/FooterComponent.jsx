import logo from '../../../assets/images/3pwolvay.bmp';

const FooterComponent = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-b border-gray-200 py-4">
          <div className="flex flex-col items-center justify-between space-y-4 sm:space-y-0 md:flex-row md:space-x-10 lg:justify-center">
            <div className="hidden md:flex space-x-10">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-extrabold">Community</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-extrabold">Company</a>
            </div>
            <div className="shrink-0">
              <img src={logo} alt="noQ Logo" className="h-12 sm:h-16" />
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-extrabold">Help Desk</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-extrabold">Blog</a>
            </div>
            
            {/* Navigation links for mobile screens */}
            <div className="flex sm:hidden justify-between w-full mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-extrabold">Community</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-extrabold">Company</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-extrabold">Help Desk</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-extrabold">Blog</a>
            </div>
          </div>
        </div>

        {/* Lower section for social icons and copyright */}
        <div className="flex flex-col items-center pt-4">
          {/* Social Icons */}
          {/* <div className="flex space-x-4 mb-4"> */}
            {/* Replace 'X' with actual icons */}
            {/* <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">X</a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">X</a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">X</a>
          </div> */}

          {/* Copyright notice */}
          <div className="my-4">
            <p className="text-gray-600 text-sm sm:text-base">&copy; noQ, 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
