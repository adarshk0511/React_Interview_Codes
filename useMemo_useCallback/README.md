## 🧠 Memoized Expensive Component — React Interview Problem

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** Performance · Memoization · React Hooks

---

## 🎯 Problem Statement

Build a React component that renders an **expensive computation or heavy UI**, and optimize it using **`useMemo`** and **`useCallback`** so that unnecessary recalculations and re-renders are avoided.

This pattern is commonly used to:

* Optimize expensive calculations
* Prevent unnecessary child re-renders
* Improve performance in large or complex React apps
* Demonstrate correct memoization usage

---

## 🧩 Functional Requirements

### 1. Expensive Computation

* Include a function that is computationally expensive
* The computation should depend on specific inputs
* It should NOT run on every render unnecessarily

---

### 2. Memoization with `useMemo`

* Memoize the result of the expensive computation
* Recompute only when its dependencies change

---

### 3. Stable Callbacks with `useCallback`

* Pass callbacks to child components
* Ensure callback references are stable across renders
* Avoid re-rendering memoized children unnecessarily

---

### 4. Component Re-render Control

* Parent component may re-render for unrelated reasons
* Expensive logic should NOT re-run in those cases

---

### 5. Performance (Bonus)

* Demonstrate the difference with and without memoization
* Avoid over-memoization
* Use memoization only where it provides real benefit

---

## 🧠 Component / API Design

The component should be structured like this:

```js
const result = useMemo(() => expensiveCalculation(value), [value]);

const handleClick = useCallback(() => {
  // logic
}, []);
```

Clear separation between **what is expensive** and **what is memoized**.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Initial Render

**Scenario**

* Component mounts for the first time

**Expected**

* Expensive computation runs once
* Correct result is rendered

---

### ✅ Test Case 2: Unrelated State Update

**Scenario**

* Component state updates that do NOT affect the expensive computation

**Expected**

* Expensive computation does NOT re-run
* UI updates correctly

---

### ✅ Test Case 3: Dependency Change

**Scenario**

* Input to the expensive computation changes

**Expected**

* Expensive computation re-runs
* New result is rendered

---

### ✅ Test Case 4: Memoized Child Component

**Scenario**

* Parent re-renders
* Child component receives memoized callback

**Expected**

* Child does NOT re-render unnecessarily

---

### ❌ Test Case 5: Incorrect Memoization

**Scenario**

* `useMemo` or `useCallback` used incorrectly

**Expected**

* No performance benefit
* Potential stale values or bugs

---

## 🧠 Key Concepts Being Tested

| Concept         | Why                                   |
| --------------- | ------------------------------------- |
| `useMemo`       | Memoize expensive computations        |
| `useCallback`   | Stabilize function references         |
| Re-renders      | Prevent unnecessary updates           |
| Referential eq. | Props comparison in memoized children |
| Performance     | Real-world optimization awareness     |
| Hook deps       | Correct dependency management         |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Using `useMemo` everywhere
❌ Forgetting dependency arrays
❌ Memoizing cheap computations
❌ Creating new objects/functions inline
❌ Assuming memoization always improves performance

---

## 🎨 Example Use Cases

* Large data filtering or sorting
* Chart calculations
* Complex derived state
* Heavy UI trees
* Dashboards with frequent re-renders

---

## ⚙️ Technical Constraints

* React functional components only
* Must use `useMemo` and `useCallback`
* No external libraries
* Correct dependency arrays required
* Clean and readable component design

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct use of `useMemo`
* Correct use of `useCallback`
* Understanding when memoization is needed
* Dependency awareness
* Performance reasoning
* Code clarity and intent
