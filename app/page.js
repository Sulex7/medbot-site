export default function MedBotLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            AI-powered WhatsApp study assistant for medical students
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">MedBot</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Study smarter for MBBS exams with instant high-yield notes, concise explanations,
                and quiz practice directly on WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:medbot26@gmail.com"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:medbot26@gmail.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Request Access
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Student</p>
                  <p className="mt-1 font-medium">Nephron physiology</p>
                </div>
                <div className="rounded-2xl bg-emerald-600 p-4 text-white shadow-sm">
                  <p className="text-sm text-emerald-100">MedBot</p>
                  <p className="mt-1">📚 High-yield notes delivered instantly on WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">What MedBot helps you do</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Revise Faster</h3>
              <p className="mt-3 text-slate-600">
                Get concise, exam-focused explanations without digging through heavy textbooks.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Practice Smarter</h3>
              <p className="mt-3 text-slate-600">
                Test yourself with quick quizzes and high-yield recall questions on demand.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Study Anywhere</h3>
              <p className="mt-3 text-slate-600">
                Learn directly on WhatsApp, anytime you need fast revision support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-6">
              <div className="text-sm font-semibold text-emerald-700">Step 1</div>
              <h3 className="mt-2 text-lg font-semibold">Message MedBot</h3>
              <p className="mt-3 text-slate-600">Open WhatsApp and send your topic or question.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <div className="text-sm font-semibold text-emerald-700">Step 2</div>
              <h3 className="mt-2 text-lg font-semibold">Ask What You Need</h3>
              <p className="mt-3 text-slate-600">From physiology to pathology, get direct study help instantly.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <div className="text-sm font-semibold text-emerald-700">Step 3</div>
              <h3 className="mt-2 text-lg font-semibold">Revise & Practice</h3>
              <p className="mt-3 text-slate-600">Learn with concise notes, memory triggers, and quiz support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-50 p-8">
          <h2 className="text-2xl font-bold">Support</h2>
          <p className="mt-3 text-slate-700">Questions, support, or access requests:</p>
          <a href="mailto:medbot26@gmail.com" className="mt-4 inline-block text-lg font-semibold text-emerald-700">
            medbot26@gmail.com
          </a>

          <p className="mt-8 text-sm text-slate-500">
            MedBot is an educational study tool for medical students. It does not provide clinical diagnosis or medical care.
          </p>
        </div>
      </section>
    </div>
  );
}
