interface ButtonProps {
  onClick: () => void;
}

export default function Button({ onClick }: ButtonProps): JSX.Element {
  return (
    <>
      <button onClick={onClick}>버튼 Sample</button>
    </>
  );
}
