import React from "react"
import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
function AboutPage() {
    return(
        <Flex
            alignItems='center' bg="#222222" color="white" minH="100vh"
            justifyContent="center" flexDirection="column"
        >
            <Heading
                as={Link} to="/" fontSize={["4xl", "5xl", "6xl"]}
                fontFamily="sans-serif" letterSpacing="wide"
                fontWeight="800" mb="1"
            >
                ABOUT
            </Heading>

            <Box
                bg="#343434" borderRadius="15px" ml="8px" mr="8px"
                flexDirection="row" justifyContent="center" alignItems="center"
            >
                <Text fontWeight="600" ml="15" mr="15" mt="15px" mb="15px" textAlign="center">
                    My name is Vladimir, I'm from Kazakhstan.
                    <br/>
                    In social media I'm TallFly (t4llfly), and I make programs for fun and study.
                    <br/>
                    I'm currently learning Frontend, because I like beautiful and comfortable apps/websites.
                </Text>
            </Box>
        </Flex>
    )
}
export default AboutPage;