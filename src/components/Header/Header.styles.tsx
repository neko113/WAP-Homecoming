import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  background-color: rgb(33, 150, 243);
  @media screen and (max-width: 580px) {
    height: 100px;
  }
`;

export const Text = styled.h1`
  @media screen and (max-width: 580px) {
    font-size: 40px;
  }
  font-size: 72px;
  color: #fff;
`;
