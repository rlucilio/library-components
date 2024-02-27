export interface ButtonProps {
    color?: 'primary' | 'secondary';
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}