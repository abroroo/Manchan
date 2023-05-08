import Landing from '../components/Landing'


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between ">
      <div className="mt-32">
        <Landing />
      </div>
    </main>
  )
}


// flex min-h-screen flex-col items-center justify-between p-24
// z-10 w-full max-w-5xl items-center justify-center lg:flex