"use client";

import { useState } from "react";
import { Calendar, Phone, MessageCircle, Check } from "lucide-react";

export default function BookingForm({ carName }) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", pickup: "", ret: "", method: "WhatsApp" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    if (!form.name || !form.phone || !form.pickup) return;
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-brand/40 bg-brand/5 p-6 text-center">
        <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-brand text-white"><Check className="h-6 w-6" /></span>
        <h3 className="font-display text-lg font-bold text-white">Request received</h3>
        <p className="mt-2 text-sm text-muted">
          Thanks {form.name}. Our team will confirm the {carName} on {form.method} shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-char2 p-6">
      <h3 className="font-display text-lg font-bold text-white">Book this car</h3>
      <p className="mt-1 text-xs text-muted">Free delivery across Dubai. No deposit on most cars.</p>

      <div className="mt-5 space-y-3">
        <Field label="Full name"><input value={form.name} onChange={update("name")} placeholder="Your name" className="input" /></Field>
        <Field label="Phone"><input value={form.phone} onChange={update("phone")} placeholder="+971 5X XXX XXXX" className="input" /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Pick-up"><div className="relative"><Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" /><input type="date" value={form.pickup} onChange={update("pickup")} className="input" /></div></Field>
          <Field label="Return"><div className="relative"><Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" /><input type="date" value={form.ret} onChange={update("ret")} className="input" /></div></Field>
        </div>
        <Field label="Preferred contact">
          <div className="flex gap-2">
            {["WhatsApp", "Call"].map((m) => (
              <button key={m} onClick={() => setForm({ ...form, method: m })} className={`flex-1 rounded-md border px-3 py-2 text-sm font-medium ${form.method === m ? "border-brand bg-brand/10 text-white" : "border-line text-muted"}`}>
                {m === "WhatsApp" ? <MessageCircle className="mr-1 inline h-4 w-4" /> : <Phone className="mr-1 inline h-4 w-4" />}{m}
              </button>
            ))}
          </div>
        </Field>
      </div>

      <button onClick={submit} className="btn-red mt-5 w-full">Request booking</button>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #2a2a2a;
          background: #141414;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          color: #fff;
          outline: none;
        }
        .input:focus { border-color: #E31E24; }
      `}</style>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}
