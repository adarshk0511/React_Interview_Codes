# 🧠 **useDebounce Hook — React Interview Problem**

**Difficulty:** ⭐⭐☆☆☆ (Easy → Medium)
**Category:** Custom Hooks · Performance Optimization · Side Effects

---

## 🎯 **Problem Statement**

Build a reusable **`useDebounce` custom hook** that delays updating a value until it stops changing for a specified amount of time.

This is commonly used to:

* Reduce unnecessary API calls
* Improve performance in search inputs
* Avoid reacting to every keystroke

---

## 🧩 **Functional Requirements**

### 1. Debounced Value

The hook should:

* Accept:

  * `value` → any type (string, number, object, etc.)
  * `delay` → debounce duration in milliseconds
* Return:

  * A **debounced version** of the input value

---

### 2. Debounce Behavior

* When `value` changes:

  * Start a timer for `delay` milliseconds
* If `value` changes again **before the delay finishes**:

  * ❌ Cancel the previous timer
  * ⏳ Restart the timer
* Only update the debounced value **after delay completes without interruption**

---

### 3. Cleanup Rules

* Must properly clean up timers:

  * When `value` changes
  * When `delay` changes
  * When the component unmounts

---

## 🧠 **Hook API Design**

The hook should be used like this:

```js
const debouncedValue = useDebounce(value, delay);
```

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Initial Render

**Input**

```js
value = "react"
delay = 500
```

**Expected**

* `debouncedValue === "react"` (after 500ms)

---

### ✅ Test Case 2: Rapid Updates

**Action**

User types quickly:

```text
r → re → rea → reac → react
```

(all within 500ms)

**Expected**

* `debouncedValue` updates **only once**
* Final value: `"react"`

---

### ✅ Test Case 3: Delay Change

**Action**

```js
delay changes from 500 → 1000
```

**Expected**

* Previous timer is cleared
* New debounce timing applies

---

### ❌ Test Case 4: No Cleanup (Bug Case)

**Scenario**

* Component unmounts before delay completes

**Expected**

* No state updates after unmount
* No memory leaks
* No console warnings

---

## 🧠 **Key Concepts Being Tested**

| Concept            | Why it matters            |
| ------------------ | ------------------------- |
| `useEffect`        | Manage side effects       |
| `setTimeout`       | Delay execution           |
| `clearTimeout`     | Cancel stale work         |
| `Dependency Array` | Correct re-execution      |
| Custom Hooks       | Reusability & abstraction |
| Cleanup Functions  | Prevent memory leaks      |

---

> API call fires **only after typing stops** ✅

---

## ⚙️ **Technical Constraints**

* React functional components
* Must use `useEffect`
* Must use `setTimeout / clearTimeout`
* No external libraries (e.g. lodash)
* No direct DOM manipulation
* Hook must be reusable across components

---

## 🗣️ **Interview Evaluation Criteria**

You will be assessed on:

* Correct debounce behavior
* Proper cleanup logic
* Correct dependency management
* Clean, readable abstraction
* Avoiding unnecessary re-renders
