import styled from "styled-components";

export const RegisterScreen = () => {
  return <AccountBackground />;
};

const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
