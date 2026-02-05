## 💬 Comment System — Nested Replies (React Interview Problem)

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** State Management · Recursive Rendering · Data Structures · React Components

---

## 🎯 Problem Statement

Build a **comment system** that supports **nested replies**, similar to what you see on Reddit, YouTube, or blog platforms.

Each comment should be able to:

* Display its content
* Have replies
* Allow replies to replies (nested indefinitely)

The system should render comments efficiently and maintain a clear parent-child structure.

---

## 🧩 Functional Requirements

### 1. Comment Data Structure

Each comment should contain:

* `id` → unique identifier
* `text` → comment content
* `replies` → array of child comments

Example:

```js
{
  id: 1,
  text: "This is a comment",
  replies: []
}
```

---

### 2. Rendering Nested Comments

* Render comments recursively
* Each comment can have zero or more replies
* Replies should be visually indented to show hierarchy

---

### 3. Adding a Reply

* User should be able to reply to any comment
* Reply should be added to the correct parent comment
* State should update immutably

---

### 4. Unlimited Nesting

* Replies can have replies of their own
* No hard limit on nesting depth

---

### 5. Performance (Bonus)

* Avoid unnecessary re-renders
* Use keys correctly
* Efficient tree updates

---

## 🧠 Component / API Design

The comment system should be structured like this:

```js
<CommentList comments={comments} />
```

Each comment renders itself and its replies:

```js
<Comment comment={comment} />
```

Recursive and reusable.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Render Root Comments

**Scenario**

* Initial comments array is provided

**Expected**

* All top-level comments render correctly

---

### ✅ Test Case 2: Nested Replies

**Scenario**

* A comment has replies

**Expected**

* Replies render indented under the parent comment

---

### ✅ Test Case 3: Add Reply

**Scenario**

* User adds a reply to a comment

**Expected**

* Reply appears under the correct parent
* UI updates immediately

---

### ✅ Test Case 4: Deep Nesting

**Scenario**

* Replies nested 3+ levels deep

**Expected**

* Correct rendering with proper hierarchy

---

### ❌ Test Case 5: State Mutation

**Scenario**

* Reply is added by mutating state directly

**Expected**

* This should be avoided
* State must update immutably

---

## 🧠 Key Concepts Being Tested

| Concept             | Why                          |
| ------------------- | ---------------------------- |
| Recursive rendering | Handle nested structures     |
| Tree data structure | Parent–child relationships   |
| State immutability  | Predictable updates          |
| Component design    | Reusability and clarity      |
| Keys in lists       | Efficient reconciliation     |
| Performance         | Avoid unnecessary re-renders |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Forgetting to render replies recursively
❌ Mutating nested state directly
❌ Incorrect key usage
❌ Hard-coding nesting levels
❌ Mixing UI logic with state updates

---

## 🎨 Example Use Cases

* Blog comment sections
* Discussion forums
* Product reviews
* Social media threads
* Q&A platforms

---

## ⚙️ Technical Constraints

* React functional components only
* No external state libraries
* Must support deep nesting
* State updates must be immutable
* Clean and readable component structure

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct recursive rendering
* Clean state update logic
* Tree traversal understanding
* Component decomposition
* Code readability
* Real-world applicability
