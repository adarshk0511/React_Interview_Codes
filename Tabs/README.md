## 🗂 Tabs Component — Show One Panel at a Time — React Interview Problem

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** State Management · Conditional Rendering · Component Architecture · Accessibility

---

## 🎯 Problem Statement

Build a **Tabs component** that:

* Displays a list of tab headers
* Shows only the content of the active tab
* Allows switching between tabs
* Maintains active state internally

This mimics real-world UI patterns used in:

* Dashboard sections
* Settings panels
* Documentation pages
* Profile pages
* Admin portals

No external UI libraries allowed.

---

## 🧩 Functional Requirements

### 1️⃣ Input Data Structure

Tabs should be configurable via props:

```js
const tabs = [
  { id: "overview", label: "Overview", content: "Overview content" },
  { id: "analytics", label: "Analytics", content: "Analytics content" },
  { id: "settings", label: "Settings", content: "Settings content" },
];
```

---

### 2️⃣ Active Tab State

* Only one tab can be active at a time
* Default active tab should be first tab

---

### 3️⃣ Tab Switching

* Clicking a tab header:

  * Updates active state
  * Renders associated content

---

### 4️⃣ Accessibility

Each tab should include:

```html
role="tab"
role="tabpanel"
aria-selected
```

Keyboard navigation (bonus).

---

### 5️⃣ Performance

* Only active panel should render
* Avoid unnecessary re-renders

---

## 🧠 Recommended State Design

```js
const [activeTab, setActiveTab] = useState(tabs[0].id);
```

Use `id`, not index (more stable).

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Initial Render

First tab content is visible.

---

### ✅ Test Case 2: Click Tab

Clicking second tab shows second panel only.

---

### ✅ Test Case 3: Only One Panel Visible

At any time:

* Only one content panel renders.

---

### ❌ Test Case 4: Invalid Tab

If tab id doesn’t exist:

* Fallback safely.

---

### ❌ Test Case 5: Re-render Stability

Switching tabs should not break state.

---

## 🧠 Key Concepts Being Tested

| Concept               | Why              |
| --------------------- | ---------------- |
| useState              | Track active tab |
| Conditional rendering | Show one panel   |
| Mapping lists         | Render tabs      |
| Keys                  | Stable rendering |
| Accessibility roles   | UI correctness   |
| Component design      | Reusability      |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Using index as key
❌ Mutating tabs array
❌ Rendering all panels and hiding with CSS
❌ Forgetting accessibility roles
❌ Storing whole tab object in state

---

## 🎨 Example Use Cases

* Account Settings page
* SaaS Dashboard sections
* Analytics panels
* User profile tabs
* Admin configuration panels

---

## ⚙️ Technical Constraints

* React functional components only
* No external UI libraries
* Must be reusable
* Clean separation of header and panel
* Proper accessibility

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Clean state design
* Conditional rendering logic
* Reusability
* Accessibility awareness
* Edge-case handling
* Code clarity
