import { Button, Heading, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex id="Layout" flexDirection="column" marginBottom="5">
      <header>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h2" fontSize="4xl">
            HENRY OWENS
          </Heading>
          <Button variant="outline">Contact</Button>
        </Flex>
      </header>
      {children}
    </Flex>
  );
};

export default Layout;
