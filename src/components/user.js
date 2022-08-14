import React from 'react';
import { ChevronRight, ChevronLeft } from 'tabler-icons-react';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core';
import {useNavigate} from "react-router-dom";


export function User() {
    const theme = useMantineTheme();
    const navigate = useNavigate();


    return (
        <Box
            sx={{
                paddingTop: theme.spacing.sm,
                borderTop: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
            }}
        >
            <UnstyledButton

                onClick={() => navigate("/contact")}
                sx={{
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                }}
            >
                <Group>
                    <Avatar
                       
                        radius="xl"
                    />
                    <Box sx={{ flex: 1 }}>
                        <Text size="sm" weight={400}>
                            İletişim ve Destek
                        </Text>
                        <Text size="sm" weight={400}>
                          
                        </Text>
                        <Text color="dimmed" size="xs">
                         
                        </Text>
                    </Box>

                    {theme.dir === 'ltr' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </Group>
            </UnstyledButton>
        </Box>
    );
}