import React from "react"
import {Button, Flex, Heading, IconButton, Stack, Text} from "@chakra-ui/react";
import {FaBriefcase, FaDollarSign, FaTelegramPlane, FaTwitch, FaVk} from "react-icons/fa";
import {Link} from "react-router-dom";

function MainPage() {
    return(
        <Flex
            alignItems='center'
            bg="#222222"
            color="white"
            minH="100vh"
            p="4"
            justifyContent="center"
            flexDirection="column"
        >
            <Heading
                onClick={GitHub}
                fontSize={["4xl", "5xl", "6xl"]}
                fontFamily="sans-serif"
                letterSpacing="wide"
                fontWeight="800"
                mb="1"
            >
                TALLFLY
            </Heading>
            <Stack
                spacing="2"
                direction={["row", "row"]}
                justify={["center", "space-between"]}
                align={["center", "flex-end"]}
            >
                <Button
                    colorScheme='telegram'
                    leftIcon={<FaTelegramPlane />}
                    onClick={Telegram}
                    display={["none", "flex"]}
                >
                    Telegram
                </Button>
                <Button
                    colorScheme="messenger"
                    leftIcon={<FaVk />}
                    onClick={VK}
                    display={["none", "flex"]}
                >
                    VK
                </Button>
                <Button
                    colorScheme="orange"
                    leftIcon={<FaBriefcase />}
                    as={Link} to="/projects"
                    display={["none", "flex"]}
                >
                    Projects
                </Button>
                <Button
                    colorScheme="purple"
                    leftIcon={<FaTwitch />}
                    onClick={Twitch}
                    display={["none", "flex"]}
                >
                    Twitch
                </Button>
                <Button
                    colorScheme="blackAlpha"
                    leftIcon={<FaDollarSign />}
                    onClick={Donate}
                    display={["none", "flex"]}
                >
                    Donate
                </Button>

                <IconButton
                    colorScheme='telegram'
                    aria-label='Telegram'
                    icon={<FaTelegramPlane />}
                    onClick={Telegram}
                    display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='messenger'
                    aria-label='VK'
                    icon={<FaVk />}
                    onClick={VK}
                    display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='orange'
                    aria-label='Projects'
                    icon={<FaBriefcase />}
                    as={Link} to="/projects"
                    display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='purple'
                    aria-label='Twitch'
                    icon={<FaTwitch />}
                    onClick={Twitch}
                    display={["flex", "none"]}
                />
                <IconButton
                    colorScheme='blackAlpha'
                    aria-label='Donate'
                    icon={<FaDollarSign />}
                    onClick={Donate}
                    display={["flex", "none"]}
                />
            </Stack>
            <Text
                mt="3"
                as={Link} to="/about"
                fontFamily="sans-serif"
                fontSize="md"
                fontWeight="600"
                color="#343434"
            >
                about me /
            </Text>
        </Flex>
    )
}

function Telegram() {
    window.open("https://t.me/tallflyhere")
}

function GitHub() {
    window.open("https://github.com/T4llFly")
}

function Twitch() {
    window.open("https://twitch.tv/tallflylive")
}

function VK() {
    window.open("https://vk.com/tallfly")
}

function Donate() {
    window.open("https://www.donationalerts.com/r/tallfly")
}
export default MainPage;