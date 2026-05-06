# 📝 React Todo App

A fully functional and responsive Todo List application built from scratch using **React**, **Tailwind CSS**, and **localStorage** for data persistence. This project was built as part of my self-learning web development journey alongside my CS degree.

---

## 🌟 Nature of the Project

This is a **Single Page Application (SPA)** built with React that allows users to manage their daily tasks efficiently. The app focuses on simplicity, clean UI, and a smooth user experience. All data is saved locally in the browser so todos persist even after the page is refreshed or the browser is closed.

---

## ✨ Highlight Features

- ✅ **Add, Edit & Delete** todos with ease
- ✔️ **Mark todos as complete** with a live strikethrough effect
- 👁️ **Hide/Show completed tasks** toggle
- 💾 **localStorage persistence** — your todos survive page refreshes and browser restarts
- 🚫 Friendly **"No Todos to display"** message when the list is empty
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 🎨 **Clean and modern UI** with smooth hover effects
- 🔤 Long todo text **wraps to the next line** instead of breaking the layout

---

## ⚙️ Complete Functionalities

| Function | Description |
|---|---|
| `handleAdd` | Adds a new todo to the list with a unique ID |
| `handleEdit` | Pulls the todo back into the input field for editing and removes it from the list |
| `handleDelete` | Permanently removes a todo from the list using `filter()` |
| `handleCheckbox` | Toggles the `isCompleted` state of a todo between true and false |
| `handleChange` | Tracks user input in real time using `e.target.value` |
| `saveData (useEffect)` | Automatically saves todos to localStorage whenever the todos array changes |
| `loadData (useEffect)` | Loads saved todos from localStorage when the app first opens |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React** | Frontend UI library |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **JavaScript (ES6+)** | Core programming language |
| **localStorage** | Browser storage for data persistence |
| **UUID (v4)** | Generating unique IDs for each todo |
| **React Icons** | Icon library for Edit and Delete buttons |
| **Vite** | Fast build tool and development server |

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "uuid": "^9.x",
  "react-icons": "^5.x",
  "tailwindcss": "^3.x",
  "vite": "^5.x"
}
```

---

## 🚀 Installation & Setup

Follow these steps to run the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Asmar255/Todo-list.git
```

### 2. Navigate into the Project Directory
```bash
cd Todo-list
```

### 3. Install All Dependencies
```bash
npm install
```

### 4. Install UUID (if not installed)
```bash
npm install uuid
```

### 5. Install React Icons (if not installed)
```bash
npm install react-icons --save
```

### 6. Run the Development Server
```bash
npm run dev
```

### 7. Open in Browser
The app will be running at:
```
http://localhost:5173
```

---

## 📁 Project Structure

```
Todo-list/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 👨‍💻 Author

**Asmar**
- GitHub: [@Asmar255](https://github.com/Asmar255)
- Project Link: [https://github.com/Asmar255/Todo-list](https://github.com/Asmar255/Todo-list)

---
