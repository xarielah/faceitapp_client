import React, { useEffect, useState } from 'react';
import { SearchBar, ResultsContainer } from '../../components/main';
import { Navigate, useParams } from 'react-router-dom';
import { Flex, Heading, Text } from '@chakra-ui/react';
import userDataContext from './content';
import NoResults from '../../components/utils/noresults';
import apiRequests from '../../service/req';
import OverlayLoading from '../../components/utils/overlayloading';
import PageLayout from '../../components/layout/page';

const Mainpage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { nickname } = useParams();

    useEffect(() => {
        if (nickname && nickname.trim().length >= 3) {
            setLoading(true);
            apiRequests
                .getPlayerData({ nickname })
                .then((res) => {
                    if (res.ok) {
                        setData(res.data);
                    } else {
                        setData([]);
                    }
                })
                .catch((e) => console.log('error'))
                .finally(() => {
                    setLoading(false);
                });
        }
        if (nickname && nickname.trim().length < 3) {
            window.location.href = '/';
        }
    }, [nickname]);

    return (
        <userDataContext.Provider
            value={{ setUserData: (data) => setData(data), userData: data }}
        >
            {loading && <OverlayLoading />}
            <PageLayout>
                <Flex
                    flexDirection={'column'}
                    py={14}
                    gap={10}
                    align={'center'}
                >
                    <Flex
                        flexDirection={'column'}
                        gap={2}
                        textAlign={'center'}
                        cursor={'pointer'}
                        onClick={() => (window.location.href = '/')}
                    >
                        <Heading>STATS LOOKUP</Heading>
                        <Text>
                            Faceit.com CSGO Platform Player Stats Lookup.
                        </Text>
                    </Flex>
                    <SearchBar loading={loading} />
                    {data && data.length === 0 && <NoResults />}
                    {data && Object.keys(data).length > 0 && !loading && (
                        <ResultsContainer data={data} />
                    )}
                </Flex>
            </PageLayout>
        </userDataContext.Provider>
    );
};

export default Mainpage;
