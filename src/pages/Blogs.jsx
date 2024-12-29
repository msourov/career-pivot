import { Text, Container, SimpleGrid, Box } from "@mantine/core";

const Blogs = () => {
  return (
    <Container fluid className="min-h-screen p-10">
      <Box className="bg-gray-100 border rounded-xl p-6 mb-8 h-[250px]">
        <Text size="lg" weight={700} color="purple">
          Blog
        </Text>
      </Box>

      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "lg", cols: 3 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
        spacing="lg"
        verticalSpacing="xl"
      >
        {[...Array(3)].map((_, index) => (
          <Box
            key={index}
            className="bg-gray-100 rounded-xl p-4 h-[260px] border"
          >
            <Text weight={700} color="purple">
              Blog {index + 1}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Blogs;
