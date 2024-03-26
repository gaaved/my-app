import { useRequest } from "ahooks";

const validation = (mockedDataFromServer, data) => {
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
export const simulateRequest = async (data) => {
  try {
    const resolve = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          email: "test@gmail.com",
          password: "123Hi+",
          userName: "test",
        });
      }, 5000);
    });
    await validation(resolve, data);
  } catch (error) {
    // Обробка помилки тут
    console.error("Error during request:", error);
  }
};

export const useSimulatedRequest = () => {
  const { run, loading } = useRequest(simulateRequest, {
    manual: true,
  });

  const triggerRequest = (data) => {
    run(data);
  };

  return {
    loading,
    triggerRequest,
  };
};

export async function fetchData(entity) {
  try {
    const response = await fetch(
      `https://ajax.test-danit.com/api/swapi/${entity}`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}
