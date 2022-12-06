import styled from "styled-components";

export const DivPageReg = styled.div`
  @media (max-width: 800px) {
    width: 100%;
  }
  .topLogo {
    display: flex;
    flex-direction: row;
    width: 370px;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 3rem;
    @media (max-width: 800px) {
      width: 100%;
      padding: 0 1rem;
    }
  }
  .logo {
    color: var(--color-primary);
  }
  .back {
    height: 40px;
    width: 68px;
    padding: 0px 16px;

    border-radius: 4px;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    color: var(--grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 14px;
    :hover {
      border: 2px solid var(--grey-0);
      font-weight: 700;
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
