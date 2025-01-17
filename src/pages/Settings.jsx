import {
  Avatar,
  TextInput,
  Button,
  Paper,
  Text,
  Switch,
  Container,
  Select,
  Group,
  Box,
  Checkbox,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { FaKey, FaPencilAlt, FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";

const Settings = () => {
  const [gender, setGender] = useState("");
  const [value, setValue] = useState();
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
                <div className="relative w-fit">
                  {/* Avatar */}
                  <Avatar size={120} className="bg-purple-100 rounded-full" />
                  <div className="absolute bottom-3 -right-1 bg-white border border-purple-500 rounded-full p-2">
                    <FaPencilAlt className="text-purple-600" size={14} />
                  </div>
                </div>
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
                  classNames={{
                    input: "bg-purple-50",
                    label: "text-sm font-medium text-gray-600",
                  }}
                  leftSection={<FaUser />}
                />
                <TextInput
                  variant="filled"
                  label="Email Address"
                  placeholder="Gmail@.com"
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
                color="purple"
                defaultChecked
                label="Reminders"
                description="These are notification to remind you of updated you might have missed"
              />
            </div>
            <div className="flex items-center justify-between">
              <Switch
                color="purple"
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
        {/* Social Accounts */}
        <Paper shadow="sm" radius="md" className="mb-8">
          <p className="text-md mb-4 px-4 py-2 text-purple-800 bg-purple-100">
            Notifications
          </p>
          <div className="px-6 py-8 space-y-6">
            <div className="space-y-4">
              {/* Google Account */}
              <Group justify="space-between" className="border-b pb-4">
                <div>
                  <Text weight={500} size="sm">
                    Google
                  </Text>
                  <Text size="xs" color="dimmed">
                    Gmail@.com
                  </Text>
                </div>
                <Button
                  variant="subtle"
                  color="purple"
                  compact
                  className="text-purple-600 hover:underline"
                >
                  Connect
                </Button>
              </Group>

              <Group justify="space-between" className="border-b pb-4">
                <div>
                  <Text weight={500} size="sm">
                    LinkedIn
                  </Text>
                  <Text size="xs" color="dimmed">
                    Not Connected
                  </Text>
                </div>
                <Button
                  variant="subtle"
                  color="purple"
                  compact
                  className="text-purple-600 hover:underline"
                >
                  Disconnect
                </Button>
              </Group>
              <Group justify="space-between">
                <div>
                  <Text weight={500} size="sm">
                    X
                  </Text>
                  <Text size="xs" color="dimmed">
                    Not Connected
                  </Text>
                </div>
                <Button
                  variant="subtle"
                  color="purple"
                  compact
                  className="text-purple-600 hover:underline"
                >
                  Disconnect
                </Button>
              </Group>
            </div>
            <div className="flex justify-end mt-6">
              <Button color="purple" radius="md" w={140}>
                Update
              </Button>
            </div>
          </div>
        </Paper>

        {/* Password & security */}
        <Paper shadow="sm" radius="md" className="mb-8">
          {/* Header */}
          <p className="text-md mb-4 px-4 py-2 text-purple-800 bg-purple-100">
            Password & Security
          </p>
          <div className="px-6 py-8 space-y-6">
            <div className="space-y-6">
              <div>
                <Text size="sm" weight={500} color="gray-700" className="mb-2">
                  Change Password
                </Text>
                <TextInput
                  placeholder="Enter Current Password"
                  type="password"
                  classNames={{
                    input: "bg-purple-50 mt-2",
                  }}
                  leftSection={<FaKey className="text-purple-500" />}
                />
              </div>

              {/* New Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextInput
                  placeholder="Enter new Password"
                  type="password"
                  classNames={{
                    input: "bg-purple-50 mt-2",
                  }}
                  leftSection={<FaKey className="text-purple-500" />}
                />
                <TextInput
                  placeholder="Confirm new Password"
                  type="password"
                  classNames={{
                    input: "bg-purple-50 mt-2",
                  }}
                  leftSection={<FaKey className="text-purple-500" />}
                />
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-end mt-6">
              <Button color="purple" radius="md" className="px-6" w={140}>
                Update
              </Button>
            </div>
          </div>
        </Paper>

        {/* Delete account */}
        <Box className="mb-8 border border-red-700 bg-red-50">
          {/* Header */}
          <p className="text-md mb-4 px-4 py-2 text-red-800 bg-red-100">
            Delete Your Account
          </p>
          <div className="px-6 py-8 space-y-6">
            <div className="space-y-6">
              <p className="text-red-800">
                When you delete your account, you lose account services, and we
                permanently delete your personal data. you can cancel the
                deletion for 14 days
              </p>
              <Checkbox
                color="#C70039"
                label="Confirm that i want to delete my account"
              />
            </div>

            {/* Update Button */}
            <div className="flex justify-end mt-6">
              <Button color="#C70039" radius="md" className="px-6" w={140}>
                Delete
              </Button>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Settings;
