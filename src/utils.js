import { validation } from "./validation";

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
