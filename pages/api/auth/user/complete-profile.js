import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function CompleteProfile() {
  const { data: session } = useSession();
  const [phone, setPhone] = useState("");
  const [nationalId, setNationalId] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/user/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: session.user.email,
        phone,
        nationalId,
      }),
    });
    if (res.ok) {
      alert("اطلاعات ثبت شد! منتظر تایید ادمین بمانید.");
      router.push("/");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>تکمیل پروفایل</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>شماره تماس:</label><br />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>کد ملی:</label><br />
          <input value={nationalId} onChange={(e) => setNationalId(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: 20 }}>ثبت اطلاعات</button>
      </form>
    </div>
  );
}
