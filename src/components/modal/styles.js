import styled from "styled-components";

export const DivModalAdd = styled.form`
  height: 342px;
  width: 369px;
  background-color: var(--grey-3);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.3rem;
  p {
    color: var(--grey-0);
    font-size: 12px;
  }
  .addTecno {
    height: 48px;
    width: 95%;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    color: var(--grey-0);
    border-radius: 4px;
    padding: 0px 22px;
  }

  .newTecnoTop {
    height: 50px;
    width: 100%;
    padding: 1rem;
    justify-content: space-between;
    background-color: var(--grey-2);
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: 700;
      color: var(--grey-0);
    }
    button {
      font-size: 16px;
      font-weight: 600;
      color: var(--grey-1);
      border: 1px solid transparent;
      background-color: transparent;
      border-radius: 50%;
      padding: 0.3rem;
      :hover {
        cursor: pointer;
        color: var(--grey-0);
      }
    }
  }
  .newTecno {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.8rem;
    span {
      font-size: 12px;
      color: var(--grey-0);
    }
    input,
    select {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 16px;
      gap: 10px;
      background-color: var(--grey-2);
      color: var(--grey-0);
      border: 1px var(--grey-2);
      :focus {
        border: 1px solid var(--grey-0);
      }
    }
  }
`;

export const DivModalEdit = styled.form`
  height: 342px;
  width: 369px;
  background-color: var(--grey-3);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  p {
    color: var(--grey-0);
    font-size: 12px;
  }
  .newTecnoTop {
    height: 50px;
    width: 100%;
    padding: 1rem;
    justify-content: space-between;
    background-color: var(--grey-2);
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: 700;
      color: var(--grey-0);
    }
    button {
      font-size: 16px;
      font-weight: 600;
      color: var(--grey-1);
      border: transparent;
      background-color: transparent;
      :hover {
        cursor: pointer;
        color: var(--grey-0);
      }
    }
  }
  .newTecno {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    span {
      font-size: 12px;
      color: var(--grey-0);
    }
    input,
    select {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 16px;
      gap: 10px;
      background-color: var(--grey-2);
      color: var(--grey-0);
      border: 1px var(--grey-2);
      :focus {
        border: 1px solid var(--grey-0);
      }
    }
  }
  .btnDiv {
    display: flex;
    gap: 1rem;
    .save {
      height: 48px;
      width: 204px;
      background-color: var(--color-primary);
      border: 2px solid var(--color-primary);
      color: var(--grey-0);
      border-radius: 4px;
      padding: 0px 22px;
      :hover {
        cursor: pointer;
        border: 2px solid var(--grey-0);
        font-weight: 700;
      }
    }
    .delete {
      height: 48px;
      width: 98px;
      background-color: var(--grey-1);
      border: var(--grey-1);
      color: var(--grey-0);
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      :hover {
        cursor: pointer;
        border: 2px solid var(--grey-0);
        font-weight: 700;
      }
    }
  }
`;
