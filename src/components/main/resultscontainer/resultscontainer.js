import React, { useEffect, useState } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import PlayerCard from './playercard';
import Pagination from './pagination';

const ResultsContainer = ({ data }) => {
    const [fullData, setFullData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const MAX_PER_PAGE = 9;
        let fullDataContainer = [];
        let tempDataContainer = [];
        const rawDataArray = data.items;
        let counter = 0;

        for (let i = 0; i < rawDataArray.length; i++) {
            tempDataContainer.push(rawDataArray[i]);

            if (
                tempDataContainer.length === MAX_PER_PAGE ||
                counter === rawDataArray.length - 1
            ) {
                fullDataContainer.push(tempDataContainer);
                tempDataContainer = [];
            }

            counter++;
        }

        setFullData(fullDataContainer);
    }, []);

    return (
        <>
            <Flex maxW={'container.xl'} gap={5} flexDirection={'column'} p={3}>
                <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                    {fullData.length > 0 &&
                        fullData[currentPage - 1].map((player, index) => (
                            <PlayerCard data={player} key={index} />
                        ))}
                </SimpleGrid>
                {/* Navigation */}
                {fullData.length > 0 && (
                    <Pagination
                        setPage={(n) => setCurrentPage(n)}
                        currentPage={currentPage}
                        maxPage={fullData.length}
                    />
                )}
            </Flex>
        </>
    );
};

export default ResultsContainer;
