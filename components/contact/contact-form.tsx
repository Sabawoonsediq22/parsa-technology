"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { projectTypes } from "@/lib/content";

type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent";

const labelClass = "mb-2 block text-sm text-muted";

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  error,
  optional = false,
  children,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  optional?: boolean;
  children?: ReactNode;
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {optional ? (
          <span className="text-muted/60"> (optional)</span>
        ) : (
          <span className="text-accent"> *</span>
        )}
      </label>
      {children ?? (
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={inputClass}
        />
      )}
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-xs text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  function toggleType(type: string) {
    setSelectedTypes((current) =>
      current.includes(type)
        ? current.filter((item) => item !== type)
        : [...current, type],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};

    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) {
      nextErrors.email = "An email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!message) nextErrors.message = "Tell us a little about the project.";

    setErrors(nextErrors);
    setSent(false);

    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      form.reset();
      setSelectedTypes([]);
    }, 700);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <Field
        label="Name"
        name="name"
        autoComplete="name"
        placeholder="Your full name"
        error={errors.name}
      />
      <Field
        label="Company"
        name="company"
        autoComplete="organization"
        placeholder="Company name"
        optional
      />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        error={errors.email}
      />
      <Field
        label="Phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="+1 (555) 000-0000"
        optional
      />

      <fieldset className="sm:col-span-2">
        <legend className="mb-2 block text-sm text-muted">
          Services{" "}
          <span className="text-muted/60"> (select one or more)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => {
            const active = selectedTypes.includes(type);

            return (
              <button
                key={type}
                type="button"
                aria-pressed={active}
                onClick={() => toggleType(type)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-accent bg-accent text-white"
                    : "border-border text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="projectType" value={selectedTypes.join(", ")} />
      </fieldset>

      <div className="sm:col-span-2">
        <Field
          label="Message"
          name="message"
          error={errors.message}
        >
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="What are you building, who is it for, and when do you need it?"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/85 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message →"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${sent ? "text-accent" : "text-muted"}`}
        >
          {sent
            ? "Thanks — your message is in. We reply within two working days."
            : "We reply to every enquiry within two working days."}
        </p>
      </div>
    </form>
  );
}
