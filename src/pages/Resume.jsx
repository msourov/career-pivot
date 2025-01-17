import { Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ResumeActionsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-[20vh]">
      <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 rounded-lg border border-gray-200 w-[300px]">
        <Text weight={700} size="lg" color="gray">
          Resume
        </Text>
        <Button
          variant="outline"
          color="purple"
          radius="md"
          fullWidth
          className="hover:bg-purple-50"
        >
          Import Resume
        </Button>
        <Button
          variant="outline"
          color="purple"
          radius="md"
          fullWidth
          className="hover:bg-purple-50"
          onClick={() => navigate("/resume/create-resume")}
        >
          Create Resume
        </Button>
      </div>
    </div>
  );
};

export default ResumeActionsPage;
