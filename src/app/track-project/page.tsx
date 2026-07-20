import { COMPANY } from "@/lib/constants";
import { Shield, Eye, BarChart3, Camera, Phone, ArrowUpRight } from "lucide-react";

export default function TrackProjectPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-atelier grain">
        <div className="site-shell pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="flex items-center justify-between border-b border-ink/10 pb-6">
            <span className="section-kicker">
              <Shield size={13} className="mr-1 inline" /> Project tracking
            </span>
            <span className="font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.24em] text-slate">
              Powered by Vystra
            </span>
          </div>
          <h1 className="hero-title mt-10 max-w-[16ch]">
            Track your project <em>live.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate">
            Real-time visibility into your project&apos;s progress — photos, milestones and
            updates, anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Login */}
      <section className="section-frame section-light border-t border-ink/10">
        <div className="mx-auto max-w-lg px-6">
          <div className="rounded-[4px] card-dark p-8">
            <h2 className="mb-2 text-center font-[family-name:var(--font-heading)] text-xl text-ink">
              Access your dashboard
            </h2>
            <p className="mb-8 text-center text-sm text-slate">
              Continue to the Vystra portal to see live progress, photos and milestones
            </p>

            <a
              href={COMPANY.vystra}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-[4px] bg-teal px-6 py-3.5 font-semibold text-paper transition-all hover:bg-teal-dark"
            >
              Open your dashboard <ArrowUpRight size={16} />
            </a>
            <p className="mt-3 text-center text-xs text-slate">
              Log in with the email &amp; password shared during onboarding.
            </p>

            <div className="mt-6 border-t border-ink/10 pt-6 text-center">
              <p className="mb-2 text-xs text-slate">Don&apos;t have access yet?</p>
              <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-1 text-sm font-medium text-teal hover:underline">
                <Phone size={14} /> Call us to get set up
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Eye, title: "Live Progress", desc: "See daily updates and photos" },
              { icon: BarChart3, title: "Milestones", desc: "Track phase completion" },
              { icon: Camera, title: "Photo Gallery", desc: "All site photos in one place" },
            ].map((f) => (
              <div key={f.title} className="p-4 text-center">
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-[4px] bg-teal/10">
                  <f.icon size={20} className="text-teal" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-ink">{f.title}</h3>
                <p className="text-xs text-slate">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate">
              Powered by{" "}
              <a href={COMPANY.vystra} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                Vystra
              </a>{" "}
              — our proprietary construction management platform
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
