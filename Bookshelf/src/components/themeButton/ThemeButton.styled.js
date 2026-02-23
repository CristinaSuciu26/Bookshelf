import styled from "styled-components";

export const ThemeBtn = styled.button`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  position: relative;
  border: none;
  cursor: pointer;

  background: ${({ theme }) => theme.toggleBg};
`;

export const Thumb = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 1px;
  left: ${(props) => (props.$isDark ? "21px" : "1px")};
  transition:
    left 0.25s,
    background-color 0.25s;
`;
