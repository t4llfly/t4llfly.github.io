import React from "react"
import {Badge, Button, Flex, Heading, IconButton, Stack, Tooltip} from "@chakra-ui/react";
import {FaCat, FaCode, FaDiscord, FaGamepad, FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

function ProjectsPage() {
    return(
        <Flex
            alignItems='center' bg="#222222" color="white" minH="100vh"
            justifyContent="center" flexDirection="column"
        >
            <Heading
                as={Link} to="/" fontSize={["4xl", "5xl", "6xl"]} fontFamily="sans-serif"
                letterSpacing="wide" fontWeight="800" mb="1"
            >
                PROJECTS
            </Heading>

            <Stack spacing="2" direction="row" justify="center" align="center">
                <Tooltip textAlign="center" label="Проект Vitiacat и меня">
                    <Button
                        colorScheme='orange' leftIcon={<FaCat />} display={["none", "flex"]}
                        as={'a'} href={"https://catangens.ru"}
                    >
                        Catangens
                    </Button>
                </Tooltip>
                <Tooltip textAlign="center" label="Мониторинга сервера Minecraft">
                    <Button
                        colorScheme="green" leftIcon={<FaGamepad />} display={["none", "flex"]}
                        as={'a'} href={"https://github.com/t4llfly/MineOnline"}
                    >
                        MineOnline
                    </Button>
                </Tooltip>
                <Tooltip textAlign="center" label="Клиент для Discord Rich Presence">
                    <Button
                        colorScheme="messenger" leftIcon={<FaDiscord />} display={["none", "flex"]}
                        as={'a'} href={"https://github.com/t4llfly/EasyRPC"}
                    >
                        EasyRPC
                        <Badge variant="solid" mt="2px" ml="1" colorScheme="gray">rip</Badge>
                    </Button>
                </Tooltip>
                <Tooltip textAlign="center" label="Использование rcon сервера Minecraft">
                    <Button
                        colorScheme="teal" leftIcon={<FaCode />} display={["none", "flex"]}
                        as={'a'} href={"https://github.com/t4llfly/RconBot"}
                    >
                        RconBot
                    </Button>
                </Tooltip>
                <Tooltip textAlign="center" label="Плагин, добавляющий ambient частицы">
                    <Button
                        colorScheme="purple" leftIcon={<FaStar />} display={["none", "flex"]}
                        as={'a'} href={"https://github.com/t4llfly/ctgParticles"}
                    >
                        ctgParticles
                    </Button>
                </Tooltip>


                <IconButton
                    colorScheme='orange' aria-label='Catangens' icon={<FaCat />}
                    display={["flex", "none"]} as={'a'} href={"https://catangens.ru"}
                />
                <IconButton
                    colorScheme='green' aria-label='MineOnline' icon={<FaGamepad />}
                    display={["flex", "none"]} as={'a'} href={"https://github.com/t4llfly/MineOnline"}
                />
                <IconButton
                    colorScheme='messenger' aria-label='EasyRPC' icon={<FaDiscord />}
                    display={["flex", "none"]} as={'a'} href={"https://github.com/t4llfly/EasyRPC"}
                />
                <IconButton
                    colorScheme='teal' aria-label='RconBot' icon={<FaCode />}
                    display={["flex", "none"]} as={'a'} href={"https://github.com/t4llfly/RconBot"}
                />
                <IconButton
                    colorScheme='purple' aria-label='ctgParticles' icon={<FaStar />}
                    display={["flex", "none"]} as={'a'} href={"https://github.com/t4llfly/ctgParticles"}
                />
            </Stack>
        </Flex>
    )
}

export default ProjectsPage;