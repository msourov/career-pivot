const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <p className="text-sm">&copy; All rights reserved.</p>

        {/* Right Section */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="/privacy-policy"
            className="text-sm hover:underline hover:text-gray-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-sm hover:underline hover:text-gray-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
