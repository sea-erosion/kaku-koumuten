export const metadata = {
  robots: { index: false, follow: false },
}

const hints = [
  {
    number: '01',
    text: 'フッターのHTMLコメントを確認してください。',
  },
  {
    number: '02',
    text: '施工事例の画像の説明文（altテキスト）を読んでください。',
  },
  {
    number: '03',
    text: '会社の沿革に、不思議な年が混入しています。',
  },
  {
    number: '04',
    text: 'APIエンドポイント /api/boundary を確認してください。',
  },
  {
    number: '05',
    text: 'お問い合わせフォームには、正確な言葉が必要です。',
  },
  {
    number: '06',
    text: 'サービスページのStep 6は、通常は見えません。',
  },
]

export default function HelpPage() {
  return (
    <div
      style={{
        backgroundColor: '#fafaf8',
        minHeight: '100vh',
        fontFamily: '"Noto Serif JP", serif',
        padding: '4rem 2rem',
      }}
    >
      <div style={{ maxWidth: '520px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: '#b0ada8', marginBottom: '3rem', textTransform: 'uppercase' }}>
          救済ルート — Help
        </p>

        <h1 style={{ fontSize: '1.2rem', color: '#5a5550', marginBottom: '0.75rem', fontWeight: 'normal' }}>
          手がかりの一覧
        </h1>
        <p style={{ fontSize: '0.8rem', color: '#9a9790', lineHeight: 2, marginBottom: '3rem' }}>
          各ページのソースコードには、手がかりが隠されています。<br />
          お問い合わせフォームには、正確な言葉が必要です。
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {hints.map((hint) => (
            <li
              key={hint.number}
              style={{
                display: 'flex',
                gap: '1.5rem',
                padding: '1.25rem 0',
                borderBottom: '1px solid #e8e5e0',
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: '0.65rem', color: '#c8c5c0', letterSpacing: '0.1em', paddingTop: '0.2rem', width: '24px', flexShrink: 0 }}>
                {hint.number}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#7a7570', lineHeight: 1.8 }}>
                {hint.text}
              </span>
            </li>
          ))}
        </ul>

        <p style={{ marginTop: '3rem', fontSize: '0.75rem', color: '#c0bdb8', lineHeight: 2 }}>
          行き詰まったときは、もう一度最初から見直してください。<br />
          すべての入口は、すでに目の前にあります。
        </p>
      </div>
    </div>
  )
}
