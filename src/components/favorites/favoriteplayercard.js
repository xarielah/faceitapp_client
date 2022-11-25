// import React from 'react';
// import {
//     Flex,
//     Text,
//     Box,
//     Heading,
//     Image,
//     Button,
//     useToast,
//     Link,
//     Tooltip,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// const FavoritePlayerCard = ({ player }) => {
//     const navigate = useNavigate();

//     return (
//         <Flex gap={2}>
//             <Image
//                 w={'100%'}
//                 maxW={'50px'}
//                 borderRadius={'lg'}
//                 src={
//                     player.avatar
//                         ? player.avatar
//                         : 'https://faceitfinder.com/themes/dark/images/faceit_avatar.jpg'
//                 }
//                 alt={`${player.nickname}'s avatar`}
//             />
//             <Flex>
//                 <Link onClick={() => navigate(`/player/${player.player_id}`)}>
//                     <Heading size={'md'}>{player.nickname}</Heading>
//                 </Link>
//                 {player.steam_nickname && (
//                     <Link
//                         target={'_blank'}
//                         href={`https://steamcommunity.com/profiles/${player.steam_id_64}`}
//                     >
//                         <Tooltip
//                             variant={'orange-tt'}
//                             label={`${player.nickname}'s steam`}
//                         >
//                             <Text
//                                 as={'span'}
//                                 mx={1}
//                                 color={'gray.500'}
//                                 transition={'all 200ms ease-in-out'}
//                                 _hover={{ color: 'blue.600' }}
//                             >
//                                 ({player.steam_nickname})
//                             </Text>
//                         </Tooltip>
//                     </Link>
//                 )}
//             </Flex>
//         </Flex>
//     );
// };

// export default FavoritePlayerCard;
