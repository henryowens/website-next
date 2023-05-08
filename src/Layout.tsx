import {
  Button,
  Heading,
  Flex,
  useColorMode,
  IconProps,
  Container,
  useBreakpointValue,
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

  return (
    <Flex id="Layout" flexDirection="column">
      <header>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom={useBreakpointValue({ base: "10", sm: "20" })}
        >
          <Heading
            as="h2"
            fontSize={useBreakpointValue({ base: "2xl", sm: "3xl" })}
            opacity="50%"
            _hover={{ cursor: "pointer" }}
            paddingTop='2'
            onClick={() => push("/")}
          >
            HENRY OWENS
          </Heading>
          <Flex alignItems="center" gap={4}>
            <Button
              as="a"
              size={useBreakpointValue({ base: "sm", sm: "md" })}
              variant="outline"
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                push("/contact");
              }}
            >
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
      <Container id="LayoutContainer" maxW="4xl" padding="0">
        {children}
      </Container>
    </Flex>
  );
};

export default Layout;
