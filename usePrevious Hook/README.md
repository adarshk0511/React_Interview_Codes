# 💡 **usePrevious Hook — Requirements**

## 🎯 **Problem Statement**

Build a custom React hook called **`usePrevious`** that lets you **access the previous value** of a prop or state variable.

This is useful when you need to:

* Compare current vs previous values
* Detect changes
* Trigger side effects based on transitions

---

## 🧩 **Functional Requirements**

### 1. Hook API

The hook should be used like this:

```js
const prevValue = usePrevious(value);
```

Where:

* `value` can be **any type** (number, string, object, array, etc.)
* `prevValue` is the value from the **previous render**

---

### 2. Behavior Rules

* On the **first render**:

  * `prevValue` should be `undefined`
* On subsequent renders:

  * `prevValue` should hold the **value from the last render**
* Updating the value should:

  * Update `prevValue` on the **next render**, not immediately

---

### 3. Constraints

* ❌ Do NOT store previous value in `useState`
* ✅ Must use `useRef`
* ✅ Must use `useEffect`
* ❌ No external libraries

---

## 🧠 **Key Concept (Very Important)**

> `useRef` **persists values across renders**
> BUT
> updating `.current` **does NOT cause a re-render**

This makes it perfect for tracking previous values.

---

## 🪜 **Step-by-Step Hints (No Full Code Yet)**

### 🔹 Step 1: Create the hook

Create a function:

```js
function usePrevious(value) {
  // logic here
}
```

---

### 🔹 Step 2: Store something that survives renders

Ask yourself:

* What React hook stores values **without triggering re-renders**?

💡 Hint: `useRef`

---

### 🔹 Step 3: Update the ref *after render*

You must:

* Return the **old value**
* Then update the ref to the **current value**

💡 Hint: `useEffect` runs **after render**

---

### 🔹 Step 4: Return the previous value

The hook should:

* Return what was stored *before* the current render

