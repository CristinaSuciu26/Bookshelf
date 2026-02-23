import Logo from "../logo/Logo";
import { HeaderWrapper } from "./Header.styled";

export default function Header({ children }) {
  return (
    <>
      <HeaderWrapper>
        <Logo />
        {children}
      </HeaderWrapper>
    </>
  );
}
