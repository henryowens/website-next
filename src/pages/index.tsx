import { Container, Flex, Heading, Text, TextProps } from "@chakra-ui/react";

const Home = () => {
  const skills = ["REACT", "VUE.JS", "NODE.JS", "MONGO"];

  const createkillsText: TextProps = {
    fontSize: "4xl",
    fontWeight: "bold",
  };
  return (
    <Container  as={Flex} flexDirection="column" gap="50" maxW="4xl" id="HomePage">
      <Heading as="h1" fontSize="8xl">
        Web <br /> Developer
      </Heading>
      <Flex justifyContent="space-around">
        {skills.map((skill, i) => (
          <Text fontSize="4xl" fontWeight="bold" opacity="20%" key={i}>
            {skill}
          </Text>
        ))}
      </Flex>
      <Text fontSize="large">
        Hi! I{"'"}m Henry, <br />
        Crafting fast, cutting-edge websites that scale.
      </Text>
    </Container>
  );
};

export default Home;
