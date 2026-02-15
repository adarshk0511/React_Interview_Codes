## 🧩 Dashboard Widgets Layout (Draggable) — React Interview Problem

**Difficulty:** ⭐⭐⭐⭐☆ (Medium → Hard)
**Category:** Drag-and-Drop · Layout Management · State Architecture · UI Systems

---

## 🎯 Problem Statement

Build a **Dashboard Layout System** where users can:

* Drag widgets
* Reorder them
* Maintain layout state
* Persist arrangement (optional bonus)

This mimics real-world dashboards like:

* Admin panels
* Analytics dashboards
* Finance tracking apps
* SaaS monitoring tools

No external drag-and-drop libraries allowed.

---

## 🧩 Functional Requirements

### 1️⃣ Widget Data Structure

Each widget should contain:

```js
{
  id: "w1",
  title: "Revenue",
  content: "Revenue chart..."
}
```

Widgets should be stored in state as an array.

---

### 2️⃣ Drag Behavior

* Each widget must be draggable
* Visual feedback when dragging
* Drop target detection
* Reorder on drop

---

### 3️⃣ Layout Persistence (Bonus)

* Store layout order in `localStorage`
* Restore layout on page reload

---

### 4️⃣ Grid Layout

Widgets should be arranged in:

* 2-column or 3-column responsive grid
* Reorder based on drag
* No absolute positioning hacks

---

### 5️⃣ Performance Considerations

* Avoid unnecessary re-renders
* Maintain stable keys
* Keep drag state separate

---

## 🧠 Component / State Design

Recommended state:

```js
const [widgets, setWidgets] = useState(initialWidgets);
const [draggedIndex, setDraggedIndex] = useState(null);
```

Optional persistence:

```js
useEffect(() => {
  localStorage.setItem("layout", JSON.stringify(widgets));
}, [widgets]);
```

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Initial Render

Widgets render in correct grid order.

---

### ✅ Test Case 2: Drag Start

Dragging a widget sets drag state.

---

### ✅ Test Case 3: Drop

Dropping widget reorders correctly.

---

### ✅ Test Case 4: Multiple Reorders

Repeated drag actions maintain consistent state.

---

### ❌ Test Case 5: Invalid Drop

Dropping outside valid area does not break layout.

---

## 🧠 Key Concepts Being Tested

| Concept                 | Why                  |
| ----------------------- | -------------------- |
| Drag events             | Browser DnD API      |
| Immutable state updates | Reliable UI          |
| Grid layouts            | CSS architecture     |
| Persistence             | Real-world usability |
| Cleanup                 | Stable interactions  |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Mutating widget array
❌ Using index as key incorrectly
❌ Forgetting `preventDefault()` on dragOver
❌ Layout breaking during drag
❌ Storing timer or drag state incorrectly

---

## 🎨 Example Use Cases

* Trading dashboard
* Analytics metrics board
* Customizable SaaS homepage
* Monitoring panels
* Admin control panels

---

## ⚙️ Technical Constraints

* React functional components only
* No drag-and-drop libraries
* Must use native browser DnD
* Layout must be responsive
* Clean and scalable architecture

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Reorder logic correctness
* Layout stability
* State design clarity
* Clean drag handling
* Real-world thinking
