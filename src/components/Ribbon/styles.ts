import styled, { DefaultTheme, css } from 'styled-components';
import { RibbonProps, RibbonColors } from '.';

const wrapperModifiers = {
  bgColor: (theme: DefaultTheme, bgColor: RibbonColors) => css`
    background-color: ${theme.colors[bgColor]};
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
  `,
};

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, bgColor, size }) => css`
    ${!!bgColor && wrapperModifiers.bgColor(theme, bgColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
