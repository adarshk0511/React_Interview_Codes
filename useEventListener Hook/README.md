## 🎧 useEventListener Hook — React Interview Problem

**Difficulty:** ⭐⭐☆☆☆ (Easy → Medium)
**Category:** Custom Hooks · Events · Browser APIs · Performance

---

## 🎯 Problem Statement

Build a reusable **`useEventListener`** custom hook that allows React components to declaratively attach event listeners to a target element (window, document, or DOM node) while ensuring proper cleanup and avoiding stale closures.

This hook is commonly used to:

* Listen to window resize events
* Handle keyboard shortcuts
* Detect scroll events
* Power other hooks like `useClickOutside`, `useKeyPress`, etc.

---

## 🧩 Functional Requirements

### 1. Hook Inputs

The hook should accept:

* `eventType` → string (event name, e.g. `"click"`, `"resize"`)
* `handler` → callback function to execute on event
* `element` → target to attach listener to (window / document / DOM element)

```js
useEventListener(eventType, handler, element);
```

---

### 2. Event Handling

* Attach an event listener for the given `eventType`
* Invoke the provided `handler` whenever the event occurs
* Ensure the **latest handler** is always called

---

### 3. Event Management

* Attach event listeners when the component mounts
* Clean up event listeners when the component unmounts
* Avoid memory leaks

---

### 4. Element Safety

* Must safely handle cases where:

  * `element` is `null` or `undefined`
  * `element` does not support `addEventListener`

---

### 5. Performance (Bonus)

* Avoid unnecessary re-renders
* Avoid re-attaching listeners on every render
* Prevent stale closure bugs

---

## 🧠 Hook API Design

The hook should be used like this:

```js
useEventListener("resize", () => {
  console.log("window resized");
}, window);
```

Declarative, reusable, and side-effect safe.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Basic Event Listener

**Scenario**

* User resizes the browser window

**Expected**

* `handler` function is called

---

### ✅ Test Case 2: Handler Update

**Scenario**

* Component re-renders with a new handler function

**Expected**

* Latest handler is executed
* No stale state issues

---

### ✅ Test Case 3: Component Unmount

**Scenario**

* Component using `useEventListener` unmounts

**Expected**

* Event listener is removed
* No memory leaks

---

### ✅ Test Case 4: Invalid Element

**Scenario**

* `element` is `null` or does not support event listeners

**Expected**

* Hook does nothing
* No runtime errors

---

### ❌ Test Case 5: Multiple Renders

**Scenario**

* Component re-renders multiple times

**Expected**

* Event listener is not duplicated
* Handler continues to work correctly

---

## 🧠 Key Concepts Being Tested

| Concept       | Why                                        |
| ------------- | ------------------------------------------ |
| `useEffect`   | Attach / clean up listeners                |
| `useRef`      | Preserve handler across renders            |
| Browser APIs  | `addEventListener` / `removeEventListener` |
| Closures      | Avoid stale handler execution              |
| Custom Hooks  | Reusability & abstraction                  |
| Cleanup logic | Prevent memory leaks                       |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Re-attaching listeners on every render
❌ Forgetting to clean up event listeners
❌ Stale closures due to changing handlers
❌ Not validating target element
❌ Passing inline handlers without stability

---

## 🎨 Example Use Cases

* Window resize tracking
* Keyboard shortcuts (Escape key, Enter key)
* Scroll position tracking
* Mouse movement listeners
* Base hook for other custom hooks

---

## ⚙️ Technical Constraints

* React functional components only
* No external libraries
* Must use `useEffect`
* Must use `useRef`
* Must support different event targets
* Clean and reusable hook design

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct event listener attachment logic
* Proper cleanup implementation
* Stale closure prevention
* Hook reusability
* Edge-case awareness
* Code clarity and intent
