import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex sticky bg-white border-t border-t-[#9b4890] shadow-xl items-center justify-between">
            <div className="flex-grow flex justify-center">
                <p className="font-bold text-xs text-[#9b489060] text-center">
                    &copy;MOCS DEV - Todos os direitos reservados. 2025
                </p>
            </div>
            <Link href="https://www.instagram.com/mocsdev/" target="_blank">
                <button className="bg-[#9b4890] rounded-lg p-2 m-2 cursor-pointer ml-4 shadow-lg">
                    <ExternalLink color="white" />
                </button>
            </Link>
        </div>
    );
}
