import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Log in</h1>
        <p className="text-center text-gray-600 text-sm mb-6">
          New to Design Space?{" "}
          <a
            href="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign up for free
          </a>
        </p>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email address"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            withAsterisk
            className="mb-4"
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            withAsterisk
            toggleVisibility
            className="mb-4"
          />

          <div className="mb-4 text-left">
            <Link
              to="/forgot-password"
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            color="purple"
            type="submit"
            fullWidth
            radius="xl"
            disabled={!isFormValid}
            className={`${
              isFormValid
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Log in
          </Button>
        </form>

        <div className="mt-6">
          <div className="flex justify-center gap-4">
            <button className="flex items-center border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-100">
              <img
                src="assets/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 mr-2"
              />
              LinkedIn
            </button>
            <button className="flex items-center border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-100">
              <img
                src="/assets/google.png"
                alt="Google"
                className="w-8 h-8 mr-2"
              />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
