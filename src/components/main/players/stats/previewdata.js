import React from 'react';
import corner from '../../../../assets/corner.png';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Image,
    Heading,
    Text,
    Flex,
    SimpleGrid,
    Badge,
    Box,
} from '@chakra-ui/react';

const PreviewData = ({ data, type, isOpen, onClose, isBestMap }) => {
    const keys = [
        'Matches',
        'Wins',
        'Win Rate %',
        'Kills',
        'Deaths',
        'MVPs',
        'Assists',
        'Total Headshots %',
        'Average Headshots %',
        'Average Penta Kills',
        'Average Quadro Kills',
        'Average Triple Kills',
        'Average K/D Ratio',
    ];

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent maxW={'container.md'}>
                <ModalCloseButton zIndex={'999'} />
                <ModalBody p={6} position={'relative'} overflow={'hidden'}>
                    <Flex align={'center'} flexDirection={'column'} gap={6}>
                        <Box position={'relative'}>
                            <Image
                                src={data.img_regular}
                                alt={`${data.label} map preview`}
                                borderRadius={'md'}
                                boxShadow={'0 5px 20px #3e3e3e55'}
                            />
                            {isBestMap && (
                                <Badge
                                    colorScheme={'green'}
                                    position={'absolute'}
                                    bottom={1}
                                    right={-2}
                                >
                                    {type} BEST MAP!
                                </Badge>
                            )}
                        </Box>
                        <Heading>{data.label}</Heading>
                        <Flex flexDirection={'column'} gap={2}>
                            <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                                {keys.map((k, index) => (
                                    <DataBox
                                        key={index}
                                        data={data.stats[k]}
                                        label={k}
                                    />
                                ))}
                            </SimpleGrid>
                        </Flex>
                    </Flex>
                    <Image
                        borderBottomRightRadius={'md'}
                        src={corner}
                        position={'absolute'}
                        bottom={0}
                        right={0}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

const DataBox = ({ data, label }) => {
    const parse = (input) =>
        input ? parseFloat(input).toLocaleString() : 'N/A';
    console.log(data);
    return (
        <Flex flexDirection={'column'} align={'center'}>
            <Text>{label}</Text>
            <Text
                fontWeight={'bold'}
                color={parseFloat(data) < 0.5 ? 'red.700' : 'inherit'}
                fontSize={'2em'}
            >
                {parse(data)}
            </Text>
        </Flex>
    );
};
export default PreviewData;
