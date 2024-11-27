import React from 'react'
import {Container, Box, Text, Tabs } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
        <Box d ="flex" justifyContent="center" p={3} bg={"black"} w="100%" m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
            <Text fontSize="4xl" fontFamily="Work sans" color="grey">HI BITCH</Text>
        </Box>
        <Box bg="black" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs.Root defaultValue="login" variant="plain">
                <Tabs.List style={{ display: 'flex', backgroundColor: 'black', borderRadius: '8px', padding: '4px' }}>
                    <Tabs.Trigger value="login" style={{ flex: 1, textAlign: 'center' }}>
                        Login
                    </Tabs.Trigger>
                    <Tabs.Trigger value="signup" style={{ flex: 1, textAlign: 'center' }}>
                        Signup
                    </Tabs.Trigger>
                    <Tabs.Indicator rounded="lg" style={{backgroundColor:'#341539'}}/>
                </Tabs.List>
                <Tabs.Content value="login"><Login /></Tabs.Content>
                <Tabs.Content value="signup"><Signup /></Tabs.Content>
            </Tabs.Root>
        </Box>
    </Container>
  );
};

export default HomePage