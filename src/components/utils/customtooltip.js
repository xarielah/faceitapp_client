import { Tooltip } from '@chakra-ui/react';
import React from 'react';

const CustomTooltip = ({ children, label }) => {
    return (
        <Tooltip
            borderRadius={'lg'}
            color={'white'}
            bg={'orange.500'}
            placement='auto-start'
            hasArrow
            label={label}
        >
            {children}
        </Tooltip>
    );
};

export default CustomTooltip;
