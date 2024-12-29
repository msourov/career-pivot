import {
  Avatar,
  TextInput,
  Button,
  Paper,
  Text,
  Switch,
  Container,
  Select,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";

const Settings = () => {
  const [gender, setGender] = useState("");
  const [value, setValue] = useState(new Date());
  return (
    <div className="flex bg-gray-100 px-6">
      {/* Sidebar */}
      <aside className="w-[250px] h-[70vh] rounded-xl mt-8 bg-purple-900 text-white p-6 flex flex-col gap-6">
        <Avatar
          src="https://avatar.iran.liara.run/public"
          size={100}
          radius="xl"
          className="mb-4"
        />
        <nav className="flex flex-col gap-4">
          <Text className="text-lg font-semibold">Basic Information</Text>
          <Text className="text-lg font-semibold">Notification</Text>
          <Text className="text-lg font-semibold">Social Account</Text>
          <Text className="text-lg font-semibold">Password & Security</Text>
          <Text className="text-lg font-semibold">Delete Account</Text>
        </nav>
      </aside>

      {/* Main Content */}
      <Container fluid className="flex-1 p-8">
        {/* Basic Information Section */}
        <Paper shadow="sm" radius="md" className="mb-8">
          <p className="text-md mb-4 px-4 py-2 text-purple-800 bg-purple-100">
            Basic Information
          </p>
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 gap-12">
              {/* Profile Photo Section */}
              <div className="flex items-center gap-6">
                <Avatar size={120} className="bg-purple-100 rounded-full" />
                <div>
                  <Text size="sm" weight={500} color="purple">
                    Profile photo
                  </Text>
                  <Text size="xs" color="dimmed">
                    This will be displayed on your profile
                  </Text>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  variant="filled"
                  label="Name"
                  placeholder="Name"
                  value="Name"
                  readOnly
                  classNames={{
                    input: "bg-purple-50",
                    label: "text-sm font-medium text-gray-600",
                  }}
                  leftSection={<FaUser />}
                />
                <TextInput
                  variant="filled"
                  label="Email Address"
                  placeholder="example@gmail.com"
                  value="Gmail@.com"
                  readOnly
                  classNames={{
                    input: "bg-purple-50",
                    label: "text-sm font-medium text-gray-600",
                  }}
                  leftSection={<HiOutlineMail />}
                />
                <Select
                  variant="filled"
                  label="Gender"
                  placeholder="Select Gender"
                  value={gender}
                  data={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                  classNames={{
                    input: "bg-purple-50",
                    label: "text-sm font-medium text-gray-600",
                  }}
                  onChange={(value) => {
                    setGender(value); // Capture the selected value
                    console.log("Selected Gender:", value);
                  }}
                  leftSection={<FaUser />}
                />
                <DatePickerInput
                  variant="filled"
                  label="Date of Birth"
                  placeholder="MM/DD/YYYY"
                  value={value}
                  onChange={setValue}
                  leftSection={<MdDateRange />}
                />
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-end mt-8">
              <Button
                w={140}
                color="purple"
                variant="filled"
                radius="md"
                className="px-6 shadow-lg"
              >
                Update
              </Button>
            </div>
          </div>
        </Paper>

        {/* Notifications Section */}
        <Paper shadow="sm" radius="md" className="mb-8">
          <p className="text-md mb-4 px-4 py-2 text-purple-800 bg-purple-100">
            Notifications
          </p>
          <div className="px-6 py-8 space-y-6">
            <div>
              <Text size="sm" weight={600}>
                Email notification
              </Text>
              <Text size="xs" color="dimmed">
                Get emails to find out what&apos;s going on when you&apos;re not
                online. You can turn these off.
              </Text>
            </div>
            <div className="flex items-center justify-between mb-4">
              <Switch
                defaultChecked
                label="Reminders"
                description="These are notification to remind you of updated you might have missed"
              />
            </div>
            <div className="flex items-center justify-between">
              <Switch
                defaultChecked
                label="News"
                description="updated you might have missed"
              />
            </div>
            <div className="flex justify-end mt-8">
              <Button
                w={140}
                color="purple"
                variant="filled"
                radius="md"
                className="px-6 shadow-lg"
              >
                Update
              </Button>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Settings;
