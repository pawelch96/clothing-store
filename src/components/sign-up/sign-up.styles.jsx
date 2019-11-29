import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;