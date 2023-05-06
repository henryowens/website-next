import { Button, Heading, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <Flex id="Layout" flexDirection="column">
    <header>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="20"
      >
        <Heading as="h2" fontSize="3xl" opacity="50%">
          HENRY OWENS
        </Heading>
        <Button variant="outline">Contact</Button>
      </Flex>
    </header>
    {children}
  </Flex>
);

export default Layout;
