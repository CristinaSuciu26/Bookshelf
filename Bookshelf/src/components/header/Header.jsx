import Logo from "../logo/Logo";
import { User } from "../user/User";
import ThemeButton from "../themeButton/ThemeButton";
import {
  BurgerMenu,
  HeaderWrapper,
  HomeBtn,
  PagesWrapper,
  ShoppingList,
  UserWrapper,
} from "./Header.styled";

export default function Header({ isDark, toggle }) {
  return (
    <>
      <HeaderWrapper>
        <PagesWrapper>
          {" "}
          <Logo />
          <HomeBtn>Home</HomeBtn>
          <ShoppingList>
            Shopping List{" "}
            <svg width="20" height="17">
              <use href={`${import.meta.env.BASE_URL}sprite.svg#icon-shop`} />
            </svg>
          </ShoppingList>
        </PagesWrapper>
        <UserWrapper>
          {" "}
          <ThemeButton isDark={isDark} toggle={toggle} />
          <User />
          <BurgerMenu>
            <svg width="30" height="25">
              <use href={`${import.meta.env.BASE_URL}sprite.svg#icon-burger`} />
            </svg>
          </BurgerMenu>
        </UserWrapper>
      </HeaderWrapper>
    </>
  );
}
