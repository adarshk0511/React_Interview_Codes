## 🔀 Drag-and-Drop List Reordering — React Interview Problem

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** DOM Events · State Management · UX · React Hooks

---

## 🎯 Problem Statement

Build a **Drag-and-Drop list reordering** feature that allows users to **reorder items in a list** by dragging and dropping them.

This pattern is commonly used in:

* Todo lists
* Playlist reordering
* Kanban boards
* Priority ranking UIs
* Settings / preferences ordering

No external drag-and-drop libraries should be used.

---

## 🧩 Functional Requirements

### 1. List Data

Each list item should have:

* `id` → unique identifier
* `text` → display value

Example:

```js
{
  id: 1,
  text: "Item 1"
}
```

---

### 2. Drag Behavior

* User can drag any list item
* Dragged item should visually indicate it’s being dragged
* Dropping an item should reorder the list

---

### 3. Drop Logic

* Dropping an item on another item swaps/reorders positions
* The list order must update in state
* Reordering must be **immutable**

---

### 4. State Synchronization

* UI should update immediately after drop
* Order should persist across re-renders
* No DOM manipulation outside React state

---

### 5. UX (Bonus)

* Highlight drop target
* Smooth visual feedback
* Prevent invalid drops

---

## 🧠 Component / State Design

State should be structured like this:

```js
const [items, setItems] = useState([]);
const [draggedIndex, setDraggedIndex] = useState(null);
```

Single source of truth for list order.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Initial Render

**Scenario**

* List loads with predefined items

**Expected**

* Items render in correct order

---

### ✅ Test Case 2: Drag Start

**Scenario**

* User starts dragging an item

**Expected**

* Drag state updates correctly
* Visual cue is shown

---

### ✅ Test Case 3: Drop on Another Item

**Scenario**

* User drops item on another item

**Expected**

* Items reorder correctly
* State updates immutably

---

### ✅ Test Case 4: Multiple Reorders

**Scenario**

* User reorders items multiple times

**Expected**

* List remains consistent
* No duplicate or missing items

---

### ❌ Test Case 5: Invalid Drop

**Scenario**

* User drops item outside valid targets

**Expected**

* List remains unchanged

---

## 🧠 Key Concepts Being Tested

| Concept            | Why                       |
| ------------------ | ------------------------- |
| Drag events        | Browser drag-and-drop API |
| State immutability | Predictable reordering    |
| Index tracking     | Correct positioning       |
| UX feedback        | Visual clarity            |
| Event handling     | Precise user interactions |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Mutating the array directly
❌ Using array index as key incorrectly
❌ Forgetting to prevent default on `dragOver`
❌ Losing dragged item reference
❌ Over-engineering with libraries

---

## 🎨 Example Use Cases

* Reordering tasks
* Playlist sorting
* Drag-based ranking
* Form field arrangement
* Dashboard widget ordering

---

## ⚙️ Technical Constraints

* React functional components only
* No external drag-and-drop libraries
* Must use browser drag events
* State updates must be immutable
* Clean and readable code

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct drag-and-drop logic
* State update correctness
* UX considerations
* Code clarity
* Real-world applicability
