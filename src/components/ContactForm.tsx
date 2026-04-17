"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/(site)/actions";

const initialState: EnquiryState = { ok: false };

const eventTypes: { value: string; label: string }[] = [
  { value: "festival", label: "Festival" },
  { value: "club", label: "Club Night / Residency" },
  { value: "wedding", label: "Wedding" },
  { value: "private", label: "Private Party" },
  { value: "corporate", label: "Corporate Event" },
  { value: "residency", label: "Residency Enquiry" },
  { value: "other", label: "Other" },
];

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors || errors.length === 0) return null;
  return (
    <p style={{ color: "#F39B8A", fontSize: "0.78rem", marginTop: "6px" }}>{errors[0]}</p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.ok && formRef.current) formRef.current.reset();
  }, [state.ok]);

  return (
    <form
      ref={formRef}
      className="contact-form reveal visible"
      action={formAction}
      noValidate
    >
      <div className="form-row">
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
          <FieldError errors={state.fieldErrors?.name} />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.co.uk" required />
          <FieldError errors={state.fieldErrors?.email} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="eventType">Event Type</label>
          <select id="eventType" name="eventType" defaultValue="" required>
            <option value="" disabled>
              Select event type
            </option>
            {eventTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <FieldError errors={state.fieldErrors?.eventType} />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="eventDate">Event Date</label>
          <input id="eventDate" name="eventDate" type="date" />
          <FieldError errors={state.fieldErrors?.eventDate} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="venue">Venue / Location</label>
        <input
          id="venue"
          name="venue"
          type="text"
          placeholder="Venue name or area (e.g. Bournemouth, New Forest)"
        />
        <FieldError errors={state.fieldErrors?.venue} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell me about your event</label>
        <textarea
          id="message"
          name="message"
          placeholder="What are you looking for? Any specific requirements, music preferences, or questions?"
          required
        />
        <FieldError errors={state.fieldErrors?.message} />
      </div>
      <button type="submit" className="form-submit" disabled={pending}>
        {pending ? "Sending…" : "Send Enquiry"}
      </button>
      {state.message ? (
        <p
          role={state.ok ? "status" : "alert"}
          style={{
            marginTop: "18px",
            color: state.ok ? "var(--accent)" : "#F39B8A",
            fontSize: "0.85rem",
          }}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
