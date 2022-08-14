import {AppShell, MantineThemeOverride} from "@mantine/core";
import styled from "styled-components";

export const theme = {
    primaryColor: "#9500b4",
    borderColor: "#e9ecef",
    secondaryColor: "#343f52",
    lightColor: "#9696A4",
    greyColor: "#f8f9fa",
    backgroundColor: "#f7ecf9",
};

// @ts-ignore
export const MantineTheme: MantineThemeOverride = {
    fontFamily: "THICCCBOI",
    fontFamilyMonospace: "THICCCBOI",
    headings: {fontFamily: "THICCCBOI"},
    colors: {
        borderColor: [theme.borderColor],
        secondaryColor: [theme.secondaryColor],
        backgroundColor: [theme.backgroundColor],
        greyColor: [theme.greyColor],
        lightColor: [theme.lightColor],
        brand: [
            theme.backgroundColor,
            theme.backgroundColor,
            theme.backgroundColor,
            theme.backgroundColor,
            theme.backgroundColor,
            theme.primaryColor,
            theme.primaryColor,
            theme.primaryColor,
            theme.primaryColor,
            theme.primaryColor,
        ],
    },
    primaryColor: "brand",
};

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FlexRowSpaceBetween = styled(FlexRowCenter)`
  justify-content: space-between;
`;

export const FlexRowSpaceBetweenMedia = styled(FlexRowSpaceBetween)`
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const DotsShape = styled.div`
  background-image: ${(props) => `radial-gradient(${props.theme.primaryColor} 2px, transparent 2.5px)`};
  background-size: 0.75rem 0.75rem;
  opacity: 0.4;
  height: 8rem !important;
  width: 8rem !important;
  position: absolute;
  right: 0;
  z-index: 0;
  bottom: 7rem;
  transform: translate3d(0px, 4px, 0px);
`;

export const Layout = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: fit-content;
    height: fit-content;
  }
`;

export const AppShellStyled = styled(AppShell)`
  .mantine-AppShell-main {
    padding: calc(var(--mantine-header-height, 0px)) 0 0 0;
  }
`;
