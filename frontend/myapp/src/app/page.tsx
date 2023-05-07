import Image from 'next/image'
import Landing from '../../components/Landing'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
        <Landing />
      </div>
    </main>
  )
}