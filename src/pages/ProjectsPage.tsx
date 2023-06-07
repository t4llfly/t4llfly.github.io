import React from "react"
import {Badge, Button, Flex, Heading, IconButton, Stack, Tooltip} from "@chakra-ui/react";
import {FaCat, FaCode, FaDiscord, FaGamepad, FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

function ProjectsPage() {
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
                as={Link} to="/"
                fontSize={["4xl", "5xl", "6xl"]}
                fontFamily="sans-serif"
                letterSpacing="wide"
                fontWeight="800"
                mb="1"
            >
                PROJECTS
            </Heading>
            <Stack
                spacing="2"
                direction={["row", "row"]}
                justify={["center", "space-between"]}
                align={["center", "flex-end"]}
            >
                <Tooltip textAlign="center" label="Проект Vitiacat, где я являюсь администратором и основным стримером">
                    <Button
                        colorScheme='orange'
                        leftIcon={<FaCat />}
                        display={["none", "flex"]}
                        onClick={Catangens}
                    >
                        Catangens
                    </Button>
                </Tooltip>
                <Tooltip textAlign="center" label="Бот для мониторинга онлайна серверов в Minecraft">
                    <Button
                        colorScheme="green"
                        leftIcon={<FaGamepad />}
                        display={["none", "flex"]}
                        onClick={MineOnline}
                    >
                        MineOnline
                    </Button>
                </Tooltip>
                <Tooltip textAlign="center" label="Клиент для использования Discord Rich Presence">
                    <Button
                        colorScheme="messenger"
                        leftIcon={<FaDiscord />}
                        display={["none", "flex"]}
                        onClick={EasyRPC}
                    >
                        EasyRPC
                        <Badge variant="solid" mt="1px" ml="1" colorScheme="blackAlpha">rip</Badge>
                    </Button>
                </Tooltip>
                <Tooltip textAlign="center" label="Использование rcon для администрирования сервера Minecraft">
                    <Button
                        colorScheme="teal"
                        leftIcon={<FaCode />}
                        display={["none", "flex"]}
                        onClick={RconBot}
                    >
                        RconBot
                    </Button>
                </Tooltip>
                <Tooltip textAlign="center" label="Плагин Minecraft, добавляющий в Энд ambient частицы">
                    <Button
                        colorScheme="purple"
                        leftIcon={<FaStar />}
                        display={["none", "flex"]}
                        onClick={ctgParticles}
                    >
                        ctgParticles
                    </Button>
                </Tooltip>


                <IconButton
                    colorScheme='orange'
                    aria-label='Catangens'
                    icon={<FaCat />}
                    display={["flex", "none"]}
                    onClick={Catangens}
                />
                <IconButton
                    colorScheme='green'
                    aria-label='MineOnline'
                    icon={<FaGamepad />}
                    display={["flex", "none"]}
                    onClick={MineOnline}
                />
                <IconButton
                    colorScheme='messenger'
                    aria-label='EasyRPC'
                    icon={<FaDiscord />}
                    display={["flex", "none"]}
                    onClick={EasyRPC}
                />
                <IconButton
                    colorScheme='teal'
                    aria-label='RconBot'
                    icon={<FaCode />}
                    display={["flex", "none"]}
                    onClick={RconBot}
                />
                <IconButton
                    colorScheme='purple'
                    aria-label='ctgParticles'
                    icon={<FaStar />}
                    display={["flex", "none"]}
                    onClick={ctgParticles}
                />
            </Stack>
        </Flex>
    )
}

function Catangens() {
    window.open("https://catangens.ru")
}

function MineOnline() {
    window.open("https://github.com/t4llfly/MineOnline")
}

function EasyRPC() {
    window.open("https://github.com/t4llfly/EasyRPC")
}

function RconBot() {
    window.open("https://github.com/t4llfly/RconBot")
}

function ctgParticles() {
    window.open("https://github.com/t4llfly/ctgParticles")
}
export default ProjectsPage;