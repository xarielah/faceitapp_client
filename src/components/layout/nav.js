import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Button } from '@chakra-ui/react';

const Nav = () => {
    const links = [
        { label: 'Main Page', href: '/' },
        {
            label: 'Your Favorites',
            href: '/favorites',
        },
    ];
    const navigate = useNavigate();

    return (
        <Flex gap={6}>
            {links.map((link, index) => (
                <Button
                    key={index}
                    size={'sm'}
                    borderTopLeftRadius={'none'}
                    borderTopRightRadius={'none'}
                    onClick={() => navigate(link.href)}
                    colorScheme={
                        window.location.pathname === link.href
                            ? 'orange'
                            : 'blackAlpha'
                    }
                >
                    {link.label}
                </Button>
            ))}
        </Flex>
    );
};

export default Nav;
