import React from "react"
import {Button, Flex, Heading, IconButton, Stack, Text} from "@chakra-ui/react";
import {FaBriefcase, FaDollarSign, FaMastodon, FaTelegramPlane, FaTwitch, FaVk} from "react-icons/fa";
import {Link} from "react-router-dom";

function MainPage() {
    return(
        <Flex alignItems='center' bg="#222222" color="white" minH="100vh"
              justifyContent="center" flexDirection="column"
        >
            <Heading
                as={'a'} href={"https://github.com/t4llfly"}
                fontSize={["4xl", "5xl", "6xl"]} fontFamily="sans-serif"
                letterSpacing="wide" fontWeight="800" mb="1"
            >
                TALLFLY
            </Heading>

            <Stack spacing="2" direction="row" justify="center" align="center">
                <Button
                    colorScheme='telegram' leftIcon={<FaTelegramPlane />}
                    as={'a'} href="https://t.me/tallflyhere"
                    display={["none", "flex"]}
                >
                    Telegram
                </Button>
                <Button
                    colorScheme="messenger" leftIcon={<FaVk />} as={'a'}
                    href="https://vk.com/tallfly" display={["none", "flex"]}
                >
                    VK
                </Button>
                <Button
                    colorScheme="blue" leftIcon={<FaMastodon />} as={'a'}
                    href="https://mastodon.social/@tallfly" display={["none", "flex"]}
                >
                    Mastodon
                </Button>
                <Button
                    colorScheme="orange" leftIcon={<FaBriefcase />} as={Link}
                    to="/projects" display={["none", "flex"]}
                >
                    Projects
                </Button>
                <Button
                    colorScheme="purple" leftIcon={<FaTwitch />} as={'a'}
                    href={"https://twitch.tv/t4llfly"} display={["none", "flex"]}
                >
                    Twitch
                </Button>
                <Button
                    colorScheme="green" leftIcon={<FaDollarSign />} as={'a'}
                    href={"https://donationalerts.com/r/tallfly"}
                    display={["none", "flex"]}
                >
                    Donate
                </Button>

                <IconButton
                    colorScheme='telegram' aria-label='Telegram'
                    icon={<FaTelegramPlane />} as={'a'}
                    href={"https://t.me/tallflyhere"} display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='messenger' aria-label='VK' icon={<FaVk />}
                    as={'a'} href={"https://vk.com/tallfly"} display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='blue' aria-label='Mastodon' icon={<FaMastodon />}
                    as={'a'} href={"https://mastodon.social/@tallfly"}
                    display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='orange' aria-label='Projects' icon={<FaBriefcase />}
                    as={Link} to="/projects" display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='purple' aria-label='Twitch' icon={<FaTwitch />}
                    as={'a'} href={"https://twitch.tv/t4llfly"}
                    display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='green' aria-label='Donate' icon={<FaDollarSign />}
                    as={'a'} href={"https://donationalerts.com/r/tallfly"}
                    display={["flex", "none"]}
                />
            </Stack>

            <Text
                mt="3" as={Link} to="/about" fontFamily="sans-serif"
                fontSize="md" fontWeight="600" color="#343434"
            >
                about me /
            </Text>
        </Flex>
    )
}

export default MainPage;