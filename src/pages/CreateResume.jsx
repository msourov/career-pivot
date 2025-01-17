import { useState } from "react";
import { TextInput, Textarea, Button, Text } from "@mantine/core";
import { GoPlus } from "react-icons/go";

const CreateResumePage = () => {
  const [visibleSections, setVisibleSections] = useState({
    Education: false,
    "Websites & Social Links": false,
    Skills: false,
    Courses: false,
    Projects: false,
    "Employment History": false,
    "Job Preference": false,
  });
  const toggleSection = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section], // Toggle visibility
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mb-8">
        <img
          src="/assets/logo.png"
          alt="CareerPivot IO"
          className="h-12 mx-auto"
        />
      </div>

      <section className="mb-12">
        <p className="text-lg font-semibold mb-4">Personal Details</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput label="First Name" placeholder="Enter first name" />
          <TextInput label="Last Name" placeholder="Enter last name" />
          <TextInput label="Email" placeholder="Enter email" type="email" />
          <TextInput label="Phone" placeholder="Enter phone number" />
          <TextInput label="Address" placeholder="Enter address" />
          <TextInput label="City" placeholder="Enter city" />
          <TextInput label="Country" placeholder="Enter country" />
          <TextInput label="Postal Code" placeholder="Enter postal code" />
        </div>
      </section>

      <section className="mb-12">
        <p className="text-lg font-semibold">Professional Summary</p>
        <p className=" mb-3 text-sm text-gray-500">
          Write 2-4 short, energetic sentences about how great you are. Mention
          the role and what you did. What were the big achievements? Describe
          your motivation and list your skills.
        </p>
        <Textarea
          placeholder="Write a short summary about yourself..."
          autosize
          minRows={4}
          maxRows={8}
        />
      </section>

      <section className="mb-12">
        {/* Sections */}
        {[
          { title: "Education", placeholder: "Add education" },
          { title: "Websites & Social Links", placeholder: "Add link" },
          { title: "Skills", placeholder: "Add skill" },
          { title: "Courses", placeholder: "Add course" },
          { title: "Projects", placeholder: "Add project" },
          {
            title: "Employment History",
            placeholder: "Add employment history",
          },
          { title: "Job Preference", placeholder: "Add job preference" },
        ].map(({ title, placeholder }, index) => (
          <div key={index} className="mb-6">
            <Text className="font-bold text-base mb-2">{title}</Text>
            <Button
              variant="outline"
              color="purple"
              size="xs"
              radius="md"
              mt={2}
              compact
              leftSection={<GoPlus size={20} />}
              onClick={() => toggleSection(title)}
            >
              Add {title}
            </Button>

            {visibleSections[title] && (
              <div className="mt-4">
                <TextInput placeholder={placeholder} className="mb-4" />
                <Button
                  size="sm"
                  radius="md"
                  color="purple"
                  onClick={() => alert(`${title} added!`)}
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
        ))}
      </section>

      <div className="flex justify-end">
        <Button
          variant="outline"
          radius="md"
          size="md"
          w={160}
          color="purple"
          className="shadow-lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CreateResumePage;
