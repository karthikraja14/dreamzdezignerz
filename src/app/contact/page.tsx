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

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // TODO: Connect to backend/Vystra API
    console.log("Form submitted:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
  };

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
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-6"
          >
            Let&apos;s Start Your
            <br />
            <span className="text-gradient-teal">Dream Project</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Reach out for a free consultation. We&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-white/50 mb-8 leading-relaxed">
                  Whether you have a question, want to start a project, or simply want to connect — we&apos;d love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Phone</p>
                      <a href={`tel:${COMPANY.phone}`} className="text-white/50 text-sm hover:text-teal transition-colors">
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-white/50 text-sm hover:text-teal transition-colors">
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Office</p>
                      <p className="text-white/50 text-sm">{COMPANY.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">WhatsApp</p>
                      <a
                        href={`https://wa.me/${COMPANY.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 text-sm hover:text-[#25D366] transition-colors"
                      >
                        Chat with us instantly
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="p-8 rounded-2xl card-dark border border-white/8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle size={48} className="text-teal mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                      <p className="text-white/50">We&apos;ve received your message. Our team will contact you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                          <input
                            {...register("name")}
                            className="w-full px-4 py-3 rounded-xl border border-white/8 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-sm transition-all bg-dark-mid/50"
                            placeholder="Your name"
                          />
                          {errors.name && <p className="text-orange text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Email *</label>
                          <input
                            {...register("email")}
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-white/8 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-sm transition-all bg-dark-mid/50"
                            placeholder="your@email.com"
                          />
                          {errors.email && <p className="text-orange text-xs mt-1">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Phone *</label>
                          <input
                            {...register("phone")}
                            type="tel"
                            className="w-full px-4 py-3 rounded-xl border border-white/8 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-sm transition-all bg-dark-mid/50"
                            placeholder="+91 98765 43210"
                          />
                          {errors.phone && <p className="text-orange text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Service *</label>
                          <select
                            {...register("service")}
                            className="w-full px-4 py-3 rounded-xl border border-white/8 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-sm transition-all bg-dark-mid/50"
                          >
                            <option value="">Select a service</option>
                            <option value="interior">Interior Design</option>
                            <option value="residential">Residential Construction</option>
                            <option value="commercial">Commercial Construction</option>
                            <option value="renovation">Renovation</option>
                            <option value="architecture">Architecture & Planning</option>
                            <option value="landscape">Landscape Design</option>
                            <option value="project-management">Project Management</option>
                          </select>
                          {errors.service && <p className="text-orange text-xs mt-1">{errors.service.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Budget Range</label>
                        <select
                          {...register("budget")}
                          className="w-full px-4 py-3 rounded-xl border border-white/8 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-sm transition-all bg-dark-mid/50"
                        >
                          <option value="">Select budget range</option>
                          <option value="5-10L">₹5 - 10 Lakhs</option>
                          <option value="10-25L">₹10 - 25 Lakhs</option>
                          <option value="25-50L">₹25 - 50 Lakhs</option>
                          <option value="50-1Cr">₹50 Lakhs - 1 Crore</option>
                          <option value="1Cr+">₹1 Crore+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Tell us about your project *</label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-white/8 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none text-sm transition-all bg-dark-light resize-none"
                          placeholder="Describe your project, location, timeline, and any specific requirements..."
                        />
                        {errors.message && <p className="text-orange text-xs mt-1">{errors.message.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        {isSubmitting ? "Sending..." : <>Send Message <Send size={16} className="ml-2" /></>}
                      </Button>

                      <p className="text-center text-white/50 text-xs">
                        We respect your privacy. No spam, ever.
                      </p>
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
