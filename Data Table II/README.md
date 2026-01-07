# 📊 **Data Table II — Users Table with Sorting**

## 🎯 **Problem Statement**

Build a **Users Data Table component** that displays a list of users and allows **sorting by columns** (ascending / descending).

This task focuses on **state management, derived data, and UI correctness**.

---

## 🧩 **Functional Requirements**

### 1. Data Display

* Display a table with user data
* Each row represents one user
* Each column represents a user attribute

Example user shape:

```js
{
  id: number,
  name: string,
  email: string,
  age: number,
  role: string
}
```

---

### 2. Table Columns

At minimum, include:

* Name
* Email
* Age
* Role

(You may add more if needed.)

---

### 3. Sorting Behavior

* Clicking a column header:

  * Sorts rows by that column
* Sorting toggles between:

  * Ascending
  * Descending
* Clicking a **different column**:

  * Resets sort order to ascending for that column

---

### 4. Visual Sort Indicators

* Display a visual indicator on the active column:

  * ↑ Ascending
  * ↓ Descending
* Only **one column** may be actively sorted at a time

---

### 5. Default State

* Table loads **unsorted**
* No sort indicators visible initially

---

## 🧠 **State Requirements**

You should manage:

* Sort key (column name)
* Sort direction (`asc` / `desc`)

Avoid storing **sorted data** in state if it can be derived.

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Expected**

* Table renders with all users
* Original order preserved
* No sorting indicator shown

---

### ✅ **Test Case 2: Sort Ascending**

**Action**

* Click “Age” header

**Expected**

* Rows sorted by age (ascending)
* Ascending indicator visible on Age column

---

### ✅ **Test Case 3: Sort Descending**

**Action**

* Click “Age” header again

**Expected**

* Rows sorted by age (descending)
* Descending indicator visible

---

### ✅ **Test Case 4: Switch Sort Column**

**Action**

* Click “Name” after sorting Age

**Expected**

* Sort resets to ascending for Name
* Age sort indicator removed

---

### ❌ **Test Case 5: Non-sortable Column**

(If applicable)

**Expected**

* Clicking does nothing
* No errors

---

### ❌ **Test Case 6: Stable Sorting**

**Expected**

* Users with equal values retain relative order (optional but good)

---

## 🎨 **UI Requirements**

* Semantic `<table>` structure:

  * `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
* Clickable headers for sortable columns
* Hover / focus styles on headers
* Responsive layout (horizontal scroll allowed)

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* Sorting must be **pure and deterministic**
* No external table libraries
* No mutation of original data
* Proper `key` usage
w** — logic, state, and edge cases.
