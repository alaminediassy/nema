import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main className="w-full h-screen pb-20 bg-bodyColor text-white overflow-x-hidden
    overflow-y-scroll">
      <Navbar/>
      <Header/>
      <About/>
    </main>
  )
}
