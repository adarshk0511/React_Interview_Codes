## 📜 Virtualized List — React Interview Problem

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** Performance · Lists · DOM Optimization · React Hooks

---

## 🎯 Problem Statement

Build a **Virtualized List** (also known as *windowed list*) that efficiently renders **large datasets** by only mounting the items that are visible in the viewport instead of rendering the entire list.

This technique is commonly used to:

* Render lists with thousands of items
* Improve scroll performance
* Reduce DOM node count
* Avoid UI jank and memory issues

---

## 🧩 Functional Requirements

### 1. List Inputs

The virtualized list should accept:

* `items` → array of data
* `itemHeight` → fixed height of each row (number)
* `height` → height of the scroll container (number)
* `renderItem` → function to render an item

```js
<VirtualizedList
  items={items}
  itemHeight={40}
  height={400}
  renderItem={(item) => <div>{item}</div>}
/>
```

---

### 2. Visible Window Rendering

* Only render items that are currently visible in the viewport
* Add a small buffer (overscan) for smoother scrolling
* Do NOT render all items at once

---

### 3. Scroll Handling

* Track the scroll position
* Calculate which items should be visible based on scroll offset
* Update rendered items on scroll

---

### 4. Layout Preservation

* Total scroll height must represent the full list
* Non-rendered items should still contribute to scroll space
* Use spacer elements or transform positioning

---

### 5. Performance (Bonus)

* Minimize re-renders
* Avoid layout thrashing
* Efficient calculations during scroll

---

## 🧠 Component / API Design

The virtualized list should be used like this:

```js
<VirtualizedList
  items={data}
  itemHeight={50}
  height={500}
  renderItem={(item, index) => (
    <div>{index} - {item}</div>
  )}
/>
```

Declarative, reusable, and performance-focused.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Small List

**Scenario**

* List has fewer items than visible capacity

**Expected**

* All items render normally
* No visual glitches

---

### ✅ Test Case 2: Large List

**Scenario**

* List contains 10,000+ items

**Expected**

* Only visible items are mounted
* Smooth scrolling
* No browser lag

---

### ✅ Test Case 3: Scroll Down

**Scenario**

* User scrolls down the list

**Expected**

* Items update correctly
* No empty gaps
* No item overlap

---

### ✅ Test Case 4: Scroll to Bottom

**Scenario**

* User scrolls to the end of the list

**Expected**

* Last items render correctly
* Scroll height matches full list size

---

### ❌ Test Case 5: Excessive Re-renders

**Scenario**

* User scrolls continuously

**Expected**

* Minimal re-renders
* No performance degradation

---

## 🧠 Key Concepts Being Tested

| Concept            | Why                         |
| ------------------ | --------------------------- |
| Virtualization     | Reduce DOM nodes            |
| Scroll position    | Calculate visible window    |
| Fixed item height  | Predictable layout math     |
| Performance tuning | Smooth scrolling            |
| React rendering    | Efficient component updates |
| Windowing          | Render only what’s needed   |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Rendering the full list
❌ Updating state on every pixel scroll
❌ Incorrect visible range calculations
❌ Forgetting total height spacer
❌ Causing layout reflows on scroll

---

## 🎨 Example Use Cases

* Chat message lists
* Activity feeds
* Log viewers
* Large tables
* Search result lists

---

## ⚙️ Technical Constraints

* React functional components only
* No external virtualization libraries
* Must handle large lists efficiently
* Must use scroll container logic
* Clean and reusable component design

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct virtualization logic
* Scroll math correctness
* DOM efficiency
* Smooth user experience
* Code clarity and structure
* Performance awareness
