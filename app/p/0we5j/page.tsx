import MibunshouClient from './MibunshouClient'

export const metadata = {
  robots: { index: false, follow: false },
}

export default function MibunshouPage() {
  return <MibunshouClient />
}
