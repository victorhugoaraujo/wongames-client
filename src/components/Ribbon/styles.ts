import styled, { DefaultTheme, css } from 'styled-components';
import { RibbonProps, RibbonColors } from '.';
import { darken } from 'polished';

const wrapperModifiers = {
  bgColor: (theme: DefaultTheme, bgColor: RibbonColors) => css`
    background-color: ${theme.colors[bgColor]};
    &::before {
      border-left-color: ${darken(0.2, theme.colors[bgColor])};
      border-top-color: ${darken(0.2, theme.colors[bgColor])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    right: -2rem;
    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,
};

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, bgColor, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!bgColor && wrapperModifiers.bgColor(theme, bgColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
