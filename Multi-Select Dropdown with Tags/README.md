🔽 **Multi-Select Dropdown with Tags**

## 🎯 Problem Statement (Interview Version)

Build a **multi-select dropdown** that:

* Allows selecting **multiple options**
* Displays selected items as **tags**
* Allows removing selected items
* Supports **search**
* Supports **keyboard navigation**

---

# ✅ Functional Requirements

### 1️⃣ Selection

* Clicking an option selects it
* Selected options appear as **tags**
* Same option **cannot be selected twice**

---

### 2️⃣ Tags

* Each selected item is shown as a tag
* Each tag has a ❌ remove button
* Clicking ❌ removes the item from selection

---

### 3️⃣ Dropdown Behavior

* Dropdown remains open after selection
* Selected options are **hidden or disabled** in the list

---

### 4️⃣ Search

* Filters options as user types
* Case-insensitive
* Works only on **unselected options**

---

### 5️⃣ Keyboard Support (Expected)

| Key                 | Behavior                         |
| ------------------- | -------------------------------- |
| Backspace           | Remove last tag (if input empty) |
| ArrowUp / ArrowDown | Navigate options                 |
| Enter               | Select highlighted option        |
| Escape              | Close dropdown                   |

---

# 🧠 State Design (MOST IMPORTANT)

### ❌ What NOT to do

* Do NOT store filtered options in state
* Do NOT duplicate option data

---

### ✅ Minimum Required State

```js
const [input, setInput] = useState("");
const [selected, setSelected] = useState([]); // array of strings
const [isOpen, setIsOpen] = useState(false);
const [highlightedIndex, setHighlightedIndex] = useState(-1);
```

Everything else is **derived**.

---

# 🧩 Derived Data (Key Insight)

```js
const filteredOptions = options.filter(
  (opt) =>
    opt.toLowerCase().includes(input.toLowerCase()) &&
    !selected.includes(opt)
);
```

This single line:

* Prevents duplicates
* Keeps dropdown clean
* Makes logic simple


---

# 🧠 Key Edge Cases (Interview Traps)

* Selecting same item twice ❌
* Removing tag while dropdown open
* Backspace removes input vs tag
* Highlight index reset after selection
* No results found state
