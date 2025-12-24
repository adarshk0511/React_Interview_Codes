# 🧮 **Generate Table — React Interview Problem**

## 🎯 **Problem Statement**

Build a React component that dynamically generates a **table of numbers** based on user-provided **row** and **column** inputs.

---

## 🧩 **Functional Requirements**

### 1. Inputs

The UI must contain:

* An input field for **number of rows**
* An input field for **number of columns**
* A **Generate** button

---

### 2. Table Generation

When the user clicks **Generate**:

* A table should be rendered with:

  * Exactly **R rows**
  * Exactly **C columns**
* Each cell should contain a number.

---

### 3. Numbering Rules

* Table values must start from **1**
* Values increase **left to right**, **top to bottom**

Example (rows = 2, columns = 3):

```
1  2  3
4  5  6
```

---

### 4. Validation Rules

* Rows and columns must be:

  * Positive integers
  * Greater than 0
* If inputs are invalid:

  * Show an error message
  * Do not render the table

---

### 5. Re-rendering Behavior

* Clicking **Generate** again should:

  * Clear the previous table
  * Generate a new one based on latest inputs

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1**

**Input**

```
Rows = 3
Columns = 3
```

**Output**

```
1  2  3
4  5  6
7  8  9
```

---

### ✅ **Test Case 2**

**Input**

```
Rows = 1
Columns = 5
```

**Output**

```
1  2  3  4  5
```

---

### ✅ **Test Case 3**

**Input**

```
Rows = 4
Columns = 1
```

**Output**

```
1
2
3
4
```

---

### ❌ **Test Case 4 (Invalid Input)**

**Input**

```
Rows = 0
Columns = 5
```

**Expected Behavior**

* Show error: **"Rows and columns must be greater than 0"**
* No table rendered

---

### ❌ **Test Case 5 (Invalid Input)**

**Input**

```
Rows = -2
Columns = 3
```

**Expected Behavior**

* Show error message
* No table rendered

---

### ❌ **Test Case 6 (Non-numeric Input)**

**Input**

```
Rows = "abc"
Columns = 3
```

**Expected Behavior**

* Show error message
* No table rendered

---

## 🎨 **UI Requirements**

* Table should be clearly visible and readable
* Each cell should have:

  * Border
  * Padding
  * Center-aligned content
* Error messages should be visually distinct

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* No external libraries
* Controlled inputs preferred
