import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-12 w-12 rounded-[14px] bg-primary flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full"
          />
        </div>
        <p className="text-sm text-paragraph font-medium">Loading...</p>
      </motion.div>
    </div>
  )
}
