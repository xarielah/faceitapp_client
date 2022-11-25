import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mainpage, NotFound } from './pages/';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/layout/layout';
import theme from './lib/theme';
import Favorites from './pages/favorites/favorites';
import PlayerProfile from './components/main/players/playerprofile';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Mainpage />} />
                        <Route
                            path='/search/:nickname'
                            element={<Mainpage />}
                        />
                        <Route
                            path='/player/:playerid'
                            element={<PlayerProfile />}
                        />
                        <Route path='/favorites' element={<Favorites />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
