import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMessage = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  padding: 20px;
`;

export { StyledWrapper, StyledMessage };
