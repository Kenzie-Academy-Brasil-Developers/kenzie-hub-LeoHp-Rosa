import styled from "styled-components";

export const DivLogin = styled.form`
  height: 502px;
  width: 369px;
  padding: 42px 22px;

  border-radius: 4px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--grey-0);
  @media (max-width: 800px) {
    width: 100%;
    padding: 2rem 0;
    .form {
      width: 100%;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
  div {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    @media (max-width: 800px) {
      width: 95%;
    }
  }

  p {
    font-size: 12px;
    font-weight: 400;
  }
  .btnGrey {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    @media (max-width: 800px) {
      width: 95%;
    }
  }
`;
