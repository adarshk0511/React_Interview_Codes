# ⏱️ **useInterval Hook — React Interview Problem**

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** Custom Hooks · Side Effects · Timers · Closures

---

## 🎯 **Problem Statement**

Build a reusable **`useInterval` custom hook** that provides a **declarative way to use `setInterval`** in React.

The hook should allow components to:

* Run a callback repeatedly at a given interval
* Safely update when the callback or delay changes
* Avoid stale closures and memory leaks

---

## 🧩 **Functional Requirements**

### 1. Interval Execution

The hook should:

* Accept:

  * `callback` → function to execute
  * `delay` → interval duration in milliseconds
* Execute `callback` **every `delay` ms**

---

### 2. Dynamic Control

* If `delay` changes:

  * Old interval must be cleared
  * New interval must start with updated delay
* If `delay` is `null` or `undefined`:

  * Interval must **pause**

---

### 3. Latest Callback Guarantee

* The hook must always call the **latest version** of `callback`
* Must **not** suffer from stale closure issues

---

### 4. Cleanup Behavior

* Interval must be cleared:

  * On component unmount
  * When delay changes
* No orphaned intervals
* No duplicate timers

---

## 🧠 **Hook API Design**

The hook should be used like this:

```js
useInterval(() => {
  setCount((c) => c + 1);
}, 1000);
```

Pause behavior:

```js
useInterval(callback, isRunning ? 1000 : null);
```

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Basic Interval

**Input**

```js
useInterval(callback, 1000);
```

**Expected**

* `callback` runs every 1000ms

---

### ✅ Test Case 2: Callback Update

**Action**

* Callback logic changes (state update, props change)

**Expected**

* Interval continues running
* Always executes **latest callback logic**

---

### ✅ Test Case 3: Pause Interval

**Input**

```js
useInterval(callback, null);
```

**Expected**

* Interval stops running
* No callback execution

---

### ✅ Test Case 4: Delay Change

**Action**

```js
delay changes from 1000 → 500
```

**Expected**

* Old interval cleared
* New interval runs every 500ms

---

### ❌ Test Case 5: Memory Leak (Bug Case)

**Scenario**

* Component unmounts

**Expected**

* Interval cleared
* No state updates after unmount
* No console warnings

---

## 🧠 **Key Concepts Being Tested**

| Concept          | Why it matters                |
| ---------------- | ----------------------------- |
| `useEffect`      | Manage lifecycle of intervals |
| `useRef`         | Avoid stale closures          |
| `setInterval`    | Repeated execution            |
| `clearInterval`  | Cleanup                       |
| Declarative APIs | React-friendly abstraction    |
| Closures         | Correct callback behavior     |

---

## 🧠 **Common Pitfalls (Interview Traps)**

❌ Using `setInterval` directly inside `useEffect` with callback dependency
❌ Recreating interval on every render
❌ Stale state inside interval callback
❌ Forgetting cleanup

---

## 🎨 **Example Use Cases**

* Timers / Stopwatches
* Polling APIs
* Auto-refresh dashboards
* Animations / progress updates
* Game loops

---

## ⚙️ **Technical Constraints**

* React functional components
* Must use `useEffect`
* Must use `useRef`
* No external libraries
* No direct DOM manipulation
* Proper cleanup required

---

## 🗣️ **Interview Evaluation Criteria**

You’ll be judged on:

* Correct handling of stale closures
* Proper cleanup logic
* Declarative design
* Clear separation of concerns
* Understanding of hooks internals
