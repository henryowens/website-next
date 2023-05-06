import {
  Button,
  Heading,
  Flex,
  useColorMode,
  IconProps,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconProps: IconProps = {
    onClick: toggleColorMode,
    _hover: { cursor: "pointer" },
    boxSize: 5,
  };
  return (
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
          <Flex alignItems="center" gap={4}>
            <Button variant="outline">Contact</Button>
            {colorMode === "light" ? (
              <MoonIcon {...iconProps} />
            ) : (
              <SunIcon {...iconProps} />
            )}
          </Flex>
        </Flex>
      </header>
      {children}
    </Flex>
  );
};

export default Layout;
