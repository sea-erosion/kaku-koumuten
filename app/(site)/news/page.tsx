import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'
import { newsItems } from '@/content/news'

const CATEGORY_COLORS: Record<string, string> = {
  'イベント':   'text-gold-500 border-gold-300',
  '新着情報':   'text-earth-600 border-earth-300',
  '施工事例':   'text-earth-500 border-earth-200',
  'お知らせ':   'text-earth-400 border-earth-200',
}

export default function NewsPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-earth-50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          en="NEWS"
          ja="お知らせ"
        />

        <div className="mt-10 space-y-6">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex gap-5 bg-white border border-earth-100 hover:border-earth-300 transition-all duration-200 hover:shadow-md p-0"
            >
              {/* サムネイル */}
              <div className="relative w-32 sm:w-44 flex-shrink-0 aspect-[4/3] overflow-hidden bg-earth-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* テキスト */}
              <div className="py-5 pr-5 flex flex-col justify-center gap-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs border px-2 py-0.5 tracking-wide font-serif ${
                      CATEGORY_COLORS[item.category] ?? 'text-earth-400 border-earth-200'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-earth-400">
                    {item.date.replace(/-/g, '.')}
                  </span>
                </div>
                <h2 className="font-serif text-earth-800 text-base leading-snug group-hover:text-earth-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-earth-500 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
