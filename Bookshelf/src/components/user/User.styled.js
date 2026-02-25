import styled from "styled-components";

export const UserContainer = styled.div`
  width: 184px;
  height: 45px;
  border-radius: 36px;
  color: white;
  background-color: ${({ theme }) => theme.accent};
  display: none;

  font-size: 22px;
  font-weight: 700;

  margin-right: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`;

export const Image = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 18px;
`;

export const UserWrapper = styled.div`
  display: flex;
`;
