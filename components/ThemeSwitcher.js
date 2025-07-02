import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme==="light" ? "🌙" : "☀️"}</button>;
}
