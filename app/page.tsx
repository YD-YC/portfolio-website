import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import {Projects} from "@/components/Projects";
import {KeyMetrics} from "@/components/KeyMetrics";
import Experience from "@/components/Experience";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";




export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
<Experience/>
<Projects/>
            <KeyMetrics/>
 
    <Contact/>
  <Footer/>
            
        </>
    );
}
