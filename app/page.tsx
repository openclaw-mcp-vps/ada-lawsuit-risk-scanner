export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          ADA Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Your Website for{" "}
          <span className="text-[#58a6ff]">ADA Lawsuit Risk</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Instantly detect accessibility issues that trigger ADA lawsuits. Get a risk score, prioritized fixes, and a compliance report you can act on today.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for preview. Cancel anytime.</p>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">4,000+</div>
            <div className="text-[#8b949e] text-sm mt-1">ADA lawsuits filed yearly</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">$25K+</div>
            <div className="text-[#8b949e] text-sm mt-1">Average settlement cost</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">30s</div>
            <div className="text-[#8b949e] text-sm mt-1">To get your risk report</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited URL scans",
              "Lawsuit risk score per page",
              "Prioritized fix recommendations",
              "WCAG 2.1 AA issue breakdown",
              "Downloadable PDF reports",
              "Email alerts for new issues"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-2">What ADA issues does the scanner detect?</h3>
            <p className="text-[#8b949e] text-sm">We check for missing alt text, poor color contrast, unlabeled form fields, missing keyboard navigation, inaccessible PDFs, and 50+ other issues that are cited in real ADA lawsuits.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-2">Is this a legal guarantee of compliance?</h3>
            <p className="text-[#8b949e] text-sm">No. This tool identifies common risk factors and helps you prioritize fixes, but it does not constitute legal advice. We recommend consulting an attorney for full compliance assurance.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-2">How often should I scan my website?</h3>
            <p className="text-[#8b949e] text-sm">We recommend scanning after every major update. With a Pro subscription, you can set up automated weekly scans and receive email alerts when new issues are detected.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} ADA Lawsuit Risk Scanner. Not legal advice.
      </footer>
    </main>
  );
}
