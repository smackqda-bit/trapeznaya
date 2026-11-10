"use client";

import { useState, type FormEvent } from "react";
import { contacts } from "@/content";

// Заявка пока уходит письмом через почтовый клиент посетителя.
// Чтобы принимать заявки на сервере (Telegram-бот, CRM), замените обработчик submit.

const field =
  "border-0 border-b border-ink bg-transparent py-2.5 text-[17px] font-normal tracking-normal normal-case text-ink placeholder:text-[#8c857a] focus:border-bronze focus:outline-none";
const label = "flex flex-col gap-2.5 text-[11px] font-medium tracking-[0.2em] text-muted uppercase";

export function LeadForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Имя: ${data.get("name")}`,
      `Телефон: ${data.get("phone")}`,
      `Организация: ${data.get("company") || "—"}`,
    ].join("\n");
    window.location.href = `mailto:${contacts.email}?subject=${encodeURIComponent(
      "Заявка на комплексные обеды",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex min-w-0 flex-[1_1_400px] flex-col gap-8 pt-2">
      <h3 className="font-serif text-4xl font-medium">Оставьте заявку</h3>
      <label className={label}>
        Имя
        <input required name="name" type="text" autoComplete="name" placeholder="Как к вам обращаться" className={field} />
      </label>
      <label className={label}>
        Телефон
        <input required name="phone" type="tel" autoComplete="tel" placeholder="+7 (___) ___-__-__" className={field} />
      </label>
      <label className={label}>
        Организация и число сотрудников
        <input name="company" type="text" placeholder="Например: офис, 15 человек" className={field} />
      </label>
      <button type="submit" className="btn-solid self-start px-9">
        Отправить заявку
      </button>
      {sent && (
        <p role="status" className="text-sm text-body">
          Открыли письмо с заявкой — отправьте его, и мы свяжемся с вами. Или позвоните:{" "}
          <a href={contacts.phoneHref} className="underline">
            {contacts.phone}
          </a>
        </p>
      )}
    </form>
  );
}
