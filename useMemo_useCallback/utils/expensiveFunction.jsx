export function expensiveCalculation(num) {
  console.log("Running expensive calculation...");

  let result = 0;
  for (let i = 0; i < 1_000; i++) {
    result += num;
  }

  return result;
}
