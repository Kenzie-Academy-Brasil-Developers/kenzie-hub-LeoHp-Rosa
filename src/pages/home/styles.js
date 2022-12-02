import styled from "styled-components";

export const DivHome = styled.div`
  width: 100%;
  height: 768.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivLogo = styled.div`
  height: 72px;
  background-color: var(--grey-4);
  display: flex;
  width: 63%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
    :hover {
      border: 2px solid var(--grey-0);
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
export const DivInfo = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid var(--grey-3);
  border-bottom: 0.5px solid var(--grey-3);
  color: var(--grey-0);
  h1 {
    font-size: 18px;
    font-weight: 700;
  }
  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
export const DivInProg = styled.div`
  width: 63%;
  display: flex;
  flex-direction: column;
  color: var(--grey-0);
  gap: 2rem;
  margin-top: 2rem;
`;
