import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { newsItems, getNewsItem } from '@/content/news'

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }))
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getNewsItem(slug)
  if (!item) notFound()

  const currentIndex = newsItems.findIndex((n) => n.slug === slug)
  const prev = currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null
  const next = currentIndex > 0 ? newsItems[currentIndex - 1] : null

  return (
    <main className="pt-24 pb-20 min-h-screen bg-earth-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gold-500 border border-gold-300 px-2 py-0.5 tracking-wide font-serif">
              {item.category}
            </span>
            <span className="text-xs text-earth-400">
              {item.date.replace(/-/g, '.')}
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl text-earth-800 leading-snug">
            {item.title}
          </h1>
        </div>

        {/* メイン画像 */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-earth-100 mb-10">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* リード文 */}
        <p className="font-serif text-earth-600 leading-relaxed text-base mb-8 pb-8 border-b border-earth-100">
          {item.description}
        </p>

        {/* 本文 */}
        <div className="space-y-6">
          {item.body.map((paragraph, i) => (
            <p key={i} className="text-earth-700 leading-loose text-sm sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 前後ナビゲーション */}
        <div className="mt-14 pt-8 border-t border-earth-100">
          <div className="flex justify-between gap-4">
            {prev ? (
              <Link
                href={`/news/${prev.slug}`}
                className="flex-1 text-left group"
              >
                <p className="text-xs text-earth-400 mb-1 tracking-wide">← 前の記事</p>
                <p className="text-sm font-serif text-earth-700 group-hover:text-earth-500 transition-colors line-clamp-1">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            <Link
              href="/news"
              className="text-xs text-earth-500 hover:text-earth-800 tracking-wide transition-colors font-serif self-center shrink-0"
            >
              一覧へ
            </Link>

            {next ? (
              <Link
                href={`/news/${next.slug}`}
                className="flex-1 text-right group"
              >
                <p className="text-xs text-earth-400 mb-1 tracking-wide">次の記事 →</p>
                <p className="text-sm font-serif text-earth-700 group-hover:text-earth-500 transition-colors line-clamp-1">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
