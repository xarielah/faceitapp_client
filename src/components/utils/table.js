import React from 'react';
import { TableContainer, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

const Table = ({ data }) => {
    const labels = ['one', 'two', 'three'];

    return (
        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        {labels.map((lbl, index) => (
                            <Th>{lbl}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>asd</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default Table;
