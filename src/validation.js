export const validation = (mockedDataFromServer, data) => {
  if (
    mockedDataFromServer.email === data.email &&
    mockedDataFromServer.password === data.password
  ) {
    // Данные совпадают
    console.log("Data from request matches form data");
    localStorage.setItem("isAuth", true);
    localStorage.setItem("userName", mockedDataFromServer.userName);
    window.location.replace("/people");
  } else {
    // Данные не совпадают
    console.log("Data from request does not match form data");
  }
};
