// import React from 'react';
// import {
//     Box,
//     Flex,
//     Heading,
//     Text,
//     Badge,
//     SimpleGrid,
//     Image,
// } from '@chakra-ui/react';

// const MapCard = ({ data }) => {
//     const matches = data.stats['Matches'];
//     const winRate = data.stats['Win Rate %'];
//     const rounds = data.stats['Rounds'];
//     const pentaKills = data.stats['Penta Kills'];
//     const quadroKills = data.stats['Quadro Kills'];
//     const tripleKills = data.stats['Triple Kills'];
//     const kd = data.stats['K/D Ratio'];
//     const kills = data.stats['Kills'];
//     const hsPerMatch = data.stats['Headshots per Match'];

//     const parseData = (data) => parseInt(data).toLocaleString();

//     return (
//         <Box
//             bg={'#FAFAFA'}
//             color={'gray.900'}
//             p={4}
//             borderRadius={'lg'}
//             w={'100%'}
//         >
//             <Flex gap={5} flexDirection={{ base: 'column', md: 'row' }}>
//                 <Flex flexDirection={'column'} gap={4}>
//                     <Image
//                         src={data.img_regular}
//                         w={'250px'}
//                         maxW={'250px'}
//                         borderRadius={'lg'}
//                         boxShadow={'0 5px 10px #3e3e3e77'}
//                         overflow={'hidden'}
//                     />
//                     <Text
//                         fontWeight={'bold'}
//                         color={'white'}
//                         bg={'orange.500'}
//                         fontSize={'1.3em'}
//                         borderRadius={'lg'}
//                         px={2}
//                     >
//                         {data.mode} | {data.label}
//                     </Text>
//                 </Flex>
//                 <SimpleGrid columns={2} spacing={3}>
//                     <Text>Matches: {parseData(matches)}</Text>
//                     <Text>winRate: {parseData(winRate)}%</Text>
//                     <Text>Matches: {matches}</Text>
//                     <Text>Matches: {matches}</Text>
//                 </SimpleGrid>
//             </Flex>
//         </Box>
//     );
// };

// export default MapCard;
