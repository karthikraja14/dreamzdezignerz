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

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-teal/30 text-teal text-sm font-medium mb-6"
          >
            <Calculator size={14} className="inline mr-2" />
            Cost Estimator
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-6"
          >
            Get an Instant
            <br />
            <span className="text-gradient-teal">Cost Estimate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Answer a few questions to get an approximate cost for your project. No commitment required.
          </motion.p>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-24 relative">
        <div className="max-w-2xl mx-auto px-6">
          {/* Progress */}
          <div className="flex items-center justify-between mb-12">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    s <= step
                      ? "bg-teal text-white"
                      : "bg-teal/10 text-teal/50 border border-teal/20"
                  }`}
                >
                  {s < step ? <CheckCircle size={18} /> : s}
                </div>
                {s < 4 && (
                  <div className={`w-12 sm:w-20 h-0.5 mx-2 ${s < step ? "bg-teal" : "bg-teal/10"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="p-8 rounded-2xl card-dark border border-white/8 min-h-[300px]">
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
                      <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)] mb-2">
                        What type of project?
                      </h2>
                      <p className="text-white/50 text-sm mb-8">Select the service you need</p>
                      <div className="space-y-3">
                        {serviceTypes.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setServiceType(s.id)}
                            className={`w-full p-4 rounded-xl border text-left transition-all ${
                              serviceType === s.id
                                ? "border-gold bg-teal/5"
                                : "border-white/8 hover:border-teal/30"
                            }`}
                          >
                            <span className="font-medium text-white">{s.label}</span>
                            <span className="text-sm text-white/50 ml-2">(from ₹{s.rate}/sq.ft)</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)] mb-2">
                        What&apos;s the area?
                      </h2>
                      <p className="text-white/50 text-sm mb-8">Enter the approximate area in square feet</p>
                      <input
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full px-6 py-4 rounded-xl border border-white/8 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-2xl font-semibold text-white text-center bg-dark-mid/50"
                        placeholder="e.g. 1500"
                        min="100"
                      />
                      <p className="text-center text-white/50 text-sm mt-3">Square feet (sq.ft)</p>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)] mb-2">
                        Quality preference?
                      </h2>
                      <p className="text-white/50 text-sm mb-8">Choose your preferred quality tier</p>
                      <div className="space-y-3">
                        {qualityTiers.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setQuality(t.id)}
                            className={`w-full p-4 rounded-xl border text-left transition-all ${
                              quality === t.id
                                ? "border-gold bg-teal/5"
                                : "border-white/8 hover:border-teal/30"
                            }`}
                          >
                            <span className="font-medium text-white capitalize">{t.label}</span>
                            <p className="text-sm text-white/50 mt-1">{t.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="text-center">
                      <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)] mb-2">
                        Ready to see your estimate?
                      </h2>
                      <p className="text-white/50 text-sm mb-8">
                        Based on your selections, we&apos;ll calculate an approximate cost.
                      </p>
                      <div className="p-6 rounded-xl bg-dark border border-white/8">
                        <p className="text-sm text-white/50 mb-2">Your selections:</p>
                        <p className="text-white font-medium capitalize">
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
                  className="text-center py-8"
                >
                  <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)] mb-4">
                    Your Estimated Cost
                  </h2>
                  <div className="text-5xl md:text-6xl font-bold text-gradient-teal font-[family-name:var(--font-heading)] mb-4">
                    ₹{cost.toLocaleString("en-IN")}
                  </div>
                  <p className="text-white/50 text-sm mb-8">
                    This is an approximate estimate. Actual costs may vary based on specific requirements, location, and material choices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center gap-2 text-sm text-white/50 disabled:opacity-30 hover:text-teal transition-colors"
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-2.5 bg-teal text-white text-sm font-semibold rounded-full disabled:opacity-30 hover:bg-teal-dark transition-all"
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
