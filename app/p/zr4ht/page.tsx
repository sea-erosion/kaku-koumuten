// <!-- 次: これはなんですか -->

export const metadata = {
  robots: { index: false, follow: false },
}

export default function KyokaiPage() {
  return (
    <div style={{
      transform: 'scaleX(-1)',
      backgroundColor: '#f0ede8',
      minHeight: '100vh',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Noto Serif JP', serif"
    }}>
      {/* 次: これはなんですか */}
      <main style={{ maxWidth: '480px', padding: '3rem 2rem', color: '#5a5550' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: '#b0ada8', marginBottom: '3rem', textTransform: 'uppercase' }}>
          Zone D — 鏡域
        </p>
        <p style={{ lineHeight: 2, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          この区画では、すべてが反転しています。
        </p>
        <p style={{ lineHeight: 2, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          正面と背面の区別は、測定値によって決まります。
        </p>
        <dl style={{ fontSize: '0.8rem', color: '#8a8580', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.5rem' }}>
            <dt style={{ width: '80px' }}>測定値</dt>
            <dd style={{ margin: 0 }}>反転中</dd>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <dt style={{ width: '80px' }}>方向</dt>
            <dd style={{ margin: 0 }}>逆</dd>
          </div>
        </dl>
        <p style={{ fontSize: '0.75rem', color: '#b0ada8', borderTop: '1px solid #ddd9d3', paddingTop: '1.5rem' }}>
          読めていますか。
        </p>
      </main>
    </div>
  )
}
