import styled from "styled-components";
import {Button} from "@mantine/core";

export const StyledButton = styled(Button)<{
    height: string;
    fontSize: string;
    isLink: boolean;
    color: string;
    isOutline: boolean;
}>`
  background-color: ${({isOutline, theme}) => (isOutline ? "white" : theme.primaryColor)};
  color: ${({theme, isOutline, color, isLink}) =>
          color ? color : isOutline ? theme.primaryColor : isLink ? theme.secondaryColor : "white"};
  border-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  min-height: ${(props) => (props.height ? props.height : "42px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

  &:hover {
    text-decoration: ${(props) => props.isLink && "underline"};
    color: ${(props) => (props.isLink ? props.theme.primaryColor : "")};
    background-color: ${({theme, isOutline}) => (isOutline ? "white" : theme.primaryColor)};
    filter: brightness(110%);
    border-color: ${(props) => props.theme.primaryColor};
  }

  .mantine-Button-rightIcon {
    margin-left: 4px;
  }
`;
