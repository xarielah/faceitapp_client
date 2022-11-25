import { extendTheme } from '@chakra-ui/react';

const components = {
    Tooltip: {
        variants: {
            'orange-tt': {
                backgroundColor: 'orange.500',
                color: 'white',
                borderRadius: 'lg',
            },
        },
    },
    Button: {
        variants: {
            'orange-btn': {
                color: 'white',
                backgroundColor: 'orange.500',
                borderRadius: 'lg',
                '&:hover': {
                    backgroundColor: 'orange.400',
                },
            },
            'reverse-orange': {
                bg: '#FEEBC8',
                color: '#9C4221',
            },
            'dark-orange-btn': {
                color: 'white',
                backgroundColor: 'orange.700',
                borderRadius: 'lg',
                '&:hover': {
                    backgroundColor: 'orange.800',
                },
            },
        },
    },
    Link: {
        baseStyle: {
            transition: 'all 400ms ease-in-out',
            '&:hover': {
                textDecoration: 'none',
                color: 'orange.100',
            },
        },
    },
};

export default extendTheme({ components });
