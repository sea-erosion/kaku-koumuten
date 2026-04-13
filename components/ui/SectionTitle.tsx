type SectionTitleProps = {
  en?: string
  ja?: string
  sub?: string
  title?: string
  description?: string
  center?: boolean
}

export default function SectionTitle({
  en,
  ja,
  sub,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  const eyebrow = sub ?? en
  const heading = title ?? ja

  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.3em] text-gold-500 uppercase mb-2">{eyebrow}</p>
      )}
      {heading && (
        <h2 className="font-serif text-2xl md:text-3xl text-earth-800 tracking-wide">
          {heading}
        </h2>
      )}
      <div className={`mt-3 h-px bg-earth-200 ${center ? 'mx-auto w-16' : 'w-16'}`} />
      {description && (
        <p className="mt-5 text-sm text-earth-500 leading-loose max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
