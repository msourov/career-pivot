import { Text, Container, Box } from "@mantine/core";

const Blogs = () => {
  return (
    <Container fluid className="p-10">
      <Box className="bg-gray-100 border rounded-xl p-6 mb-8 h-[250px]">
        <Text size="lg" weight={700} color="purple">
          Blog
        </Text>
      </Box>

      <div className="flex flex-wrap gap-6 justify-center">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-4 h-[260px] border flex-1 min-w-[260px]"
          >
            <p className="font-medium text-purple-700">Blog {index + 1}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
