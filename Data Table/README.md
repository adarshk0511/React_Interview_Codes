## 📊 Data Table — Users Table with Pagination — React Interview Problem

**Difficulty:** ⭐⭐⭐⭐☆ (Medium → Hard)
**Category:** State Management · Pagination Logic · List Rendering · Performance · UI Architecture

---

## 🎯 Problem Statement

Build a **Users Data Table** that:

* Displays a list of users
* Supports pagination
* Shows limited rows per page
* Allows navigating between pages

This mimics real-world UI patterns used in:

* Admin dashboards
* CRM systems
* SaaS analytics panels
* User management systems

No external table libraries allowed.

---

## 🧩 Functional Requirements

### 1️⃣ Input Data Structure

You’ll receive a users array:

```js
const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  ...
];
```

---

### 2️⃣ Table Rendering

Display columns:

* ID
* Name
* Email
* Role

---

### 3️⃣ Pagination Logic

* Show only N users per page (e.g., 5 per page)
* Provide:

  * Previous button
  * Next button
  * Page numbers

---

### 4️⃣ Page State

Maintain:

```js
const [currentPage, setCurrentPage] = useState(1);
```

Calculate:

```js
const startIndex = (currentPage - 1) * rowsPerPage;
const paginatedUsers = users.slice(startIndex, startIndex + rowsPerPage);
```

---

### 5️⃣ Edge Case Handling

* Disable "Previous" on first page
* Disable "Next" on last page
* Handle empty user list

---

## 🧠 Recommended State Design

```js
const rowsPerPage = 5;
const totalPages = Math.ceil(users.length / rowsPerPage);
```

Only store:

* `currentPage`

Derive everything else.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Initial Render

Page 1 users are displayed.

---

### ✅ Test Case 2: Next Page

Clicking “Next” shows next set of users.

---

### ✅ Test Case 3: Previous Page

Clicking “Previous” returns to previous page.

---

### ✅ Test Case 4: Boundary Conditions

* On first page → Previous disabled
* On last page → Next disabled

---

### ❌ Test Case 5: Empty Data

If `users.length === 0`:

* Show “No users available.”

---

## 🧠 Key Concepts Being Tested

| Concept               | Why                     |
| --------------------- | ----------------------- |
| useState              | Track current page      |
| Array slicing         | Pagination logic        |
| Derived state         | Avoid redundant state   |
| Conditional rendering | Disable controls        |
| List keys             | Stable rendering        |
| UI state consistency  | Avoid off-by-one errors |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Storing paginated users in state
❌ Off-by-one page calculation errors
❌ Using index as key
❌ Forgetting to reset page when data changes
❌ Not disabling buttons properly

---

## 🎨 Example Use Cases

* Admin user management
* SaaS customer dashboard
* CRM contact list
* Orders list
* Employee directory

---

## ⚙️ Technical Constraints

* React functional components only
* No external table libraries
* Clean pagination logic
* No redundant state
* Accessible controls

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Clean pagination math
* Correct state derivation
* UI boundary handling
* Code clarity
* Scalability thinking
