import { ButtonProps } from './types';
import { ButtonStyled } from './styles';

export const Button = ({
  color = 'primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {

  return (
    <ButtonStyled.Button
      color={color}
      size={size}
      type="button"
      {...props}
    >
      {label}
    </ButtonStyled.Button>
  );
};
