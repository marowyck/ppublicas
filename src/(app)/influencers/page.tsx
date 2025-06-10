import Image from "next/image";
import CamilaLoures from '../../../public/images/CamilaLoures.jpg';
import Dynho from '../../../public/images/Dynho.jpg';
import JonVlogs from '../../../public/images/JonVlogs.jpg';
import Neymar from '../../../public/images/Neymar.jpg';
import Rico from '../../../public/images/Rico.jpg';
import Virginia from '../../../public/images/Virginia.jpg';

export default function Influencers() {
    return (
        <div className="flex flex-col p-6 max-w-screen mx-auto">
            <div className="flex flex-col gap-4 py-[40px]">
                <p className="font-bold text-[22px] text-[#9b4890] text-center">INFLUENCIADORES</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 border-2 border-[#9b4890] rounded-lg p-3">
                <div className="flex flex-col gap-3 flex-shrink-0
                                overflow-x-auto lg:overflow-visible
                                snap-x snap-mandatory
                                scrollbar-hide
                                lg:flex-row lg:flex-wrap lg:w-[600px]">

                    <div className="flex gap-3 snap-center min-w-[280px] lg:min-w-auto">
                        <Image src={CamilaLoures} alt="Perfil de um homem em alguma rede social qualquer." width={280} className="rounded-lg flex-shrink-0" />
                        <Image src={Dynho} alt="Perfil de um homem em alguma rede social qualquer." width={280} className="rounded-lg flex-shrink-0" />
                        <Image src={JonVlogs} alt="Perfil de um homem em alguma rede social qualquer." width={280} className="rounded-lg flex-shrink-0" />
                    </div>

                    <div className="flex gap-3 snap-center min-w-[280px] lg:min-w-auto">
                        <Image src={Neymar} alt="Perfil de um homem em alguma rede social qualquer." width={280} className="rounded-lg flex-shrink-0" />
                        <Image src={Rico} alt="Perfil de um homem em alguma rede social qualquer." width={280} className="rounded-lg flex-shrink-0" />
                        <Image src={Virginia} alt="Perfil de um homem em alguma rede social qualquer." width={280} className="rounded-lg flex-shrink-0" />
                    </div>
                </div>

                <div className="flex flex-col bg-[#fad0f4] rounded-lg p-6 gap-3 flex-grow">
                    <p className="text-lg px-6 font-semibold text-[#9b4890]">Você sabe o que esses influenciadores das imagens têm em comum?</p>
                    <p className="text-lg px-6 text-[#262626]">Eles estão todos promovendo jogos de azar, como o famoso “jogo do tigrinho” e sites de bets (apostas online). Mas o que parece diversão ou “dinheiro fácil” nas redes sociais esconde um cenário muito mais complexo e perigoso.</p>
                    <p className="text-lg px-6 text-[#262626]">Esses influenciadores geralmente ostentam ganhos altíssimos, mostram carros de luxo, viagens e uma vida de ostentação que atrai jovens e pessoas em situação financeira delicada. O problema? A maioria desses ganhos é exagerada, encenada ou vem de parcerias com os próprios sites de apostas, que lucram com as perdas dos jogadores.</p>
                    <p className="text-lg px-6 text-[#262626]">Muitos influenciadores recebem comissões altíssimas por cada novo usuário que se cadastra usando seus links. Em vez de ajudar seus seguidores, estão lucrando com o vício alheio.</p>
                    <p className="text-lg px-6 text-[#262626]">Em resumo: o que eles têm em comum é que todos estão vendendo uma ilusão — e muita gente está comprando.</p>
                </div>
            </div>
        </div>
    )
}
