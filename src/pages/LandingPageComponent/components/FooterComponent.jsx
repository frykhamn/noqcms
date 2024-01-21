
const FooterComponent = () => {
  return (
    <footer className="py-6 my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4"></div>

        <div className="flex justify-center flex-col items-center pt-4">
          {/* Social Icons */}
          <div className="flex space-x-4 m-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              X
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              X
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              X
            </div>
          </div>

          <div className="my-4 text-">
            <p>&copy; NoQ, 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
