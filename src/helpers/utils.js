export const simulateRequest = async (data) => {
  try {
    if (data) {
      const resolve = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            email: "test@gmail.com",
            password: "123Hi+",
            userName: "test",
          });
        }, 5000);
      });
      if (resolve.email === data.email && resolve.password === data.password) {
        return resolve;
      }

      return false;
    }
  } catch (error) {
    // Обробка помилки тут
    console.error("Error during request:", error);
  }
};
