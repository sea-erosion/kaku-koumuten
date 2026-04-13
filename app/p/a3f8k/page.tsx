export const metadata = {
  robots: { index: false, follow: false },
}

// <!-- 次: もっと深く -->

export default function SeiikiPage() {
  return (
    <html lang="ja" data-silent="true">
      <body style={{ margin: 0, backgroundColor: '#fafaf9', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <main style={{ maxWidth: '480px', padding: '3rem 2rem', fontFamily: '"Noto Serif JP", serif' }}>
          {/* 次: もっと深く */}
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#c0bdb8', marginBottom: '3rem', textTransform: 'uppercase' }}>
            Zone A — 静域
          </p>
          <div style={{ color: '#a09d98', lineHeight: 2, fontSize: '0.9rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>この区画は静域に分類されます。</p>
            <dl style={{ fontSize: '0.8rem', color: '#bbb8b3', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.5rem' }}>
                <dt style={{ width: '80px' }}>測定値</dt>
                <dd style={{ margin: 0 }}>安定</dd>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.5rem' }}>
                <dt style={{ width: '80px' }}>面積</dt>
                <dd style={{ margin: 0 }}>報告済み</dd>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <dt style={{ width: '80px' }}>音圧</dt>
                <dd style={{ margin: 0 }}>0.000 dB</dd>
              </div>
            </dl>
            <p style={{ borderTop: '1px solid #e8e5e0', paddingTop: '1.5rem', color: '#c8c5c0', fontSize: '0.8rem' }}>
              ご来場の際は、静かにしていてください。
            </p>
          </div>
        </main>
      </body>
    </html>
  )
}
