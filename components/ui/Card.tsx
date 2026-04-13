import Link from 'next/link'
import Image from 'next/image'

type CardProps = {
  href: string
  image?: string
  imageAlt?: string
  category?: string
  date?: string
  title: string
  description?: string
}

export default function Card({
  href,
  image,
  imageAlt = '',
  category,
  date,
  title,
  description,
}: CardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-earth-100 hover:border-earth-300 transition-all duration-200 hover:shadow-md"
    >
      {image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-earth-100">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          {category && (
            <span className="text-xs text-gold-500 border border-gold-300 px-2 py-0.5 tracking-wide">
              {category}
            </span>
          )}
          {date && (
            <span className="text-xs text-earth-400">{date}</span>
          )}
        </div>
        <h3 className="font-serif text-earth-800 text-base leading-snug group-hover:text-earth-600 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-earth-500 mt-2 leading-relaxed line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  )
}
