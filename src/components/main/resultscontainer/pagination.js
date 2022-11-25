import React from 'react';
import { HStack, Button } from '@chakra-ui/react';

const Pagination = ({ setPage, currentPage, maxPage }) => {
    const pages = [...Array(maxPage).keys()];

    const pageChange = (n) => setPage(n);
    const nextPage = () => {
        if (currentPage < maxPage) {
            pageChange(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            pageChange(currentPage - 1);
        }
    };

    return (
        <HStack gap={2} justify={'center'}>
            <Button
                size={'sm'}
                display={{ base: 'none', md: 'inline' }}
                colorScheme={'blackAlpha'}
                onClick={() => pageChange(1)}
            >
                {'<<'}
            </Button>
            <Button
                size={'sm'}
                colorScheme={'blackAlpha'}
                onClick={() => prevPage()}
            >
                {'<'}
            </Button>
            {pages.map((pageNum, index) => (
                <Button
                    size={'sm'}
                    onClick={() => setPage(pageNum + 1)}
                    colorScheme={
                        currentPage - 1 === pageNum ? 'orange' : 'blackAlpha'
                    }
                >
                    {pageNum + 1}
                </Button>
            ))}
            <Button
                size={'sm'}
                colorScheme={'blackAlpha'}
                onClick={() => nextPage()}
            >
                {'>'}
            </Button>
            <Button
                size={'sm'}
                display={{ base: 'none', md: 'inline' }}
                colorScheme={'blackAlpha'}
                onClick={() => pageChange(maxPage)}
            >
                {'>>'}
            </Button>
        </HStack>
    );
};

export default Pagination;
