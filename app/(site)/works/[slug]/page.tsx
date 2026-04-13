import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { works, getWork, getRelatedWorks } from '@/content/works'

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) notFound()

  const related = getRelatedWorks(slug, work.type)

  return (
    <main className="pt-24 pb-20 min-h-screen bg-earth-50">
      {/* ヘッダー画像 */}
      <div className="relative w-full h-72 sm:h-96 bg-earth-200 overflow-hidden">
        <Image
          src={work.image}
          alt={work.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-earth-900/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto">
          <span className="inline-block text-xs bg-earth-700 text-earth-50 px-2 py-1 mb-3 tracking-wide font-serif">
            {work.type}
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
            {work.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-10">
        {/* 物件情報テーブル */}
        <div className="bg-white border border-earth-100 p-6 mb-10">
          <h2 className="font-serif text-earth-700 text-sm tracking-widest mb-4 border-b border-earth-100 pb-3">
            物件情報
          </h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            {[
              { label: '所在地', value: work.location },
              { label: '種別', value: work.type },
              { label: '延床面積', value: work.area },
              { label: '工期', value: work.duration },
              { label: '完工', value: work.date.replace(/-/g, '.') },
            ].map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs text-earth-400 tracking-wide mb-1">{label}</dt>
                <dd className="text-earth-700 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 本文 */}
        <div className="space-y-5">
          <p className="font-serif text-earth-600 leading-relaxed text-base">
            {work.description}
          </p>
          {work.body.map((paragraph, i) => (
            <p key={i} className="text-earth-700 leading-loose text-sm sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        {/* ナビゲーション */}
        <div className="mt-14 pt-8 border-t border-earth-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link
            href="/works"
            className="text-sm text-earth-500 hover:text-earth-800 tracking-wide transition-colors font-serif"
          >
            ← 施工事例一覧へ
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest font-serif bg-earth-700 text-earth-50 hover:bg-earth-800 border border-earth-700 transition-all duration-200"
          >
            お問い合わせ
          </Link>
        </div>

        {/* 関連事例 */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="font-serif text-earth-700 text-sm tracking-widest mb-6 border-b border-earth-100 pb-3">
              関連する施工事例
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/works/${r.slug}`}
                  className="group block bg-white border border-earth-100 hover:border-earth-300 transition-all duration-200 hover:shadow-md"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-earth-100">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-earth-400 mb-1">{r.date.replace(/-/g, '.')}</p>
                    <p className="font-serif text-earth-800 text-sm group-hover:text-earth-600 transition-colors">
                      {r.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
