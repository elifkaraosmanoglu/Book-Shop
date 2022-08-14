import {createStyles, ThemeIcon, Text, Box, Stack} from '@mantine/core';
// @ts-ignore
import {IconSun, IconPhone, IconMapPin, IconAt} from '@tabler/icons';
import React from "react";

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
    variant: ContactIconVariant;
}

const useStyles = createStyles((theme, {variant}: ContactIconStyles) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        color: theme.white,
    },

    icon: {
        marginRight: theme.spacing.md,
        backgroundImage:
            variant === 'gradient'
                ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
                    theme.colors[theme.primaryColor][6]
                } 100%)`
                : 'none',
        backgroundColor: 'transparent',
    },

    title: {
        color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
    },

    description: {
        color: variant === 'gradient' ? theme.black : theme.white,
    },
}));
function ContactIcon({
                         icon: Icon,
                         title,
                         description,
                         variant = 'gradient',
                         className,
                         ...others
                     }: any) {
    const {classes, cx} = useStyles({variant});
    return (
        <div className={cx(classes.wrapper, className)} {...others}>
            {variant === 'gradient' ? (
                <ThemeIcon size={40} radius="md" className={classes.icon}>
                    <Icon size={24}/>
                </ThemeIcon>
            ) : (
                <Box mr="md">
                    <Icon size={30}/>
                </Box>
            )}

            <div>
                <Text size="md" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

interface ContactIconsListProps {
    data?: any[];
    variant?: ContactIconVariant;
}

const MOCKDATA = [
    {title: 'Email', description: 'info@bookshop.org', icon: IconAt},
    {title: 'Phone', description: '+90 (411) 41 41', icon: IconPhone},
    {title: 'Address', description: 'Brooklyn, New York, Amerika Birleşik Devletleri', icon: IconMapPin},
    {title: 'Working hours', description: '8 a.m. – 8 p.m.', icon: IconSun},
];

export function ContactIconsList({data = MOCKDATA, variant}: ContactIconsListProps) {
    const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
    return <Stack>{items}</Stack>;
}

