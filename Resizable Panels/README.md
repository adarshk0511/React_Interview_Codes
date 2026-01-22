# 💡 **Resizable Panels — Requirements**

## 🎯 **Problem Statement**

Build a **resizable split-panel layout** where the user can **drag a divider** to resize adjacent panels.

This problem tests:

* Mouse event handling
* DOM measurements
* Controlled layout updates
* Performance awareness

---

## 🧩 **Functional Requirements**

### 1. Layout Structure

* Render **two panels** side-by-side (horizontal split)
* A **resizer handle** sits between the panels
* Default layout:

```
| Panel A |⇔| Panel B |
```

---

### 2. Resizing Behavior

* Clicking and dragging the resizer:

  * Resizes **Panel A’s width**
  * Panel B automatically adjusts (flex-based)
* Resizing should be **real-time** while dragging

---

### 3. Mouse Interaction Rules

* Resizing starts on:

  * `mousedown` on the resizer
* Resizing continues on:

  * `mousemove` (even if cursor leaves resizer)
* Resizing stops on:

  * `mouseup` anywhere on the screen

---

### 4. Width Constraints

* Panel A must have:

  * **Minimum width** (e.g. `150px`)
  * **Maximum width** (e.g. `600px`)
* Dragging beyond limits should be clamped

---

### 5. Interaction Safety

* Dragging should not:

  * Select text
  * Cause layout jumps
* Dragging state must be properly cleaned up on mouse release

---

## 🧠 **State Management Expectations**

You must be able to explain:

* Why width is stored in **state**
* Why dragging status is stored in a **ref**
* Why mouse listeners are attached to `window`

Hints (not solutions):

* Dragging is an **imperative interaction**
* Avoid updating state unnecessarily
* Avoid re-renders on every mouse pixel

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Initial Render

* Panel A has default width (e.g. `300px`)
* Panel B fills remaining space
* Resizer is visible and draggable

---

### ✅ Test Case 2: Drag Right

**Action**

* Drag resizer to the right

**Expected**

* Panel A grows wider
* Panel B shrinks proportionally

---

### ✅ Test Case 3: Drag Left

**Action**

* Drag resizer to the left

**Expected**

* Panel A shrinks
* Panel B grows

---

### ❌ Test Case 4: Drag Without Mouse Down

**Action**

* Move mouse without clicking resizer

**Expected**

* No resizing occurs

---

### ❌ Test Case 5: Release Mouse

**Action**

* Release mouse button

**Expected**

* Resizing stops immediately
* Further mouse movement has no effect

---

### ❌ Test Case 6: Min / Max Width

**Action**

* Drag beyond minimum or maximum width

**Expected**

* Panel width is clamped
* Layout does not break

---

## 🎨 **UI Requirements**

* Resizer should visually indicate drag capability:

  * Cursor: `col-resize`
* Panels should:

  * Stretch full height
  * Resize smoothly
* No layout flicker

---

## ⚙️ **Technical Constraints**

* React functional components
* `useState`, `useEffect`, `useRef`
* No external libraries
* No direct DOM mutation
* Clean up event listeners properly

---

## 🗣️ **Interview Signals This Problem Tests**

A good solution demonstrates:

* Understanding of **mouse event lifecycle**
* Proper use of **refs vs state**
* Knowledge of **DOM coordinate systems**
* Performance-aware React patterns

---

## ⭐ Difficulty Level

**Medium → Hard**
(Strong frontend candidates should handle this)
