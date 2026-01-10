# 🟡🔴 **Connect Four — Interview Problem Statement**

## 🎯 Problem Summary

Build a **two-player Connect Four game** where players alternate turns dropping discs into a vertical grid. The first player to connect **four discs in a row** (horizontally, vertically, or diagonally) wins.

---

## 📐 Game Rules (Must Implement)

### 1️⃣ Grid

* Standard grid size: **6 rows × 7 columns**
* Grid is vertical (gravity-based)

---

### 2️⃣ Turn-Based Play

* Two players:

  * Player 1 → 🔴 (Red)
  * Player 2 → 🟡 (Yellow)
* Players **alternate turns**
* Player 1 always starts

---

### 3️⃣ Disc Drop Behavior (IMPORTANT)

* Player clicks on a **column**
* Disc falls to the **lowest empty cell** in that column
* If a column is full → click does nothing

---

### 4️⃣ Win Conditions

After every move, check for **4 consecutive discs**:

* Horizontal
* Vertical
* Diagonal (↘ and ↗)

---

### 5️⃣ Game End

* When a player wins:

  * Show winner message
  * Disable further moves
* If grid fills with no winner → **Draw**

---

## 🧠 State Design Expectations (Very Important)

You are expected to think in terms of:

### Required State

* `board` → 2D array representing grid
* `currentPlayer` → `"R"` or `"Y"`
* `winner` → `null | "R" | "Y"`
* (Optional) `isDraw`

### ❌ What NOT to store

* Derived values like:

  * “Is the column full?”
  * “Winning positions”
    These should be **computed**, not stored.

---

## 🧩 Data Structure Hint

The board should look like this internally:

```js
[
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  ...
]
```

Or with values:

```js
"R" | "Y" | null
```

---

## 🧠 Key Sub-Problems (Think Before Coding)

### 🔹 1. How do you find the lowest empty row in a column?

Hint:

* Start from the **bottom row**
* Move upward until you find `null`

---

### 🔹 2. How do you detect a win?

Hint:

* From the last placed disc
* Check in **4 directions**
* Count consecutive discs of same player

You’ll need directional vectors like:

```txt
→  ←
↓
↘ ↖
↗ ↙
```

---

### 🔹 3. How do you avoid checking the whole board every time?

Hint:

* Only check from the **last move**

---

## 🧪 Required Test Cases (Must Pass)

### ✅ Case 1: Vertical Win

* Same column, 4 stacked discs

### ✅ Case 2: Horizontal Win

* 4 discs in adjacent columns

### ✅ Case 3: Diagonal Win

* Both diagonal directions

### ❌ Case 4: Full Column

* Clicking does nothing

### ❌ Case 5: Draw

* Board full, no winner

---

## 🎨 UI Expectations

* Grid visible with empty cells
* Discs visually distinct by color
* Clickable columns (not individual cells)
* Clear turn indicator
* Winner message displayed

---

## ⚙️ Technical Constraints

* React functional components
* No game libraries
* No canvas (DOM only)
* No mutation of state
* Clean separation of logic & UI
