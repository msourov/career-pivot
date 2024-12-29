import { Text, Button, Avatar } from "@mantine/core";

const Home = () => {
  return (
    <div className="flex px-6 py-8">
      <aside className="flex flex-col w-[280px] h-[70vh] rounded-xl bg-purple-900 text-white p-6 items-center">
        <Avatar
          src="https://avatar.iran.liara.run/public"
          size={100}
          radius="xl"
          className="mb-4"
        />
        <div className="text-center space-y-3">
          <Text size="lg" weight={700}>
            Name
          </Text>
          <Text size="sm">Age</Text>
          <Text size="sm">Designation</Text>
        </div>
      </aside>

      <main className="flex-1 px-6 flex flex-col gap-6">
        <div className="flex justify-between items-start bg-purple-50 h-[140px] shadow-sm rounded-md border border-purple-200 p-4">
          <Text weight={700} color="purple">
            Professional Summary
          </Text>
          <Button variant="subtle" color="purple" compact>
            Edit
          </Button>
        </div>
        <div className="flex justify-between items-start bg-indigo-50 h-[140px] shadow-sm rounded-md border border-indigo-200 p-4">
          <Text weight={700} color="indigo">
            Education
          </Text>
          <Button variant="subtle" color="indigo" compact>
            Edit
          </Button>
        </div>
        <div className="flex justify-between items-start bg-teal-50 h-[140px] shadow-sm rounded-md border border-teal-200 p-4">
          <Text weight={700} color="teal">
            Skills
          </Text>
          <Button variant="subtle" color="teal" compact>
            Edit
          </Button>
        </div>
        <div className="flex justify-between items-start bg-gray-50 h-[140px] shadow-sm rounded-md border border-gray-200 p-4">
          <Text weight={700} color="gray">
            Projects
          </Text>
          <Button variant="subtle" color="gray" compact>
            Edit
          </Button>
        </div>
      </main>

      <aside className="flex flex-col text-white px-6 items-center gap-4">
        <div className="bg-purple-900 w-[360px] h-[50vh] shadow-sm rounded-md border p-4">
          <Text align="center" weight={700}>
            Job Preference
          </Text>
        </div>
        <Button
          radius="md"
          variant="outline"
          color="purple"
          className="hover:bg-purple-200 mt-4 shadow-lg"
        >
          Continue
        </Button>
      </aside>
    </div>
  );
};

export default Home;
