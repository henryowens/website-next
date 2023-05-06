import {
  Button,
  Heading,
  Flex,
  useColorMode,
  IconProps,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IsThemeLight } from "./styles/helpers/theme";
import { useRouter } from "next/router";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const { push } = useRouter();
  const iconProps: IconProps = {
    onClick: toggleColorMode,
    _hover: { cursor: "pointer" },
    boxSize: 5,
  };
  const onContact = () => window.open("mailto:henry.tom.owens@gmail.com");
  return (
    <Flex id="Layout" flexDirection="column">
      <header>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom="20"
        >
          <Heading
            as="h2"
            fontSize="3xl"
            opacity="50%"
            _hover={{ cursor: "pointer" }}
            onClick={() => push("/")}
          >
            HENRY OWENS
          </Heading>
          <Flex alignItems="center" gap={4}>
            <Button variant="outline" onClick={onContact}>
              Contact
            </Button>
            {IsThemeLight() ? (
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
