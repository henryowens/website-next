import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

const Home = () => (
  <Flex
    id="HomePage"
    flexDirection="column"
    gap={useBreakpointValue({ base: 35, sm: 50 })}
  >
    <Heading as="h1" fontSize={useBreakpointValue({ base: "6xl", sm: "8xl" })}>
      Web <br /> Developer
    </Heading>
    <Flex justifyContent="space-around" flexWrap="wrap">
      {["REACT", "VUE.JS", "NODE.JS", "MONGO"].map((skill, i) => (
        <Text fontSize="4xl" fontWeight="bold" opacity="20%" key={i}>
          {skill}
        </Text>
      ))}
    </Flex>
    <Text fontSize="large">
      Hi! I{"'"}m Henry, <br />
      Crafting fast, cutting-edge websites that scale.
    </Text>
  </Flex>
);

export default Home;
