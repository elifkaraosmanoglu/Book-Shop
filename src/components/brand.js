import React from 'react';
import { Group, Box } from '@mantine/core';
import { Logo } from './logo';


export function Brand() {

    return (
        <Box
            sx={(theme) => ({
                paddingLeft: theme.spacing.xs,
                paddingRight: theme.spacing.xs,
                paddingBottom: theme.spacing.lg,
                borderBottom: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
            })}
        >
            <Group position="center" spacing="xl">
                <Logo />
            </Group>
        </Box>
    );
}