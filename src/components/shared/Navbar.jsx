import { Button, Switch, Box } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const isAuthenticated = true;
  console.log(isAuthenticated);
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/assets/logo.png"
          alt="CareerPivot IO"
          className="h-12 w-auto mr-2"
        />
      </div>

      {/* Navbar Links */}
      <div className="flex items-center space-x-6">
        {/* Authenticated State */}
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
              <IoMdNotificationsOutline size="20" />
            </button>
            <IoSettingsSharp
              size={22}
              color="purple"
              onClick={() => navigate("/settings")}
              className="hover:cursor-pointer"
            />
            <Switch
              size="lg"
              color="purple"
              checked={darkMode}
              onChange={(event) => setDarkMode(event.currentTarget.checked)}
            />
          </Box>
        ) : (
          // Unauthenticated State
          <Box className="space-x-6">
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
    </nav>
  );
};

export default Navbar;
