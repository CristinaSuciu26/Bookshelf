import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.headerBg};
  color: ${(theme) => theme.text};
  height: 64px;
  width: 100%;
`;
