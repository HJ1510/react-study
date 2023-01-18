function Button({ children, onClick }) {
  const handleClick = () => onClick(children);
  return <button onClick={handleClick}>{children}</button>;
}
export default Button;
