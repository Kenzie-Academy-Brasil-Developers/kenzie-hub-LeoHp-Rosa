import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Inter", sans-serif ;
    src: url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
}
:root {
  --color-primary: #ff577f;
  --color-primary-Fo: #ff427f;
  --color-primary-Neg: #59323f;
  --grey-4: #121214;
  --grey-3: #212529;
  --grey-2: #343b41;
  --grey-1: #868e96;
  --grey-0: #f8f9fa;
  --sucess: #3fe864;
  --negative: #e83f5b;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  list-style: none;
}
body {
  background-color: #101010;
  min-width: 100vw;
  width: max-content;
}

.form {
  height: 48px;
  width: 330px;
  padding: 0px 16px;

  border-radius: 4px;
  border: 1px solid var(--grey-2);
  background-color: var(--grey-2);

  color: var(--grey-0);
  @media (max-width: 800px) {
      width: 100%;
    }
}
.btnPink {
  height: 48px;
  width: 324px;
  padding: 0px 22px;

  border-radius: 4px;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);

  color: var(--grey-0);
  @media(max-width:800px){
    width: 95%;
  }
}
.btnGrey {
  height: 48px;
  width: 324px;
  padding: 0px 22px;

  border-radius: 4px;
  border: 1px solid var(--grey-1);
  background-color: var(--grey-1);

  color: var(--grey-0);
}
.divLoginPage {
  color: var(--color-primary);
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
.App {
  background-color: #101010;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.modal-content{
  height: 342px;
  width: 369px;
  background-color: var(--grey-3);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 5px 0px var(--grey-1);

}
.overlay{
}

`;
