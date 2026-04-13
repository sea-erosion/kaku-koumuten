type SectionTitleProps = {
  en?: string
  ja: string
  center?: boolean
}

export default function SectionTitle({ en, ja, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {en && (
        <p className="text-xs tracking-[0.3em] text-gold-500 uppercase mb-2">{en}</p>
      )}
      <h2 className="font-serif text-2xl md:text-3xl text-earth-800 tracking-wide">
        {ja}
      </h2>
      <div className={`mt-3 h-px bg-earth-200 ${center ? 'mx-auto w-16' : 'w-16'}`} />
    </div>
  )
}
