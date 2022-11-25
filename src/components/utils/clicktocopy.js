import { Box, useToast } from '@chakra-ui/react';
import React from 'react';
import CustomTooltip from './customtooltip';

const ClickToCopy = ({ children, text, label }) => {
    const toast = useToast();
    const copy = () => {
        navigator.clipboard.writeText(text);
        toast({
            isClosable: false,
            duration: 4000,
            description: `${label} "${text}" was copied to your clipboard!`,
        });
    };

    return (
        <CustomTooltip label={`Click to copy your ${label}!`}>
            <Box cursor={'pointer'} w={'100%'} onClick={copy}>
                {children}
            </Box>
        </CustomTooltip>
    );
};

export default ClickToCopy;
