import { TextInput, Textarea, Button } from "@mantine/core";

const Contact = () => {
  return (
    <div className="px-6 py-12">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-center">
        {/* Left Side: Description */}
        <div className="my-auto w-1/2">
          <p className="font-semibold drop-shadow-lg text-purple-900 w-9/12 lg:w-6/12 text-left mx-auto text-md">
            If you’ve got any questions, please fill out the short form to drop
            us an email, and we promise to get back to you in lightning speed.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 border border-gray-200 rounded-lg shadow-md p-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              Have questions?
            </h2>
            <h3 className="text-xl font-semibold text-black">
              Contact our support teams
            </h3>
          </div>
          <form>
            <div className="mb-4">
              <TextInput
                label="Your Name"
                placeholder="Enter your name"
                required
                classNames={{
                  label: "mb-1 text-sm font-medium text-gray-700",
                  input: "rounded-md border-gray-300 focus:ring-purple-600",
                }}
              />
            </div>
            <div className="mb-4">
              <TextInput
                label="Your Email"
                placeholder="Enter your email"
                type="email"
                required
                classNames={{
                  label: "mb-1 text-sm font-medium text-gray-700",
                  input: "rounded-md border-gray-300 focus:ring-purple-600",
                }}
              />
            </div>
            <div className="mb-6">
              <Textarea
                label="Your Message"
                placeholder="Enter your message"
                required
                minRows={4}
                classNames={{
                  label: "mb-1 text-sm font-medium text-gray-700",
                  input: "rounded-md border-gray-300 focus:ring-purple-600",
                }}
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="outline"
                color="purple"
                className="w-full text-purple-700 border-purple-700 hover:bg-purple-100"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
