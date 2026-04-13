'use client'

import { useMemo } from 'react'

const CORRUPTED = '[データ破損]'

function maybeCorrupt(text: string, seed: number, prob = 0.4): string {
  const hash = (text + seed).split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return (hash % 100) < prob * 100 ? CORRUPTED : text
}

const ROWS = [
  { label: '区画名',   value: '未分類 X' },
  { label: '座標',     value: '—' },
  { label: '面積',     value: '—㎡' },
  { label: '担当',     value: '—' },
  { label: '測定値',   value: '取得不能' },
  { label: '境界状態', value: '不明' },
]

const LINES = [
  'この区画は分類されていません。',
  '記録は存在しますが、内容は確認できません。',
  '担当者への連絡は行われていません。',
  '完工日は決定されていません。',
  '次の測定予定は記録されていません。',
]

export default function MibunshouClient() {
  const seed = useMemo(() => Math.floor(Math.random() * 999), [])

  return (
    <div style={{ backgroundColor: '#0d0d0e', minHeight: '100vh', fontFamily: '"Courier New", "Noto Sans JP", monospace', color: '#5a6070', padding: '3rem 2rem' }}>
      {/* 分類: 未定義 / アクセス記録: 残存 */}
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: '#3a3a48', marginBottom: '3rem', textTransform: 'uppercase' }}>
          Zone X — {maybeCorrupt('未分類', seed)}
        </p>
        <dl style={{ marginBottom: '2.5rem', fontSize: '0.8rem' }}>
          {ROWS.map(({ label, value }, i) => (
            <div key={label} style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.6rem' }}>
              <dt style={{ width: '80px', color: '#3a3a50' }}>{label}</dt>
              <dd style={{ margin: 0, color: '#505868' }}>{maybeCorrupt(value, seed + i)}</dd>
            </div>
          ))}
        </dl>
        <div style={{ borderTop: '1px solid #1e1e28', paddingTop: '2rem' }}>
          {LINES.map((line, i) => (
            <p key={i} style={{ fontSize: '0.85rem', lineHeight: 2, marginBottom: '0.5rem', color: '#404858' }}>
              {maybeCorrupt(line, seed + 10 + i, 0.5)}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
