## 📱 useMediaQuery Hook — React Interview Problem

**Difficulty:** ⭐⭐☆☆☆ (Easy → Medium)
**Category:** Custom Hooks · Browser APIs · Responsive Design

---

## 🎯 Problem Statement

Build a reusable **`useMediaQuery`** custom hook that allows React components to respond to CSS media queries programmatically.

This hook is commonly used to:

* Build responsive layouts
* Detect screen size changes
* Toggle UI behavior based on device type
* Implement mobile-first designs in JavaScript

---

## 🧩 Functional Requirements

### 1. Hook Inputs

The hook should accept:

* `query` → string (valid CSS media query)

```js
useMediaQuery(query);
```

---

### 2. Media Query Detection

* Evaluate the provided media query using browser APIs
* Return a boolean indicating whether the query currently matches

---

### 3. Reactivity

* Update the returned value whenever the media query match status changes
* Respond to viewport resizing or orientation changes

---

### 4. Browser Compatibility

* Must work using `window.matchMedia`
* Properly handle media query change events

---

### 5. Performance (Bonus)

* Avoid unnecessary re-renders
* Attach listeners only once
* Clean up listeners properly

---

## 🧠 Hook API Design

The hook should be used like this:

```js
const isMobile = useMediaQuery("(max-width: 768px)");
```

Simple, declarative, and responsive.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Initial Match

**Scenario**

* Screen width matches the media query

**Expected**

* Hook returns `true`

---

### ✅ Test Case 2: Initial No Match

**Scenario**

* Screen width does not match the media query

**Expected**

* Hook returns `false`

---

### ✅ Test Case 3: Resize Event

**Scenario**

* User resizes the browser window causing the query to match / unmatch

**Expected**

* Hook updates and re-renders with the new value

---

### ✅ Test Case 4: Component Unmount

**Scenario**

* Component using `useMediaQuery` unmounts

**Expected**

* Media query listeners are removed
* No memory leaks

---

### ❌ Test Case 5: Multiple Renders

**Scenario**

* Component re-renders multiple times

**Expected**

* Listener is not duplicated
* Returned value remains accurate

---

## 🧠 Key Concepts Being Tested

| Concept          | Why                         |
| ---------------- | --------------------------- |
| `useState`       | Store match status          |
| `useEffect`      | Attach / clean up listeners |
| Browser APIs     | `window.matchMedia`         |
| Event listeners  | Media query change handling |
| Custom Hooks     | Reusability & abstraction   |
| Responsive logic | JS-driven responsiveness    |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Reading `window.matchMedia` on every render
❌ Forgetting to clean up listeners
❌ Using deprecated `addListener` incorrectly
❌ Not handling query changes
❌ Breaking SSR compatibility

---

## 🎨 Example Use Cases

* Mobile vs desktop layout switching
* Conditional rendering for small screens
* Adaptive navigation menus
* Device-specific UX behavior
* Feature toggles based on viewport

---

## ⚙️ Technical Constraints

* React functional components only
* No external libraries
* Must use `useEffect`
* Must use browser media query APIs
* Clean and reusable hook design

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct use of `matchMedia`
* Responsive state updates
* Proper cleanup of listeners
* Hook reusability
* Edge-case handling
* Code clarity and intent
