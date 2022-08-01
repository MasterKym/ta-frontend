interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: "main" | "main-secondary" | "dark" | "dark-secondary";
  HTMLtype?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

function Button({
  className,
  children,
  onClick,
  disabled,
  type,
  HTMLtype,
  size,
  style,
}: ButtonProps) {
  return (
    <button
      className={`button ${type} size-${
        size ? size : "md"
      } relative flex items-center justify-center ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={HTMLtype}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
