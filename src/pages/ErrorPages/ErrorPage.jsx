const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-600 mb-4">We&apos;re sorry, but it seems like there was an error processing your request.</p>
        <p className="text-gray-600 mb-8">Visit our <a href="/" className="text-blue-500 hover:underline">home page</a> or <a href="/contact" className="text-blue-500 hover:underline">contact us</a> for assistance.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
