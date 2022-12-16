import styled from "styled-components";

export const UlTech = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    height: 49px;
    width: 100%;
    border-radius: 4px;
    background-color: var(--grey-4);
    color: var(--grey-0);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-top: 1rem;
    :hover {
      background-color: var(--grey-2);
      cursor: pointer;
      transform: scale(1.02);
    }
    h2 {
      font-size: 14px;
      font-weight: 700;
    }
    h3 {
      font-size: 12px;
      font-weight: 400;
    }
  }
  .noTech {
    width: 85%;
    min-height: 50%;
    color: var(--grey-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      font-size: 26px;
      font-weight: 400;
    }
    strong {
      font-size: 32px;
      font-weight: 400;
    }
    button {
      padding: 0.5rem;
      background-color: transparent;
      border: 2px solid var(--grey-0);
      color: var(--grey-0);
      border-radius: 0.5rem;
      font-weight: 600;
      :hover {
        background-color: var(--grey-0);
        color: var(--grey-2);
        border: 2px solid var(--grey-2);
        cursor: pointer;
      }
    }
  }
`;
