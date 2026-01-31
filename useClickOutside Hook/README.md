## 🖱️ useClickOutside Hook — React Interview Problem

**Difficulty:** ⭐⭐☆☆☆ (Easy → Medium)
**Category:** Custom Hooks · Events · Refs · DOM Interaction

---

## 🎯 Problem Statement

Build a reusable **`useClickOutside`** custom hook that detects when a user clicks **outside** a specified DOM element and triggers a callback.

This hook is commonly used to:

* Close modals
* Close dropdowns
* Dismiss popovers / tooltips
* Handle focus loss cleanly

---

## 🧩 Functional Requirements

### 1. Hook Inputs

The hook should accept:

* `ref` → React ref pointing to a DOM element
* `handler` → callback function to execute on outside click

```js
useClickOutside(ref, handler);
```

---

### 2. Outside Click Detection

* Detect **mouse clicks** outside the referenced element
* Clicking **inside** the element should NOT trigger the handler
* Clicking **anywhere else in the document** SHOULD trigger the handler

---

### 3. Event Management

* Attach event listeners when the component mounts
* Clean up event listeners when the component unmounts
* Avoid memory leaks

---

### 4. Ref Safety

* Must safely handle cases where:

  * `ref.current` is `null`
  * DOM is not yet mounted

---

### 5. Performance (Bonus)

* Avoid unnecessary re-renders
* Ensure handler reference is stable
* Do not attach listeners multiple times

---

## 🧠 Hook API Design

The hook should be used like this:

```js
const ref = useRef(null);

useClickOutside(ref, () => {
  setOpen(false);
});
```

Simple, declarative, and reusable.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Click Outside

**Scenario**

* User clicks anywhere outside the referenced element

**Expected**

* `handler` function is called

---

### ✅ Test Case 2: Click Inside

**Scenario**

* User clicks inside the referenced element

**Expected**

* `handler` is NOT called

---

### ✅ Test Case 3: Component Unmount

**Scenario**

* Component using `useClickOutside` unmounts

**Expected**

* Event listeners are removed
* No memory leaks

---

### ✅ Test Case 4: Null Ref

**Scenario**

* `ref.current === null`

**Expected**

* No runtime errors
* Handler is not triggered

---

### ❌ Test Case 5: Multiple Renders

**Scenario**

* Component re-renders multiple times

**Expected**

* Event listener is not duplicated
* Handler still works correctly

---

## 🧠 Key Concepts Being Tested

| Concept        | Why                         |
| -------------- | --------------------------- |
| `useEffect`    | Attach / clean up listeners |
| `useRef`       | Access DOM elements         |
| Event bubbling | Detect global clicks        |
| Closures       | Correct handler execution   |
| Custom Hooks   | Reusability & abstraction   |
| Cleanup logic  | Prevent memory leaks        |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Forgetting to remove event listeners
❌ Not checking `ref.current` existence
❌ Triggering handler on inside clicks
❌ Re-attaching listeners on every render
❌ Using inline handlers without dependency control

---

## 🎨 Example Use Cases

* Dropdown close on outside click
* Modal dismissal
* Sidebar collapse
* Tooltip auto-close
* Context menu dismissal

---

## ⚙️ Technical Constraints

* React functional components only
* No external libraries
* Must use `useEffect`
* Must use `useRef`
* No direct DOM queries (`querySelector`)
* Clean and reusable hook design

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct outside-click detection logic
* Proper event listener cleanup
* Safe DOM interaction
* Hook reusability
* Edge-case handling
* Code clarity and intent
