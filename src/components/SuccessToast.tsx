"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function SuccessToast() {
  const { showToast, toastMessage } = useCart();

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ y: -100, opacity: 0, x: '-50%' }}
          animate={{ y: 20, opacity: 1, x: '-50%' }}
          exit={{ y: -100, opacity: 0, x: '-50%' }}
          className="fixed top-24 left-1/2 z-[100] w-full max-w-sm px-4"
        >
          <div className="bg-white text-black p-4 flex items-center gap-4 shadow-2xl border-l-8 border-ingwe-blue skew-x-[-5deg]">
            <CheckCircle2 className="text-ingwe-blue shrink-0" size={24} />
            <p className="font-black uppercase italic text-sm tracking-tight">
              {toastMessage}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}