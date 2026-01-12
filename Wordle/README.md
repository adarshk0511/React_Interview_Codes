# 🟩 **Wordle — Word Guessing Game**

## 🎯 Problem Statement

Build a simplified **Wordle-like game** where a user guesses a hidden word within a limited number of attempts.

This problem tests:

* State management
* Controlled inputs
* Game logic
* Conditional rendering
* Edge-case handling

---

## ✅ Core Requirements

### 1️⃣ Target Word

* A fixed word (e.g. `"REACT"`) **or**
* Randomly selected from a predefined list
* Length is fixed (commonly **5 letters**)

---

### 2️⃣ Guess Attempts

* User gets **6 attempts**
* Each guess must be:

  * Same length as target word
  * Alphabetic only (A–Z)

---

### 3️⃣ Guess Feedback (CORE LOGIC)

For each letter in a guess:

| Condition                         | Color     |
| --------------------------------- | --------- |
| Letter correct & correct position | 🟩 Green  |
| Letter exists but wrong position  | 🟨 Yellow |
| Letter not in word                | ⬜ Gray    |

⚠️ **Duplicate letters must be handled correctly** (this is important).

---

### 4️⃣ Input Method

* Either:

  * Single text input per row
  * On-screen keyboard (optional)
* Pressing **Enter** submits a guess

---

### 5️⃣ Game End Conditions

#### 🎉 Win

* Guess exactly matches the word

#### ❌ Lose

* All attempts used without guessing the word

After game ends:

* Disable input
* Show result message

### Minimum state you’ll need:

* `guesses` → array of past guesses
* `currentGuess` → string user is typing
* `currentRow` → which attempt user is on
* `gameStatus` → "playing" | "won" | "lost"

❌ Do NOT store derived data like colors in state if it can be computed.

---

## 🧩 Grid Layout Requirements

* 6 rows × N columns (N = word length)
* Each row shows:

  * Letters entered
  * Background color after submission
* Empty rows show blank tiles

## ⚠️ Common Edge Cases (INTERVIEW TRAPS)

* Guess shorter than word length
* Guess contains non-letters
* Duplicate letters (e.g. guessing `LEVEL`)
* Pressing Enter when input is incomplete
* Guessing after game ends

---

## 🧪 Test Cases You Should Pass

### ✅ Case 1: Exact Match

Target: `REACT`
Guess: `REACT` → All 🟩

---

### ✅ Case 2: Partial Match

Target: `REACT`
Guess: `TRACE`

* T → 🟨
* R → 🟨
* A → 🟩
* C → 🟩
* E → 🟨

---

### ✅ Case 3: Duplicate Letters

Target: `APPLE`
Guess: `ALLEY`

Correct handling is expected.
