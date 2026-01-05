# 🔁 **Transfer List — React Interview Problem**

## 🎯 **Problem Statement**

Build a **Transfer List component** that allows users to **move items between two lists** (Left ↔ Right) using controls such as buttons or double-click.

This pattern is commonly used in:

* Permission management
* User assignment
* Feature selection
* Role-based access systems

---

## 🧩 **Functional Requirements**

### 1. Two Lists

* Display **two lists side by side**:

  * **Available Items (Left List)**
  * **Selected Items (Right List)**

---

### 2. Item Selection

* Users should be able to **select one or multiple items** from either list
* Selection should be visually indicated (highlighted)

---

### 3. Transfer Actions

Provide controls to:

* **Move selected items from Left → Right**
* **Move selected items from Right → Left**

Optional (bonus):

* Move **all items** at once

---

### 4. Interaction Rules

* Only selected items should be transferred
* Items should **not exist in both lists at the same time**
* Order of items should be preserved unless otherwise specified

---

### 5. Initial State

* Left list starts with a predefined set of items
* Right list starts empty (or with predefined items if specified)

---

## 🧠 **Data Requirements**

Each item can be a simple string or an object:

```js
{
  id: number,
  label: string
}
```

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Expected**

* Left list populated with initial items
* Right list empty
* No items selected

---

### ✅ **Test Case 2: Select Items**

**Action**

* Click on one or more items in the left list

**Expected**

* Items appear selected (highlighted)
* Selection state tracked correctly

---

### ✅ **Test Case 3: Transfer Left → Right**

**Action**

* Select items in left list
* Click “Add” (→)

**Expected**

* Selected items move to right list
* Items removed from left list
* Selection cleared

---

### ✅ **Test Case 4: Transfer Right → Left**

**Action**

* Select items in right list
* Click “Remove” (←)

**Expected**

* Items move back to left list
* Items removed from right list

---

### ❌ **Test Case 5: Transfer with No Selection**

**Action**

* Click transfer button with no selected items

**Expected**

* No change in either list
* No errors

---

### ❌ **Test Case 6: Duplicate Prevention**

**Expected**

* Same item should never appear in both lists simultaneously

---

## 🎨 **UI Requirements**

* Two clearly separated lists
* Transfer buttons centered between lists
* Selected items visually distinct
* Buttons disabled when no valid action is possible
* Responsive layout

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* No external UI libraries
* No direct DOM manipulation
* Proper `key` usage for list items

Whenever you’re ready, say:

👉 **“I’ll implement the Transfer List now”**

I’ll review your approach **step by step**, just like a real frontend interview.
