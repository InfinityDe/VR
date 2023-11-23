import { Transition } from "@/components/Transition/Transition";
import { Cover } from "./Cover";
import { Header } from '@/components/Header'



export default function page() {
    return (
        <div>
            <Transition />
            <Cover />
            <Header />
        </div>
    )
}
