import React, { useEffect, useState } from 'react';
import { HStack, Button, Flex } from '@chakra-ui/react';
import DisplayTable from './displaytable';

const MapStats = ({ data: { segments: data } }) => {
    const [keys, setKeys] = useState([]);
    const [currentKey, setCurrentKey] = useState('');
    const [dataByKeys, setDataByKeys] = useState([]);
    const [currentBestMap, setCurrentBestMap] = useState('');

    useEffect(() => {
        if (keys.length === 0) {
            let keysArray = [];
            for (let i = 0; i < data.length; i++) {
                if (!keysArray.includes(data[i].mode))
                    keysArray.push(data[i].mode);
            }

            setKeys(keysArray);

            if (dataByKeys.length === 0) {
                let sortedData = {};
                for (let j = 0; j < keysArray.length; j++) {
                    const filteredData = data.filter(
                        (item) => item.mode === keysArray[j],
                    );
                    sortedData[keysArray[j]] = filteredData;
                }

                setDataByKeys(sortedData);
                setCurrentKey(keysArray[0]);
            }
        }

        if (dataByKeys[currentKey] && dataByKeys[currentKey].length >= 3) {
            let currentMap = {};
            let currentAvg = 0;
            for (let k = 0; k < dataByKeys[currentKey].length; k++) {
                const matchesNumber = parseInt(
                    dataByKeys[currentKey][k].stats['Matches'],
                );
                const winRateNumber = parseInt(
                    dataByKeys[currentKey][k].stats['Win Rate %'],
                );
                const winMatchDivision = (matchesNumber * winRateNumber) / 100;
                if (k === 0) {
                    currentMap = dataByKeys[currentKey][k];
                    currentAvg = winMatchDivision;
                } else if (
                    parseInt(currentMap.stats['Win Rate %']) === winRateNumber
                ) {
                    const currentMapMatches = parseInt(
                        currentMap.stats['Matches'],
                    );
                    currentMap =
                        currentMapMatches > matchesNumber
                            ? currentMap
                            : dataByKeys[currentKey][k];
                } else {
                    if (winMatchDivision > currentAvg) {
                        currentAvg = winMatchDivision;
                        currentMap = dataByKeys[currentKey][k];
                    } else if (winMatchDivision === currentAvg) {
                        if (
                            matchesNumber >
                            parseInt(dataByKeys[currentKey][k].stats['Matches'])
                        ) {
                            currentAvg = winMatchDivision;
                            currentMap = dataByKeys[currentKey][k];
                        }
                    }
                }
            }
            setCurrentBestMap(currentMap.label);
        } else {
            setCurrentBestMap('');
        }
    }, [currentKey]);

    return (
        <Flex
            flexDirection={'column'}
            gap={14}
            justify={'center'}
            align={'center'}
        >
            <HStack spacing={8}>
                {keys.map((key, index) => (
                    <Button
                        variant={
                            currentKey === key
                                ? 'reverse-orange'
                                : 'dark-orange-btn'
                        }
                        size={'sm'}
                        key={index}
                        onClick={() => setCurrentKey(key)}
                    >
                        {key}
                    </Button>
                ))}
            </HStack>
            {Object.keys(dataByKeys).length > 0 ? (
                <DisplayTable
                    bestMap={currentBestMap}
                    type={currentKey}
                    data={dataByKeys[currentKey]}
                />
            ) : (
                ''
            )}
        </Flex>
    );
};

export default MapStats;
