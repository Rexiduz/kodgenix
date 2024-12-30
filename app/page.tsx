import Encryption from '@/components/main/Encryption'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 max-w-[1600px] mx-auto">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  )
}
