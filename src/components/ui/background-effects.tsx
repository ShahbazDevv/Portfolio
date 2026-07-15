interface BackgroundEffectsProps {
  variant?: 'default' | 'skills' | 'accent'
}

const variants = {
  default: {
    gradient: 'from-primary/5 via-transparent to-transparent',
    blob1: 'bg-primary/10',
    blob2: 'bg-accent/5',
  },
  skills: {
    gradient: 'from-transparent via-accent/3 to-transparent',
    blob1: 'bg-accent/10',
    blob2: 'bg-primary/5',
  },
  accent: {
    gradient: 'from-transparent via-accent/3 to-transparent',
    blob1: 'bg-accent/10',
    blob2: 'bg-primary/5',
  },
}

export function BackgroundEffects({ variant = 'default' }: BackgroundEffectsProps) {
  const v = variants[variant]

  return (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-b ${v.gradient} pointer-events-none`}
      />
      <div
        className={`absolute top-1/4 -left-32 w-64 h-64 ${v.blob1} rounded-full blur-[100px] pointer-events-none`}
      />
      <div
        className={`absolute bottom-1/4 -right-32 w-64 h-64 ${v.blob2} rounded-full blur-[100px] pointer-events-none`}
      />
    </>
  )
}
