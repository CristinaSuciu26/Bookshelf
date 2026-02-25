import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HomeBtn = styled.div`
  width: 72px;
  height: 34px;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.activeLink};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ShoppingList = styled.div`
  width: 156px;
  height: 34px;
  border-radius: 36px;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.activeLink};
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
`;

export const PagesWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
export const UserWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;
