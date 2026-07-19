"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calculator, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const serviceTypes = [
  { id: "construction", label: "New Construction", rate: 1800 },
  { id: "interior", label: "Interior Design", rate: 1200 },
  { id: "renovation", label: "Renovation", rate: 900 },
];

const qualityTiers = [
  { id: "standard", label: "Standard", multiplier: 1, description: "Quality materials with smart budgeting" },
  { id: "premium", label: "Premium", multiplier: 1.5, description: "High-end materials and finishes" },
  { id: "luxury", label: "Luxury", multiplier: 2.2, description: "Top-tier materials, bespoke everything" },
];

export default function CostEstimatorPage() {
  const [step, setStep] = useState<Step>(1);
  const [serviceType, setServiceType] = useState("");
  const [area, setArea] = useState("");
  const [quality, setQuality] = useState("");
  const [showResult, setShowResult] = useState(false);

  const calculateCost = () => {
    const service = serviceTypes.find((s) => s.id === serviceType);
    const tier = qualityTiers.find((t) => t.id === quality);
    if (!service || !tier || !area) return 0;
    return Math.round(service.rate * tier.multiplier * parseInt(area));
  };

  const handleNext = () => {
    if (step < 4) setStep((step + 1) as Step);
    else setShowResult(true);
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      return;
    }
    if (step > 1) setStep((step - 1) as Step);
  };

  const canProceed = () => {
    if (step === 1) return serviceType !== "";
    if (step === 2) return area !== "" && parseInt(area) > 0;
    if (step === 3) return quality !== "";
    return true;
  };

  const cost = calculateCost();
  const selectClass =
    "w-full p-4 rounded-[4px] border text-left transition-all";

  return (
    <>
      {/* Hero */}
      <section className="hero-atelier grain">
        <div className="site-shell pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="flex items-center justify-between border-b border-ink/10 pb-6">
            <span className="section-kicker">
              <Calculator size={13} className="mr-1 inline" /> Cost estimator
            </span>
            <span className="font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.24em] text-slate">
              No commitment
            </span>
          </div>
          <h1 className="hero-title mt-10 max-w-[16ch]">
            Get an instant <em>cost estimate.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate">
            Answer a few questions to get an approximate cost for your project — free and
            without any commitment.
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section className="section-frame section-light border-t border-ink/10">
        <div className="mx-auto max-w-2xl px-6">
          {/* Progress */}
          <div className="mb-12 flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                    s <= step ? "bg-teal text-paper" : "border border-teal/25 bg-teal/10 text-teal/60"
                  }`}
                >
                  {s < step ? <CheckCircle size={18} /> : s}
                </div>
                {s < 4 && <div className={`mx-2 h-0.5 w-12 sm:w-20 ${s < step ? "bg-teal" : "bg-ink/10"}`} />}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="min-h-[300px] rounded-[4px] card-dark p-8">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {step === 1 && (
                    <div>
                      <h2 className="mb-2 font-[family-name:var(--font-heading)] text-xl text-ink">What type of project?</h2>
                      <p className="mb-8 text-sm text-slate">Select the service you need</p>
                      <div className="space-y-3">
                        {serviceTypes.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setServiceType(s.id)}
                            className={`${selectClass} ${serviceType === s.id ? "border-teal bg-teal/5" : "border-ink/12 hover:border-teal/40"}`}
                          >
                            <span className="font-medium text-ink">{s.label}</span>
                            <span className="ml-2 text-sm text-slate">(from ₹{s.rate}/sq.ft)</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 className="mb-2 font-[family-name:var(--font-heading)] text-xl text-ink">What&apos;s the area?</h2>
                      <p className="mb-8 text-sm text-slate">Enter the approximate area in square feet</p>
                      <input
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full rounded-[4px] border border-ink/15 bg-white px-6 py-4 text-center text-2xl font-semibold text-ink outline-none transition-all focus:border-teal focus:ring-1 focus:ring-teal/20"
                        placeholder="e.g. 1500"
                        min="100"
                      />
                      <p className="mt-3 text-center text-sm text-slate">Square feet (sq.ft)</p>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="mb-2 font-[family-name:var(--font-heading)] text-xl text-ink">Quality preference?</h2>
                      <p className="mb-8 text-sm text-slate">Choose your preferred quality tier</p>
                      <div className="space-y-3">
                        {qualityTiers.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setQuality(t.id)}
                            className={`${selectClass} ${quality === t.id ? "border-teal bg-teal/5" : "border-ink/12 hover:border-teal/40"}`}
                          >
                            <span className="font-medium capitalize text-ink">{t.label}</span>
                            <p className="mt-1 text-sm text-slate">{t.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="text-center">
                      <h2 className="mb-2 font-[family-name:var(--font-heading)] text-xl text-ink">Ready to see your estimate?</h2>
                      <p className="mb-8 text-sm text-slate">Based on your selections, we&apos;ll calculate an approximate cost.</p>
                      <div className="rounded-[4px] border border-ink/10 bg-sand p-6">
                        <p className="mb-2 text-sm text-slate">Your selections:</p>
                        <p className="font-medium capitalize text-ink">
                          {serviceType} • {area} sq.ft • {quality}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl text-ink">Your Estimated Cost</h2>
                  <div className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-semibold text-gradient-teal md:text-6xl">
                    ₹{cost.toLocaleString("en-IN")}
                  </div>
                  <p className="mb-8 text-sm text-slate">
                    This is an approximate estimate. Actual costs may vary based on specific requirements, location, and material choices.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button href="/contact">Get Detailed Quote</Button>
                    <Button variant="outline" onClick={() => { setStep(1); setShowResult(false); setServiceType(""); setArea(""); setQuality(""); }}>
                      Start Over
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {!showResult && (
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center gap-2 text-sm text-slate transition-colors hover:text-teal disabled:opacity-30"
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-paper transition-all hover:bg-teal-dark disabled:opacity-30"
              >
                {step === 4 ? "Calculate" : "Next"} <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
