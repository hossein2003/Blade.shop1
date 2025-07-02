"use client";
import { useState } from "react";

export default function UserInfoForm({ email }) {
  const [form, setForm] = useState({ email, phone: "", nationalId: "" });
  const [msg, setMsg] = useState("");

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async e => {
    e.preventDefault();
    const res = await fetch("/api/user/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setMsg(res.ok ? "اطلاعات ثبت شد" : data.error);
  };

  return (
    <form onSubmit={submit}>
      <input name="email" value={form.email} readOnly />
      <input name="phone" value={form.phone} onChange={handle} placeholder="شماره تماس" />
      <input name="nationalId" value={form.nationalId} onChange={handle} placeholder="کد ملی" />
      <button type="submit">ارسال</button>
      <p>{msg}</p>
    </form>
  );
}
