import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const SignInButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
