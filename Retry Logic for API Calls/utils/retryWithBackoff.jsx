export const retryWithBackoff = async (
  apiFn,
  maxRetries = 4,
  baseDelay = 1000,
  onAttempt
) => {
  let attempt = 0;

  while (attempt <= maxRetries) {
    try {
      console.log(`Attempt ${attempt + 1}`);
      onAttempt?.(attempt + 1);
      const result = await apiFn();
      return result;
    } catch (error) {
      if (attempt == maxRetries) {
        throw error;
      }

      const delay = baseDelay * Math.pow(2, attempt);
      console.log(`Retrying in ${delay}ms...`);

      await new Promise((res) => setTimeout(res, delay));
      attempt++;
    }
  }
};
