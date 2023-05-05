import { Button, Heading, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id="Layout">
      <header>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h2" fontSize="4xl">
            HENRY OWENS
          </Heading>
          <Button variant="outline">Contact</Button>
        </Flex>
      </header>
      {children}
    </div>
  );
};

export default Layout;
