"use client";

import { BookMarked } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex sticky bg-white p-6 border-b border-[#9b4890] shadow-xl items-center justify-between">
      <div className="flex-grow flex justify-center">
        <p className="font-bold text-[22px] text-[#9b4890] text-center">
          POLÍTICAS PÚBLICAS VOLTADAS PARA REDES SOCIAIS E RESPONSABILIDADE
        </p>
      </div>

      <Link href="/references">
        <button className="bg-[#9b4890] rounded-lg p-2 cursor-pointer ml-4 shadow-lg">
          <BookMarked color="white" />
        </button>
      </Link>
    </div>
  );
}
