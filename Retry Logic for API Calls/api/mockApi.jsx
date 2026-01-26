export const mockApiCall = () => {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.6;

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Network error"));
      } else {
        resolve({
          message: "Fetched successfully!",
          time: new Date().toLocaleTimeString(),
        });
      }
    }, 800);
  });
};
