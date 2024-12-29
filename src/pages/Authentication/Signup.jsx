import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  TextInput,
  PasswordInput,
  Paper,
  Title,
} from "@mantine/core";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Sign up data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Paper
        shadow="md"
        radius="lg"
        p="xl"
        withBorder
        className="w-full max-w-4xl"
      >
        <div className="flex flex-col md:flex-row">
          {/* Social Sign-Up Section */}
          <div className="flex flex-col my-auto gap-6 items-center pr-6">
            <Button
              variant="default"
              radius="xl"
              size="md"
              className="w-64 flex items-center"
            >
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6 mr-2"
              />
              Continue with LinkedIn
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className="w-64 flex items-center"
            >
              <img
                src="/assets/google.png"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              Continue with Google
            </Button>
          </div>

          {/* Divider with "OR" */}
          <div className="flex flex-col items-center mx-6">
            {" "}
            <div className="w-px bg-gray-300 h-[220px]"></div>{" "}
            <span className="bg-white px-4 text-gray-500 font-medium my-4">
              {" "}
              OR{" "}
            </span>{" "}
            <div className="w-px bg-gray-300 h-[220px]"></div>{" "}
          </div>

          {/* Sign-Up Form */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <Title order={2} className="text-gray-600">
                Create an account
              </Title>
              <Link
                to="/login"
                className="text-sm text-purple-600 hover:underline"
              >
                Log in instead
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              <TextInput
                label="User name"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) =>
                  handleInputChange("username", e.currentTarget.value)
                }
                withAsterisk
                required
                className="mb-4"
              />
              <TextInput
                label="Email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  handleInputChange("email", e.currentTarget.value)
                }
                withAsterisk
                required
                className="mb-4"
              />
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  handleInputChange("password", e.currentTarget.value)
                }
                withAsterisk
                required
                className="mb-4"
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.currentTarget.value)
                }
                withAsterisk
                required
                className="mb-4"
              />
              <Checkbox
                label={
                  <>
                    By creating an account, I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-purple-600 hover:underline"
                    >
                      Terms of use
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-purple-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </>
                }
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  handleInputChange("agreedToTerms", e.currentTarget.checked)
                }
                className="my-8"
              />
              <Button
                variant="outline"
                fullWidth
                radius="xl"
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                // disabled={
                //   !formData.username ||
                //   !formData.email ||
                //   !formData.password ||
                //   !formData.confirmPassword ||
                //   !formData.agreedToTerms
                // }
              >
                Create an account
              </Button>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Signup;
