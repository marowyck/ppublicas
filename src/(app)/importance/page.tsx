import Facebook from '../../../public/images/Facebook.svg'
import Image from 'next/image'

export default function Importance() {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse bg-[#fad0f4] p-4 md:p-6">
            <div className="flex justify-center pt-6 md:pt-8 md:w-1/2">
                <Image
                    src={Facebook}
                    alt="Imagem de um celular branco com várias curtidas aparecendo."
                    width={600}
                    className="w-full max-w-[300px] md:max-w-[600px] h-auto"
                />
            </div>
            <div className="flex flex-col gap-6 py-10 md:py-[80px] md:w-1/2">
                <p className="font-bold text-[22px] text-[#9b4890] text-center">IMPORTÂNCIA</p>

                <div>
                    <p className="text-base md:text-lg px-4 md:px-6 font-semibold text-[#9b4890]">
                        Garantia dos direitos dos usuários
                    </p>
                    <p className="text-sm md:text-lg px-4 md:px-6 text-[#262626] text-justify">
                        As políticas públicas são fundamentais para assegurar que os direitos básicos dos usuários sejam respeitados nas redes sociais, como liberdade de expressão, privacidade e acesso à informação confiável.
                    </p>
                </div>

                <div>
                    <p className="text-base md:text-lg px-4 md:px-6 font-semibold text-[#9b4890]">
                        Combate à desinformação
                    </p>
                    <p className="text-sm md:text-lg px-4 md:px-6 text-[#262626] text-justify">
                        Por meio de legislações e regulamentações específicas, é possível combater a disseminação de <span className="italic">fake news</span>, protegendo a sociedade contra informações falsas que possam causar danos sociais, políticos ou à saúde pública.
                    </p>
                </div>

                <div>
                    <p className="text-base md:text-lg px-4 md:px-6 font-semibold text-[#9b4890]">
                        Promoção de um ambiente digital saudável
                    </p>
                    <p className="text-sm md:text-lg px-4 md:px-6 text-[#262626] text-justify">
                        A regulamentação ajuda a criar um espaço online mais seguro e ético, coibindo práticas abusivas como discurso de ódio, cyberbullying e crimes virtuais, além de incentivar o uso consciente das plataformas.
                    </p>
                </div>

                <div>
                    <p className="text-base md:text-lg px-4 md:px-6 font-semibold text-[#9b4890]">
                        Transparência e responsabilidade das plataformas
                    </p>
                    <p className="text-sm md:text-lg px-4 md:px-6 text-[#262626] text-justify">
                        Políticas públicas exigem que empresas responsáveis por redes sociais atuem com mais transparência em seus algoritmos e processos de moderação de conteúdo, além de prestarem contas ao público e às autoridades competentes.
                    </p>
                </div>

                <div>
                    <p className="text-base md:text-lg px-4 md:px-6 font-semibold text-[#9b4890]">
                        Inclusão digital e acesso equitativo
                    </p>
                    <p className="text-sm md:text-lg px-4 md:px-6 text-[#262626] text-justify">
                        Por meio de programas e incentivos, o Estado pode ampliar o acesso à internet e às redes sociais para populações marginalizadas, promovendo maior inclusão digital e igualdade no ambiente virtual.
                    </p>
                </div>
            </div>
        </div>
    )
}
