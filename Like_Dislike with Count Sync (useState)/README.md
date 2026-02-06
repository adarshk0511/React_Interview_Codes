## 👍👎 Like / Dislike with Count Sync — React Interview Problem

**Difficulty:** ⭐⭐☆☆☆ (Easy → Medium)
**Category:** State Management · UI Sync · React Hooks

---

## 🎯 Problem Statement

Build a **Like / Dislike system** for a post or comment where the UI state and counts stay **perfectly synchronized** with user actions.

The system should ensure:

* Correct count updates
* Mutual exclusivity between like and dislike
* Clean, predictable state transitions

This pattern is commonly used in:

* Social media posts
* Comment systems
* Review platforms
* Content voting systems

---

## 🧩 Functional Requirements

### 1. Initial State

Each item should have:

* `likes` → number
* `dislikes` → number
* `userReaction` → `"like" | "dislike" | null`

Example:

```js
{
  likes: 10,
  dislikes: 2,
  userReaction: null
}
```

---

### 2. Like Action

When user clicks **Like**:

* If no previous reaction:

  * Increment `likes`
  * Set `userReaction = "like"`
* If previously disliked:

  * Decrement `dislikes`
  * Increment `likes`
  * Update `userReaction`
* If already liked:

  * Remove like (toggle off)
  * Decrement `likes`
  * Set `userReaction = null`

---

### 3. Dislike Action

When user clicks **Dislike**:

* If no previous reaction:

  * Increment `dislikes`
  * Set `userReaction = "dislike"`
* If previously liked:

  * Decrement `likes`
  * Increment `dislikes`
  * Update `userReaction`
* If already disliked:

  * Remove dislike (toggle off)
  * Decrement `dislikes`
  * Set `userReaction = null`

---

### 4. Count Synchronization

* Likes and dislikes must always stay accurate
* No double increments
* No negative counts

---

### 5. Performance (Bonus)

* Avoid redundant state
* Prevent inconsistent UI states
* Clean update logic

---

## 🧠 Component / State Design

The state should be managed like this:

```js
const [reaction, setReaction] = useState({
  likes: 0,
  dislikes: 0,
  userReaction: null
});
```

Single source of truth.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Initial Like

**Scenario**

* User clicks Like with no prior reaction

**Expected**

* Likes increment by 1
* `userReaction === "like"`

---

### ✅ Test Case 2: Switch Like → Dislike

**Scenario**

* User clicks Dislike after liking

**Expected**

* Likes decrement by 1
* Dislikes increment by 1
* `userReaction === "dislike"`

---

### ✅ Test Case 3: Toggle Like Off

**Scenario**

* User clicks Like again after liking

**Expected**

* Likes decrement by 1
* `userReaction === null`

---

### ✅ Test Case 4: Toggle Dislike Off

**Scenario**

* User clicks Dislike again after disliking

**Expected**

* Dislikes decrement by 1
* `userReaction === null`

---

### ❌ Test Case 5: Invalid Counts

**Scenario**

* Multiple rapid clicks

**Expected**

* Counts never go below zero
* State remains consistent

---

## 🧠 Key Concepts Being Tested

| Concept           | Why                           |
| ----------------- | ----------------------------- |
| State design      | Single source of truth        |
| UI consistency    | Correct count synchronization |
| Conditional logic | Accurate transitions          |
| React hooks       | Clean state updates           |
| User interaction  | Real-world behavior modeling  |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Maintaining separate booleans for like & dislike
❌ Allowing both like and dislike at once
❌ Forgetting to decrement previous reaction
❌ Letting counts go negative
❌ Overcomplicating state

---

## 🎨 Example Use Cases

* Post reactions
* Comment voting
* Review thumbs up/down
* Feedback systems
* Poll-like interfaces

---

## ⚙️ Technical Constraints

* React functional components only
* Must use `useState` or `useReducer`
* No external state libraries
* UI must stay in sync with state
* Clean and readable logic

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct state transition logic
* Count synchronization accuracy
* Edge-case handling
* Code clarity
* Real-world applicability
