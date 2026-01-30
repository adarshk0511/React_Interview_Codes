import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <h1>useLocalStorage Hook</h1>
      <h1>Theme: {theme}</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </div>
  );
}
