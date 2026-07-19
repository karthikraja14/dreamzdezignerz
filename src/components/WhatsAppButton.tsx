"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi DreamzDesignerz! I'm interested in your services. Can we discuss my project?"
  );

  return (
    <motion.a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange rounded-full" />
    </motion.a>
  );
}
