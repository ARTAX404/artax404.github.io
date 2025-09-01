"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <form
        className="grid gap-4 max-w-xl"
        action="https://formspree.io/f/xyyqkzzz"
        method="POST"
        onSubmit={() => setStatus("sent")}
      >
        <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
        <label className="grid gap-1">
          <span>Nom</span>
          <input name="name" required className="px-3 py-2 rounded-md bg-white/5 border border-white/10" />
        </label>
        <label className="grid gap-1">
          <span>Email</span>
          <input type="email" name="email" required className="px-3 py-2 rounded-md bg-white/5 border border-white/10" />
        </label>
        <label className="grid gap-1">
          <span>Message</span>
          <textarea name="message" rows={6} required className="px-3 py-2 rounded-md bg-white/5 border border-white/10" />
        </label>
        <button className="px-4 py-2 bg-accent text-white rounded-md w-max">Envoyer</button>
        {status === "sent" && (
          <p className="text-sm text-muted">Merci, votre message a été envoyé.</p>
        )}
      </form>
    </main>
  );
}

