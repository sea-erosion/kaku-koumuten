# SCPReport コンポーネント

<!-- 作成日: 2026-04-18 -->

`components/ui/SCPReport.tsx` に定義された SCP レポート風のレイアウトコンポーネントです。
Share Tech Mono + Noto Sans JP を使い、機密文書・官僚主義的な雰囲気を再現します。

---

## エクスポート一覧

| 名前 | 種別 | 用途 |
|---|---|---|
| `SCPReport` | default export | `<html>/<body>` なし。通常ページに埋め込む |
| `SCPReportPage` | named export | `<html>/<body>` ごと出力。単独ページに |
| `Redacted` | named export | 永久黒塗り `████` |
| `Classified` | named export | ホバーで一時解除される黒塗り |
| `SCPWarning` | named export | 赤い警告ボックス |
| `SCPNote` | named export | 補足・注釈ブロック |
| `SCPTable` | named export | 機密文書風テーブル |
| `SCPSection` | named export | セクションブロック単体 |
| `SCPLog` | named export | 実験・インタビュー・インシデントのログエントリ |
| `Dialog` / `DialogLine` | named export | インタビュー形式のダイアログ |
| `SCP_CSS` | named export | CSS文字列 |

---

## 基本的な使い方

### パターン A：単独ページ（隠しページなど）

```tsx
import { SCPReportPage } from '@/components/ui/SCPReport'

export default function MyPage() {
  return (
    <SCPReportPage
      itemNumber="KK-0042"
      objectClass="Euclid"
      clearance={3}
      title="静域に潜むもの"
      containmentProcedures={<p>静域への立入を制限する。</p>}
      description={<p>本現象は静域において観測される...</p>}
    />
  )
}
```

### パターン B：既存ページに埋め込む

```tsx
import SCPReport, { SCP_CSS } from '@/components/ui/SCPReport'

export default function SomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCP_CSS }} />
      <SCPReport itemNumber="KK-0001" objectClass="Safe" ... />
    </>
  )
}
```

---

## `SCPReportProps` の全オプション

```ts
interface SCPReportProps {
  itemNumber: string            // アイテム番号（必須）
  objectClass: ObjectClass      // 収容クラス（必須）
  clearance?: ClearanceLevel    // クリアランスレベル 1〜5
  title?: string                // 非公式称号
  ratings?: SCPRating[]         // 評価グリッド（省略時はクラスのみ表示）
  containmentProcedures: ReactNode  // 特別収容手順（必須）
  description: ReactNode            // 説明（必須）
  addenda?: SCPLogEntry[]           // 補遺・追記
  footerNote?: ReactNode            // フッター注記
  docMeta?: Record<string, string>  // 文書メタ（日付・番号など）
}
```

### ObjectClass

```ts
'Safe' | 'Euclid' | 'Keter' | 'Thaumiel' | 'Neutralized' | 'Pending' | 'Unclassified'
```

クラスに応じてバナーの色が自動的に変化します（Keter→赤、Euclid→橙、他→黒）。

---

## サブコンポーネントの使い方

### Redacted（永久黒塗り）

```tsx
// デフォルト（████████）
<Redacted />

// 任意のテキスト
<Redacted>情報源の名前</Redacted>
```

### Classified（ホバーで一時解除）

```tsx
<Classified>架空工務店の本当の目的</Classified>
```

マウスオーバーで赤文字で内容が表示されます。

### SCPWarning

```tsx
<SCPWarning title="緊急収容通達">
  <p>測定値が閾値を超過しました。</p>
</SCPWarning>
```

### SCPNote

```tsx
<SCPNote label="実験者コメント">
  収束は一時的なものに過ぎない。
</SCPNote>
```

### SCPTable

```tsx
<SCPTable
  caption="測定記録"
  headers={['日付', '測定値', '備考']}
  rows={[
    { cells: ['2031.03.14', '1.42', '超過'] },
  ]}
/>
```

### SCPLog（実験・インタビュー記録）

```tsx
<SCPLog
  label="補遺 KK-0091-A"
  type="experiment"
  meta={{ '実施日': '2031.01.15', '担当者': '████' }}
  content={<p>試験結果...</p>}
/>
```

`type` は `'experiment'` `'interview'` `'incident'` `'note'` から選択。

### Dialog / DialogLine（インタビュー形式）

```tsx
<Dialog>
  <DialogLine speaker="面談者">質問はありますか？</DialogLine>
  <DialogLine speaker={<Redacted />}>ここはどこですか。</DialogLine>
</Dialog>
```

---

## ファイル構成

```
components/ui/
├── SCPReport.tsx   ← コンポーネント本体
└── SCPReport.md    ← このドキュメント

app/p/
└── kk0091/
    └── page.tsx    ← 使用例（海蝕機関 観測記録 KK-0091）
```
