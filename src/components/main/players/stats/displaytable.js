import React, { useEffect, useState } from 'react';
import {
    TableContainer,
    Tbody,
    Thead,
    Table,
    Heading,
    Box,
    Text,
    Tr,
    Th,
    Image,
    Td,
    HStack,
    Badge,
    useDisclosure,
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import PreviewData from './previewdata';

const DisplayTable = ({ data, type, bestMap }) => {
    const labels = [
        'map',
        'matches',
        'win rate %',
        'avg headshot %',
        'Avg Aces',
        'Avg Mini-Aces',
        'Avg Triple Kills',
        'K/D Ratio',
    ];
    const keys = [
        'label',
        'Matches',
        'Win Rate %',
        'Average Headshots %',
        'Average Penta Kills',
        'Average Quadro Kills',
        'Average Triple Kills',
        'Average K/D Ratio',
    ];
    const [keySort, setKeySort] = useState(keys[1]);
    const [sortObject, setSortObject] = useState({});
    const [rerender, setRerender] = useState(false);
    const [previewData, setPreviewData] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (Object.keys(sortObject).length === 0) {
            let sortObj = {};
            for (let i = 0; i < keys.length; i++) {
                sortObj[keys[i]] = false;
            }
            setSortObject(sortObj);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rerender]);

    data.sort((a, b) =>
        sortObject[keySort]
            ? b.stats[keySort] - a.stats[keySort]
            : a.stats[keySort] - b.stats[keySort],
    );

    const inputParser = (item, key, data, isBestMap) => {
        if (key === 'label') {
            return (
                <HStack>
                    <Image
                        w={'80px'}
                        borderRadius={'md'}
                        src={item.img_small}
                        alt={'map preview'}
                    />
                    <Text
                        px={2}
                        py={1}
                        bg={'orange.600'}
                        borderRadius={'md'}
                        fontWeight={'bold'}
                    >
                        {item.label}
                    </Text>
                    {isBestMap && <Badge>TOP</Badge>}
                </HStack>
            );
        } else {
            return data ? data : 'N/A';
        }
    };

    const openAndSetData = (data) => {
        setPreviewData(data);
        onOpen();
    };

    const sortAction = (index) => {
        setKeySort(keys[index]);
        let copyObj = sortObject;
        const value = copyObj[keys[index]];
        copyObj[keys[index]] = !value;
        setSortObject(copyObj);
        setRerender(!rerender);
    };

    return (
        <>
            {Object.keys(previewData).length > 0 && (
                <PreviewData
                    type={type}
                    isBestMap={previewData.label === bestMap}
                    data={previewData}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}
            <Box>
                <Heading>{type} Matches</Heading>
            </Box>
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            {labels.map((lbl, index) => (
                                <Th
                                    key={index}
                                    onClick={
                                        lbl !== 'label'
                                            ? () => sortAction(index)
                                            : null
                                    }
                                    cursor={
                                        lbl !== 'label' ? 'pointer' : 'inherit'
                                    }
                                >
                                    {lbl}
                                    {sortObject[keys[index]] ? (
                                        <ChevronDownIcon />
                                    ) : (
                                        <ChevronUpIcon />
                                    )}
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item, index) => (
                            <Tr
                                cursor={'pointer'}
                                _hover={{ backgroundColor: 'whiteAlpha.50' }}
                                transition={'all 400ms ease-in-out'}
                                onClick={() => openAndSetData(item)}
                                bg={
                                    bestMap && bestMap === item.label
                                        ? '#FAFAFA11'
                                        : ''
                                }
                                key={index}
                            >
                                {keys.map((k, index) => (
                                    <Td key={index}>
                                        {inputParser(
                                            item,
                                            k,
                                            item.stats[k],
                                            bestMap === item.label,
                                        )}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};

export default DisplayTable;
