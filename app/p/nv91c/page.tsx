import HankyoClient from './HankyoClient'

export const metadata = {
  robots: { index: false, follow: false },
}

export default function HankyoPage() {
  return <HankyoClient />
}
