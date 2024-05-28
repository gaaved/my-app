import { StyledMessage, StyledWrapper } from "./styles";
const ErrorPage = () => {
  return (
    <StyledWrapper>
      <StyledMessage>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
      </StyledMessage>
    </StyledWrapper>
  );
};

export default ErrorPage;
