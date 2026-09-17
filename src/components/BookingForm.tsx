import { useState } from 'react';
import { ArrowUpRight, Check, Send } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  studentAge: string;
  experience: string;
  availability: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  studentAge: '',
  experience: '',
  availability: '',
  message: ''
};

const teacherEmail = 'hello@flytothemoon.studio';

export default function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Trial lesson inquiry from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Student age: ${form.studentAge || 'Not provided'}`,
        `Experience: ${form.experience || 'Not provided'}`,
        `Availability: ${form.availability || 'Not provided'}`,
        '',
        form.message
      ].join('\n')
    );
    window.location.href = `mailto:${teacherEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[360px] flex-col items-start justify-center border border-ink/15 bg-white/70 p-8 sm:p-10">
        <span className="mb-7 grid h-12 w-12 place-items-center rounded-full bg-sage text-white" aria-hidden="true">
          <Check size={22} strokeWidth={1.7} />
        </span>
        <p className="eyebrow mb-4 text-brass">Your note is ready</p>
        <h3 className="font-display text-4xl leading-none text-ink">Let&apos;s start a conversation.</h3>
        <p className="mt-5 max-w-sm text-sm leading-7 text-ink/65">
          Your email app should have opened with the details filled in. Send it when you&apos;re ready, and Anna will be in touch within two business days.
        </p>
        <button
          type="button"
          onClick={() => { setForm(initialState); setSubmitted(false); }}
          className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-brass hover:text-brass"
        >
          Send another note <ArrowUpRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-ink/15 bg-white/70 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Your name <input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="First and last name" className="border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass" />
        </label>
        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Email <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className="border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass" />
        </label>
        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Student age <input value={form.studentAge} onChange={(e) => update('studentAge', e.target.value)} placeholder="e.g. 8 or adult" className="border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass" />
        </label>
        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Experience <select value={form.experience} onChange={(e) => update('experience', e.target.value)} className="border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal tracking-normal text-ink outline-none focus:border-brass"><option value="">Choose one</option><option>Brand new to piano</option><option>Some experience</option><option>Intermediate</option><option>Advanced</option></select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
        Preferred days and times <input value={form.availability} onChange={(e) => update('availability', e.target.value)} placeholder="e.g. weekday afternoons" className="border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass" />
      </label>
      <label className="mt-5 grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
        Tell us a little more <textarea rows={3} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="What would you love to explore at the piano?" className="resize-none border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass" />
      </label>
      <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brass sm:w-auto">
        Prepare my inquiry <Send size={15} strokeWidth={1.8} />
      </button>
      <p className="mt-4 text-xs leading-5 text-ink/45">This opens your email app with the inquiry ready to send. Replace with Calendly or a form provider before launch.</p>
    </form>
  );
}
