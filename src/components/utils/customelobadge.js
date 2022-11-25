import React from 'react';
import { Badge } from '@chakra-ui/react';

const CustomEloBadge = ({ value }) => {
    const dyanmicSchema = () => {
        if (value <= 1000) return 'gray.500';
        else if (value > 1000 && value <= 2000) return 'green.500';
        else if (value > 2000) return 'red';
    };
    return (
        <Badge bg={dyanmicSchema()} color={'white'} mx={2}>
            {value} elo
        </Badge>
    );
};

export default CustomEloBadge;
