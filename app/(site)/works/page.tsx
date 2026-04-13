'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'
import { works } from '@/content/works'

// 施工記録に不一致がある場合、最新の測定値を優先してください

const TYPES = ['すべて', '新築', 'リノベーション', '修繕'] as const
type FilterType = (typeof TYPES)[number]

export default function WorksPage() {
  const [filter, setFilter] = useState<FilterType>('すべて')

  const filtered =
    filter === 'すべて' ? works : works.filter((w) => w.type === filter)

  return (
    <main className="pt-24 pb-20 min-h-screen bg-earth-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          en="WORKS"
          ja="施工事例"
        />

        {/* フィルター */}
        <div className="flex flex-wrap gap-2 mt-10 mb-10 justify-center">
          {TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 text-sm tracking-widest border transition-all duration-200 font-serif ${
                filter === type
                  ? 'bg-earth-700 text-earth-50 border-earth-700'
                  : 'bg-transparent text-earth-600 border-earth-300 hover:border-earth-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              className="group block bg-white border border-earth-100 hover:border-earth-300 transition-all duration-200 hover:shadow-md"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-earth-100">
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-xs bg-earth-700 text-earth-50 px-2 py-1 tracking-wide font-serif">
                  {work.type}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-earth-400 mb-1 tracking-wide">
                  {work.date.replace(/-/g, '.')} ／ {work.location}
                </p>
                <h2 className="font-serif text-earth-800 text-base leading-snug group-hover:text-earth-600 transition-colors">
                  {work.title}
                </h2>
                <p className="text-sm text-earth-500 mt-2 leading-relaxed line-clamp-2">
                  {work.description}
                </p>
                <dl className="mt-3 text-xs text-earth-400">
                  <span>延床面積：{work.area}</span>
                </dl>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-earth-400 py-20 font-serif">
            該当する施工事例がありません。
          </p>
        )}
      </div>
    </main>
  )
}
