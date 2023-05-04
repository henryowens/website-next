import { Button, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div id="Layout">
    <header>
      <Heading as="h2">HENRY OWENS</Heading>
      <Button>Contact</Button>
    </header>
    {children}
  </div>
);

export default Layout;
