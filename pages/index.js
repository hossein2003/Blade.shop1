import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p style={{ textAlign: "center" }}>در حال بررسی وضعیت کاربر...</p>;
  }

  if (!session) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>برای مشاهده محتوا ابتدا وارد شوید</h2>
        <button onClick={() => signIn()} style={{ padding: "10px 20px" }}>
          ورود
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>به BlaDe خوش آمدی، {session.user.name}!</h1>
      <p>ایمیل: {session.user.email}</p>
      <img
        src={session.user.image}
        alt="avatar"
        style={{ borderRadius: "50%", width: 100, height: 100, marginTop: 20 }}
      />
      <div style={{ marginTop: 30 }}>
        <button onClick={() => signOut()} style={{ padding: "10px 20px" }}>
          خروج
        </button>
      </div>
    </div>
  );
}
import { useTheme } from "../context/ThemeContext"; // بالای فایل


const { dark, toggleTheme } = useTheme(); // درون تابع کامپوننت Home


<div style={{ marginTop: 20 }}>
  <button onClick={toggleTheme} style={{ padding: "8px 16px" }}>
    تغییر به {dark ? "Day Mode ☀️" : "Dark Mode 🌙"}
  </button>
</div>
