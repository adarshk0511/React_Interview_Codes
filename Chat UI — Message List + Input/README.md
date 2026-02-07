## 💬 Chat UI — Message List + Input (React Interview Problem)

**Difficulty:** ⭐⭐☆☆☆ (Easy → Medium)
**Category:** State Management · Controlled Inputs · Lists · UI Rendering

---

## 🎯 Problem Statement

Build a **frontend-only Chat UI** that allows users to:

* View a list of messages
* Type and send new messages
* See messages appear instantly in the chat window

This problem focuses on **UI state management**, **list rendering**, and **controlled inputs**, without any backend or real-time communication.

---

## 🧩 Functional Requirements

### 1. Message Data Structure

Each message should contain:

* `id` → unique identifier
* `text` → message content
* `sender` → `"user"` or `"bot"` (or similar)
* `timestamp` → optional (for display)

Example:

```js
{
  id: 1,
  text: "Hello!",
  sender: "user"
}
```

---

### 2. Message List Rendering

* Render messages in chronological order
* Clearly differentiate between user and other messages
* Use proper keys for list items

---

### 3. Message Input

* Provide an input field for typing messages
* Input should be **controlled**
* Clear input after sending a message

---

### 4. Send Message Action

* User can send a message by:

  * Clicking a send button
  * Pressing Enter (optional bonus)
* New message should append to the message list

---

### 5. UI Synchronization

* Message list should update immediately after sending
* Input state and message list must stay in sync
* No page refreshes

---

## 🧠 Component / State Design

The chat UI should be structured like this:

```js
<Chat />
```

Internal state example:

```js
const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");
```

Single source of truth for chat data.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Initial Render

**Scenario**

* Chat component loads

**Expected**

* Empty message list (or predefined messages)
* Input field is visible

---

### ✅ Test Case 2: Send Message

**Scenario**

* User types a message and sends it

**Expected**

* Message appears in the message list
* Input field clears

---

### ✅ Test Case 3: Multiple Messages

**Scenario**

* User sends multiple messages

**Expected**

* All messages render in correct order
* No message overwrites another

---

### ✅ Test Case 4: Empty Input

**Scenario**

* User tries to send an empty message

**Expected**

* Message is not sent
* UI remains unchanged

---

### ❌ Test Case 5: Incorrect State Handling

**Scenario**

* Messages are mutated directly

**Expected**

* This should be avoided
* State must update immutably

---

## 🧠 Key Concepts Being Tested

| Concept            | Why                          |
| ------------------ | ---------------------------- |
| Controlled inputs  | Reliable input handling      |
| List rendering     | Dynamic UI updates           |
| State immutability | Predictable state changes    |
| Event handling     | User interactions            |
| Component design   | Clean separation of concerns |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Mutating messages array directly
❌ Forgetting `key` in list rendering
❌ Not clearing input after send
❌ Allowing empty messages
❌ Overcomplicating state

---

## 🎨 Example Use Cases

* Messaging apps
* Chatbots UI
* Support chat widgets
* Comment/live chat panels
* Collaboration tools

---

## ⚙️ Technical Constraints

* React functional components only
* No backend or WebSocket logic
* No external UI libraries
* Must use controlled inputs
* Clean and readable component structure

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct state management
* Clean list rendering
* Input control logic
* UI consistency
* Code clarity
* Real-world applicability
