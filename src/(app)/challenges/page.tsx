export default function Challenges() {
    return (
        <div className="flex bg-white">
            <div className="flex flex-col gap-4 py-[80px] px-12 w-full">
                <p className="font-bold text-[22px] text-[#9b4890] text-center">DESAFIOS</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <p className="text-lg font-semibold text-[#9b4890]">
                            Desinformação e Resistência Popular
                        </p>
                        <p className="text-lg text-[#262626]">
                            Grande parte da população brasileira ainda não tem acesso a informações confiáveis sobre o funcionamento e os objetivos das políticas públicas. Isso abre espaço para a disseminação de fake news e teorias da conspiração, que acabam gerando resistência, desconfiança ou até rejeição a projetos que visam o bem coletivo. Por exemplo, propostas de regulação das redes sociais costumam ser mal interpretadas como censura, quando na verdade visam combater crimes digitais.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-[#9b4890]">
                            Falta de legislação atualizada
                        </p>
                        <p className="text-lg text-[#262626]">
                            A criação de leis no Brasil segue um processo longo e muitas vezes politizado. Isso faz com que as normas legais demorem a acompanhar as transformações tecnológicas. Enquanto novas redes sociais, aplicativos e práticas digitais surgem quase diariamente, a legislação ainda lida com conceitos ultrapassados. Isso dificulta a regulamentação de temas como inteligência artificial, algoritmos, proteção de dados e influência digital.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-[#9b4890]">
                            Interesses econômicos e lobby
                        </p>
                        <p className="text-lg text-[#262626]">
                            Grandes empresas de tecnologia, publicidade e apostas têm interesses econômicos muito fortes e frequentemente atuam por meio de lobbies para impedir a aprovação de leis que possam afetar seus lucros. Isso enfraquece o avanço de políticas públicas que visam o bem comum, como a proibição de publicidade de jogos de azar com influenciadores ou a exigência de maior transparência nas redes sociais.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-[#9b4890]">
                            Infraestrutura e desigualdade digital
                        </p>
                        <p className="text-lg text-[#262626]">
                            Apesar do avanço da tecnologia, o Brasil ainda sofre com um acesso desigual à internet e aos meios digitais. Muitas regiões, principalmente em áreas rurais e periféricas, têm conexões instáveis, falta de dispositivos e pouca capacitação digital. Isso torna desafiadora a implementação de políticas públicas que dependem de conectividade ou da participação ativa dos cidadãos online.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-[#9b4890]">
                            Burocracia e má gestão
                        </p>
                        <p className="text-lg text-[#262626]">
                            A estrutura burocrática brasileira dificulta a aplicação prática das políticas públicas. Mesmo quando aprovadas e financiadas, muitas iniciativas esbarram na má gestão dos recursos, atrasos em licitações, falta de pessoal capacitado e ausência de mecanismos eficazes de fiscalização e acompanhamento. Sem execução eficiente, a política fica apenas no papel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
