import { Transition } from "@/components/Transition/Transition";
import { Cover } from './Cover'
import { Header } from '@/components/Header'



export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Transition />
            <Cover />
            <Header />
        </div>
    )
}
