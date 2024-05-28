import styled from "styled-components";

const InputDiv = styled.div`
  width: 300px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputError = styled.div`
  height: 15px;
  width: 300px;
  font-size: 15px;
  color: red;
`;

export { InputDiv, FormDiv, InputError };
