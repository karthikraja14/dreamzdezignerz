"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us about your project"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full px-4 py-3 rounded-[4px] border border-ink/15 bg-white text-ink placeholder:text-slate/60 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-sm transition-all";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
  };

  const contactItems = [
    { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: "Office", value: COMPANY.address },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: `https://wa.me/${COMPANY.whatsapp}` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-atelier grain">
        <div className="site-shell pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="flex items-center justify-between border-b border-ink/10 pb-6">
            <span className="section-kicker">Contact</span>
            <span className="font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.24em] text-slate">
              Reply within 24h
            </span>
          </div>
          <h1 className="hero-title mt-10 max-w-[16ch]">
            Let&apos;s start your <em>dream project.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate">
            Reach out for a free consultation — we&apos;ll get back to you within 24 hours
            with clear next steps.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-frame section-light border-t border-ink/10">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl text-ink">Get in touch</h2>
                <p className="mt-4 leading-7 text-slate">
                  Whether you have a question, want to start a project, or simply want to connect —
                  we&apos;d love to hear from you.
                </p>
                <div className="mt-8 space-y-5">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[4px] bg-teal/10">
                        <item.icon size={20} className="text-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-slate transition-colors hover:text-teal">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="rounded-[4px] card-dark p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <CheckCircle size={48} className="mx-auto mb-4 text-teal" />
                      <h3 className="mb-2 text-xl font-semibold text-ink">Thank you!</h3>
                      <p className="text-slate">We&apos;ve received your message. Our team will contact you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-ink">Full Name *</label>
                          <input {...register("name")} className={inputClass} placeholder="Your name" />
                          {errors.name && <p className="mt-1 text-xs text-orange">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-ink">Email *</label>
                          <input {...register("email")} type="email" className={inputClass} placeholder="your@email.com" />
                          {errors.email && <p className="mt-1 text-xs text-orange">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-ink">Phone *</label>
                          <input {...register("phone")} type="tel" className={inputClass} placeholder="+91 98765 43210" />
                          {errors.phone && <p className="mt-1 text-xs text-orange">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-ink">Service *</label>
                          <select {...register("service")} className={inputClass}>
                            <option value="">Select a service</option>
                            <option value="interior">Interior Design</option>
                            <option value="residential">Residential Construction</option>
                            <option value="commercial">Commercial Construction</option>
                            <option value="renovation">Renovation</option>
                            <option value="architecture">Architecture &amp; Planning</option>
                            <option value="landscape">Landscape Design</option>
                            <option value="project-management">Project Management</option>
                          </select>
                          {errors.service && <p className="mt-1 text-xs text-orange">{errors.service.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-ink">Budget Range</label>
                        <select {...register("budget")} className={inputClass}>
                          <option value="">Select budget range</option>
                          <option value="5-10L">₹5 - 10 Lakhs</option>
                          <option value="10-25L">₹10 - 25 Lakhs</option>
                          <option value="25-50L">₹25 - 50 Lakhs</option>
                          <option value="50-1Cr">₹50 Lakhs - 1 Crore</option>
                          <option value="1Cr+">₹1 Crore+</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-ink">Tell us about your project *</label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          className={`${inputClass} resize-none`}
                          placeholder="Describe your project, location, timeline, and any specific requirements..."
                        />
                        {errors.message && <p className="mt-1 text-xs text-orange">{errors.message.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        {isSubmitting ? "Sending..." : <>Send Message <Send size={16} className="ml-2" /></>}
                      </Button>

                      <p className="text-center text-xs text-slate">We respect your privacy. No spam, ever.</p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
