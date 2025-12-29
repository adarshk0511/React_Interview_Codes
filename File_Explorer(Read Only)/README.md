# 📁 **File Explorer — React Interview Problem**

## 🎯 **Problem Statement**

Build a **File Explorer component** that displays files and folders in a **tree-like hierarchical structure**, allowing users to expand and collapse directories.

---

## 🧩 **Functional Requirements**

### 1. Tree Structure

* Display a nested tree of:

  * **Folders (directories)**
  * **Files**
* Folders can contain:

  * Files
  * Other folders (recursive nesting)

---

### 2. Expand / Collapse Behavior

* Clicking a **folder**:

  * Toggles between expanded and collapsed states
* Clicking a **file**:

  * Does nothing (or logs selection)

---

### 3. Default State

* Root level should be visible by default
* All folders should start **collapsed** (unless specified otherwise)

---

### 4. Recursive Rendering

* The component must support **arbitrary depth**
* Tree should render correctly no matter how deeply nested the structure is

---

## 🧠 **Data Requirements (Input Format)**

The File Explorer should accept data like:

```js
{
  id: 1,
  name: "root",
  type: "folder",
  children: [
    {
      id: 2,
      name: "src",
      type: "folder",
      children: [
        {
          id: 3,
          name: "index.js",
          type: "file"
        }
      ]
    },
    {
      id: 4,
      name: "package.json",
      type: "file"
    }
  ]
}
```

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Input**

* Tree with folders and files

**Expected**

* Root items visible
* Folders collapsed
* Files shown as leaf nodes

---

### ✅ **Test Case 2: Expand Folder**

**Action**

* Click on a folder

**Expected**

* Folder expands
* Child items become visible

---

### ✅ **Test Case 3: Collapse Folder**

**Action**

* Click expanded folder again

**Expected**

* Folder collapses
* Child items hidden

---

### ✅ **Test Case 4: Deep Nesting**

**Input**

* Folder structure 4–5 levels deep

**Expected**

* Explorer renders correctly
* No crashes or layout issues

---

### ❌ **Test Case 5: Empty Folder**

**Input**

```js
{
  name: "empty-folder",
  type: "folder",
  children: []
}
```

**Expected**

* Folder toggles open
* Shows nothing or “Empty” placeholder

---

### ❌ **Test Case 6: Invalid Data**

**Input**

```js
{ name: "broken", type: "folder" }
```

**Expected**

* App does not crash
* Folder renders safely with no children

---

## 🎨 **UI Requirements**

* Indentation to indicate depth
* Folder icon different from file icon
* Expand/collapse indicator (▶ / ▼ or + / −)
* Cursor pointer on clickable items
* Responsive layout

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* No external UI libraries
* No direct DOM manipulation
* Recursive component usage is expected
* Use `key` properly for each node

