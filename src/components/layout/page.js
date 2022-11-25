import React from 'react';
import { Container } from '@chakra-ui/react';

const PageLayout = ({ children }) => {
    return (
        <Container py={10} maxW={'100%'} gap={3}>
            {children}
        </Container>
    );
};

export default PageLayout;
