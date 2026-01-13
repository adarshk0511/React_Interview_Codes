# 🔽 **Dropdown with Search (Keyboard Accessible)**

## 🎯 Problem Statement

Build a **searchable dropdown** component that allows users to:

* Search through options
* Select an option
* Navigate using the keyboard

---

# ✅ Functional Requirements

### 1️⃣ Dropdown Behavior

* Closed by default
* Clicking the input opens the dropdown
* Clicking outside closes the dropdown
* Selecting an option closes the dropdown

---

### 2️⃣ Search

* User can type in the input to filter options
* Filtering is **case-insensitive**
* Results update as the user types

---

### 3️⃣ Option Selection

* Clicking an option selects it
* Selected value appears in the input
* Only **one** option can be selected

---

### 4️⃣ Keyboard Navigation (VERY IMPORTANT)

| Key        | Behavior                  |
| ---------- | ------------------------- |
| Arrow Down | Move highlight down       |
| Arrow Up   | Move highlight up         |
| Enter      | Select highlighted option |
| Escape     | Close dropdown            |
| Tab        | Close dropdown            |

👉 This is what separates **junior** from **strong** candidates.

---

### 5️⃣ Accessibility (Expected)

* Input is focusable
* Options are navigable without mouse
* Highlighted option is visually distinct
* Proper ARIA roles (basic level)

---

# 🧠 State Design (CRITICAL)

You should **not overstore state**.

### Minimum state you need:

```js
isOpen           // boolean
searchTerm       // string
highlightedIndex // number
selectedOption   // object or string
```

Everything else should be **derived**.

---

# 🧩 Core Derived Data

```js
filteredOptions = options.filter(...)
```

⚠️ Do NOT store `filteredOptions` in state.

---

# 🧠 High-Level Interaction Flow

### Opening

```
click input → isOpen = true
```

### Typing

```
type → update searchTerm → derive filteredOptions
```

### Keyboard

```
ArrowDown → highlightedIndex++
ArrowUp → highlightedIndex--
Enter → select filteredOptions[highlightedIndex]
Escape → isOpen = false
```

---

# 🧪 Edge Cases (Interview Traps)

* ArrowDown when at last option
* ArrowUp when at first option
* Enter when no option is highlighted
* No matching search results
* Clicking outside dropdown
* Reset highlight when search changes

---


# 🚀 Implementation Steps (DO THESE IN ORDER)

### Step 1️⃣

Basic dropdown open/close + option click

### Step 2️⃣

Add search filtering

### Step 3️⃣

Add keyboard navigation (ArrowUp / ArrowDown / Enter)

### Step 4️⃣

Handle outside click + Escape key

### Step 5️⃣

Add minimal ARIA roles

---

# 🔥 Common Mistakes (Avoid These)

❌ Storing filtered options in state
❌ Using index as key incorrectly
❌ Not resetting highlight on search
❌ Ignoring Escape / Tab
❌ Overusing `useEffect`
