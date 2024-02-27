import styled, { css } from "styled-components";
import { ButtonProps } from "./types";


const variantsColors = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `
}

const variantsSize = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
}

const Button = styled.button<Omit<ButtonProps, 'onClick' | 'label'>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ color }) => color && variantsColors[color]};
  ${({ size }) => size && variantsSize[size]};
  background: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`;

export const ButtonStyled = {
  Button,
};