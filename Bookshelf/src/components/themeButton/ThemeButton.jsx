import { ThemeBtn, Thumb } from "./ThemeButton.styled";

export default function ThemeToggle({ isDark, toggle }) {
  return (
    <ThemeBtn onClick={toggle}>
      <Thumb $isDark={isDark} />
    </ThemeBtn>
  );
}
