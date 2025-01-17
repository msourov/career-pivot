import { useState } from "react";
import { Button, Box, Image } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = true;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/assets/logo.png"
            alt="CareerPivot IO"
            className="h-12 w-auto"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {isAuthenticated ? (
            <Box className="flex items-center gap-6">
              <Link
                to="/"
                className="text-gray-700 font-semibold hover:text-purple-800"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 font-semibold hover:text-purple-800"
              >
                Dashboard
              </Link>
              <Link
                to="/blogs"
                className="text-gray-700 font-semibold hover:text-purple-800"
              >
                Blogs
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-700 font-semibold hover:text-purple-800"
              >
                Contact Us
              </Link>
              <button onClick={() => alert("Notifications clicked")}>
                <IoMdNotificationsOutline size={20} className="text-gray-700" />
              </button>
              <button onClick={() => navigate("/settings")}>
                <Image src="/assets/settings.png" w={40} />
              </button>
            </Box>
          ) : (
            <Box className="flex items-center gap-6">
              <Link
                to="/blogs"
                className="text-gray-700 font-semibold hover:text-purple-800"
              >
                Blogs
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 font-semibold hover:text-purple-800"
              >
                Pricing
              </Link>
              <Button
                variant="outline"
                color="purple"
                onClick={() => navigate("/login")}
                className="px-4 py-2 border border-purple-800 text-purple-800 rounded hover:bg-purple-50"
              >
                Log in
              </Button>
              <Button
                color="purple"
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700"
              >
                Sign up
              </Button>
            </Box>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg px-6 py-4">
          <Box className="flex flex-col gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/"
                  className="text-gray-700 font-semibold hover:text-purple-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-700 font-semibold hover:text-purple-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/blogs"
                  className="text-gray-700 font-semibold hover:text-purple-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  to="/contact-us"
                  className="text-gray-700 font-semibold hover:text-purple-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <button
                  onClick={() => {
                    alert("Notifications clicked");
                    setMenuOpen(false);
                  }}
                >
                  <IoMdNotificationsOutline
                    size={20}
                    className="text-gray-700"
                  />
                </button>
                <button
                  onClick={() => {
                    navigate("/settings");
                    setMenuOpen(false);
                  }}
                >
                  <Image src="/assets/settings.png" w={40} />
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/blogs"
                  className="text-gray-700 font-semibold hover:text-purple-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-700 font-semibold hover:text-purple-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Button
                  variant="outline"
                  color="purple"
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 border border-purple-800 text-purple-800 rounded hover:bg-purple-50"
                >
                  Log in
                </Button>
                <Button
                  color="purple"
                  onClick={() => {
                    navigate("/signup");
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700"
                >
                  Sign up
                </Button>
              </>
            )}
          </Box>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
