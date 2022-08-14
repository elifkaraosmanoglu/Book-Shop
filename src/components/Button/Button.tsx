import * as React from "react";
import { StyledButton } from "./styles";
import { Button as MantineButton } from "@mantine/core";

type TButton = {
    isLink?: boolean;
    isOutline?: boolean;
    customStyles?: any;
    fontSize?: string;
    height?: string;
    color?: string;
    type?: string;
    children?: React.ReactElement | string;
    onClick?: (e: any) => void;
    rightIcon?: React.ReactElement;
    leftIcon?: React.ReactElement;
    form?: string;
    size?: string;
    variant?: string;
    compact?: boolean;
    fullWidth?: boolean;
};

const Button: React.FC<TButton> = ({ isOutline = false, size = "md", ...props }) => {
    const styles = props.isLink
        ? { background: "transparent", border: "none", ...props.customStyles }
        : { ...props.customStyles };

    return (
        <>
            {props.variant ? (
                // @ts-ignore
                <MantineButton size={size} style={props.customStyles} {...props}>
                    {props?.children}
                </MantineButton>
            ) : (
                // @ts-ignore
                <StyledButton style={styles} isOutline={isOutline} {...props}>
                    {props?.children}
                </StyledButton>
            )}
        </>
    );
};
export default Button;
