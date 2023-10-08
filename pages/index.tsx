import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main className="w-full pb-20 bg-bodyColor text-white">
      <Navbar/>
      <Header/>
      <About/>
    </main>
  )
}
