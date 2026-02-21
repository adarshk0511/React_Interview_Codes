## 🚩 Feature Flag System – Toggle Features Dynamically — React Interview Problem

**Difficulty:** ⭐⭐⭐⭐☆ (Medium → Hard)
**Category:** State Management · Architecture · Context API · Conditional Rendering · Scalability

---

## 🎯 Problem Statement

Build a **Feature Flag System** that allows:

* Enabling/disabling features dynamically
* Centralized flag management
* Conditional UI rendering
* Runtime toggling (no reload required)

This mimics real-world feature flag systems used in:

* SaaS rollouts
* A/B testing
* Gradual deployments
* Beta feature releases
* Enterprise product configuration

No external feature flag libraries allowed.

---

## 🧩 Functional Requirements

### 1️⃣ Flag Configuration

Feature flags should be defined centrally:

```js
{
  newDashboard: true,
  betaChat: false,
  advancedAnalytics: true,
}
```

---

### 2️⃣ Global Availability

Flags must be accessible anywhere in the app without prop drilling.

Recommended solution:

* React Context

---

### 3️⃣ Conditional Rendering

Components should be able to do:

```jsx
{isEnabled("newDashboard") && <NewDashboard />}
```

If flag is disabled:

* Component should not render

---

### 4️⃣ Runtime Toggling

Flags should be changeable dynamically:

* Toggle from admin panel
* Update state globally
* UI updates immediately

---

### 5️⃣ Scalability

System should:

* Support many flags
* Be easily extendable
* Allow future integration with remote API

---

## 🧠 Architecture Design

Recommended structure:

```
FeatureFlagProvider
   ↓
useFeatureFlag() hook
   ↓
isEnabled(flagName)
```

State example:

```js
const [flags, setFlags] = useState(initialFlags);
```

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Flag Enabled

If `newDashboard = true`

Expected:

* `<NewDashboard />` renders

---

### ✅ Test Case 2: Flag Disabled

If `betaChat = false`

Expected:

* `<BetaChat />` does NOT render

---

### ✅ Test Case 3: Toggle Runtime

If admin toggles flag:

Expected:

* UI updates immediately

---

### ❌ Test Case 4: Unknown Flag

If flag does not exist:

Expected:

* Return false safely
* No crash

---

### ❌ Test Case 5: Performance

Multiple components using flags should not cause unnecessary re-renders.

---

## 🧠 Key Concepts Being Tested

| Concept               | Why               |
| --------------------- | ----------------- |
| Context API           | Global access     |
| Custom Hooks          | Clean abstraction |
| Conditional rendering | UI control        |
| Centralized state     | Maintainability   |
| Runtime updates       | React reactivity  |
| Architecture thinking | Scalable design   |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Prop drilling flags
❌ Recreating context values unnecessarily
❌ Causing whole app to re-render on toggle
❌ Not handling unknown flags
❌ Hardcoding feature logic inside components

---

## 🎨 Example Use Cases

* Gradual rollout of new dashboard
* Beta chat feature
* Enterprise-only analytics
* Dark mode preview
* Experimental UI features

---

## ⚙️ Technical Constraints

* React functional components only
* No third-party feature flag libraries
* Must use Context API
* Clean architecture separation
* Should be production-scalable

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Clean architecture
* Scalability
* Context usage correctness
* Hook abstraction
* Performance awareness
* Real-world thinking
