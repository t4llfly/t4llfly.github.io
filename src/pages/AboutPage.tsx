import React from "react"
import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
function AboutPage() {
    return(
        <Flex
            alignItems='center'
            bg="#222222"
            color="white"
            minH="100vh"
            p={["0", "4"]}
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
                ABOUT
            </Heading>
            <Box
                bg="#343434"
                borderRadius="15px"
                flexDirection={["row", "row"]}
                justifyContent={["center", "space-between"]}
                alignItems={["center", "flex-end"]}
            >
                <Text fontWeight="600" ml={["15", "30"]} mr="30" mt="15px" mb="15px" textAlign="center">
                    Меня зовут Владимир, я из города Астана, Казахстан.
                    <br/>
                    В интернете я TallFly (T4llFly), и я пишу разные программы и сайты для обучения.
                    <br/>
                    Сейчас я больше направлен на Frontend, т.к. мне нравятся красивые и удобные сайты и приложения.
                </Text>
            </Box>
        </Flex>
    )
}
export default AboutPage;