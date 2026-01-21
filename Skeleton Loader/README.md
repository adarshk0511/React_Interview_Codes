# 🧩 Skeleton Loader — What & Why

## 🧠 What is a Skeleton Loader?

> A skeleton loader is a **visual placeholder** that mimics the layout of content while data is loading.

Instead of this ❌:

```
Loading...
```

You show this ✅:

```
██████████
██████
████████████
```

Users feel the app is **faster**, even if it isn’t.

---

# 🎯 When to Use Skeleton Loaders

Skeletons are best when:

* Layout is predictable (cards, lists, tables)
* Loading takes > 300ms
* Content density is high

Not ideal for:

* Very short loads
* Simple buttons
* Blocking actions

---

# 🧠 Core Idea (VERY IMPORTANT)

> **Skeletons are NOT tied to data**
> They are tied to **layout**

This is the biggest mental shift.

---

# 🧱 Component Design (Clean & Reusable)

### API Example

```jsx
<Skeleton type="card" />
<Skeleton type="text" lines={3} />
<Skeleton type="avatar" />
```

Or more composable:

```jsx
<SkeletonLoader>
  <SkeletonAvatar />
  <SkeletonLine />
  <SkeletonLine />
</SkeletonLoader>
```

Both are interview-acceptable.

---

# 🧠 State Design

Skeletons themselves usually **do not manage state**.

Instead:

```jsx
{loading ? <Skeleton /> : <ActualContent />}
```

Skeleton = **presentational component**

---

# 🧱 Visual Building Blocks

Most skeletons are just rectangles with:

| Property      | Purpose             |
| ------------- | ------------------- |
| background    | neutral placeholder |
| border-radius | mimic real UI       |
| width/height  | match content       |
| animation     | shimmer effect      |

---

# ✨ The Shimmer Effect (Key UX Detail)

Skeletons often animate to suggest loading.

Conceptually:

* A gradient moves left → right
* Creates illusion of progress

This is **pure CSS**.

---

# 🧠 Mental Model (Visual)

```
[ Avatar ] [████████████]
           [████████]
           [██████████████]
```

Skeleton matches **final content shape** exactly.

---

# 🪜 Step-by-Step Build Plan

## Step 1️⃣ Create static skeleton blocks

* Gray boxes
* Same dimensions as content

## Step 2️⃣ Add shimmer animation

* CSS keyframes
* Linear gradient

## Step 3️⃣ Make it reusable

* Props for width, height, variant

## Step 4️⃣ Replace spinners in async flows

* Fetch → loading → skeleton → content
