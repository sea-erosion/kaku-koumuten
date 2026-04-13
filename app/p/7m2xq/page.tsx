import ShinkaiClient from './ShinkaiClient'

export const metadata = {
  robots: { index: false, follow: false },
}

export default function ShinkaiPage() {
  return <ShinkaiClient />
}
