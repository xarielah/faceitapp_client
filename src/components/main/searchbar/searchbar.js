import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, Input, Flex, Button } from '@chakra-ui/react';

const SearchBar = ({ loading }) => {
    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: { nickname: '' } });
    const navigate = useNavigate();

    const onsubmit = (data) => {
        navigate(`/search/${data.nickname}`);
        reset();
    };

    return (
        <>
            <Flex w={{ base: '100%', md: '100%' }} align={'center'}>
                <form
                    style={{ width: '100%' }}
                    noValidate
                    onSubmit={handleSubmit(onsubmit)}
                >
                    <FormControl isInvalid={errors.nickname}>
                        <Controller
                            control={control}
                            name='nickname'
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Flex gap={3}>
                                    <Input
                                        {...field}
                                        variant={'filled'}
                                        _focus={{ color: 'white' }}
                                        color={'gray.800'}
                                        placeholder={
                                            "Please type a player's nickname. Yes, it's case-sensitive."
                                        }
                                    />
                                    <Button
                                        type='submit'
                                        colorScheme={'orange'}
                                        isLoading={loading}
                                    >
                                        Search
                                    </Button>
                                </Flex>
                            )}
                        />
                    </FormControl>
                </form>
            </Flex>
        </>
    );
};

export default SearchBar;
