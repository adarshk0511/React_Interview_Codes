# 💾 **useLocalStorage Hook — React Interview Problem**

**Difficulty:** ⭐⭐☆☆☆ (Easy → Medium)
**Category:** Custom Hooks · Browser APIs · State Persistence

---

## 🎯 **Problem Statement**

Build a reusable **`useLocalStorage` custom hook** that behaves like `useState`, but **persists data in `localStorage`** so that values survive page reloads.

The hook should:

* Read initial value from `localStorage`
* Keep React state and `localStorage` in sync
* Work with any JSON-serializable data

---

## 🧩 **Functional Requirements**

### 1. State Initialization

* Accept:

  * `key` → `string` (localStorage key)
  * `initialValue` → any value
* On first render:

  * If value exists in `localStorage` → use it
  * Otherwise → use `initialValue`

---

### 2. State Updates

* Returned setter should:

  * Update React state
  * Update `localStorage` **at the same time**

---

### 3. Persistence

* Reloading the page should:

  * Restore the stored value
  * Not reset to `initialValue`

---

### 4. Data Types

* Must support:

  * strings
  * numbers
  * booleans
  * objects
  * arrays
* Must safely serialize / deserialize data

---

### 5. Error Handling (Bonus)

* Handle:

  * JSON parse errors
  * `localStorage` access errors (private mode, quota exceeded)

---

## 🧠 **Hook API Design**

The hook should be used like this:

```js
const [value, setValue] = useLocalStorage("theme", "light");
```

Just like `useState`, but persistent.

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Initial Value

**Input**

```js
useLocalStorage("count", 0)
```

**Expected**

* Returns `0` if no value exists in `localStorage`

---

### ✅ Test Case 2: Stored Value Exists

**Scenario**

```js
localStorage.setItem("count", "5")
```

**Expected**

* Hook returns `5`
* Ignores `initialValue`

---

### ✅ Test Case 3: Update Value

**Action**

```js
setValue(10)
```

**Expected**

* React state updates to `10`
* `localStorage.getItem("count") === "10"`

---

### ✅ Test Case 4: Objects / Arrays

**Input**

```js
useLocalStorage("user", { name: "Ada" })
```

**Expected**

* Stored using `JSON.stringify`
* Retrieved correctly with `JSON.parse`

---

### ❌ Test Case 5: Invalid JSON

**Scenario**

```js
localStorage.setItem("user", "{bad json}")
```

**Expected**

* Fallback to `initialValue`
* App does not crash

---

## 🧠 **Key Concepts Being Tested**

| Concept             | Why                    |
| ------------------- | ---------------------- |
| `useState`          | Manage state           |
| Lazy initialization | Read from storage once |
| `useEffect`         | Sync updates           |
| `localStorage` API  | Browser persistence    |
| Serialization       | JSON handling          |
| Custom Hooks        | Reusability            |

---

## 🧠 **Common Pitfalls (Interview Traps)**

❌ Reading from `localStorage` on every render
❌ Forgetting `JSON.parse` / `JSON.stringify`
❌ Not handling missing keys
❌ Crashing on malformed data
❌ Treating `localStorage` as synchronous state

---

## 🎨 **Example Use Cases**

* Theme preference (dark / light mode)
* User settings
* Form drafts
* Language selection
* Feature flags

---

## ⚙️ **Technical Constraints**

* React functional components only
* Must behave like `useState`
* No external libraries
* No direct DOM manipulation
* Proper error handling preferred

---

## 🗣️ **Interview Evaluation Criteria**

You’ll be evaluated on:

* Correct state initialization logic
* Clean separation of concerns
* Safe interaction with browser APIs
* Hook reusability
* Edge-case awareness
