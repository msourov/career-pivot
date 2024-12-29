import { Text, Avatar } from "@mantine/core";

const Dashboard = () => {
  return (
    <div className="flex px-6 py-8">
      {/* Sidebar */}
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
          <div className="mt-8 space-y-3 text-left">
            <Text size="sm" weight={500}>
              Messages
            </Text>
            <Text size="sm" weight={500}>
              Chat
            </Text>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 flex flex-col gap-6">
        {/* Free or Pro Details */}
        <div className="bg-purple-50 h-[180px] shadow-sm rounded-md border border-purple-200 p-4">
          <Text weight={700} size="xl" color="purple">
            Free or Pro Details
          </Text>
        </div>

        {/* Question Details */}
        <div className="bg-indigo-50 h-[180px] shadow-sm rounded-md border border-indigo-200 p-4">
          <Text weight={700} size="xl" color="indigo">
            Question Details
          </Text>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
