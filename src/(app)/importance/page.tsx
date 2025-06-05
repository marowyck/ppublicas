import Facebook from '../../../public/images/Facebook.svg'
import Image from 'next/image'

export default function Importance() {
    return (
        <div className="flex flex-row-reverse bg-[#fad0f4]">
            <div className='pt-8'>
                <Image
                    src={Facebook}
                    alt={'Imagem de um celular branco com várias curtidas aparecendo.'}
                    width={1200}
                />
            </div>
            <div className='flex flex-col gap-4 py-[80px] px-6'>
                <p className='font-bold text-[22px] text-[#9b4890] text-center'>IMPORTÂNCIA</p>

                <div>
                    <p className='text-lg px-6 font-semibold text-[#9b4890]'>
                        Garantia dos direitos dos usuários
                    </p>
                    <p className='text-lg px-6 text-[#262626]'>
                        As políticas públicas são fundamentais para assegurar que os direitos básicos dos usuários sejam respeitados nas redes sociais, como liberdade de expressão, privacidade e acesso à informação confiável.
                    </p>
                </div>

                <div>
                    <p className='text-lg px-6 font-semibold text-[#9b4890]'>
                        Combate à desinformação
                    </p>
                    <p className='text-lg px-6 text-[#262626]'>
                        Por meio de legislações e regulamentações específicas, é possível combater a disseminação de <span className='italic'>fake news</span>, protegendo a sociedade contra informações falsas que possam causar danos sociais, políticos ou à saúde pública.
                    </p>
                </div>

                <div>
                    <p className='text-lg px-6 font-semibold text-[#9b4890]'>
                        Promoção de um ambiente digital saudável
                    </p>
                    <p className='text-lg px-6 text-[#262626]'>
                        A regulamentação ajuda a criar um espaço online mais seguro e ético, coibindo práticas abusivas como discurso de ódio, cyberbullying e crimes virtuais, além de incentivar o uso consciente das plataformas.
                    </p>
                </div>

                <div>
                    <p className='text-lg px-6 font-semibold text-[#9b4890]'>
                        Transparência e responsabilidade das plataformas
                    </p>
                    <p className='text-lg px-6 text-[#262626]'>
                        Políticas públicas exigem que empresas responsáveis por redes sociais atuem com mais transparência em seus algoritmos e processos de moderação de conteúdo, além de prestarem contas ao público e às autoridades competentes.
                    </p>
                </div>

                <div>
                    <p className='text-lg px-6 font-semibold text-[#9b4890]'>
                        Inclusão digital e acesso equitativo
                    </p>
                    <p className='text-lg px-6 text-[#262626]'>
                        Por meio de programas e incentivos, o Estado pode ampliar o acesso à internet e às redes sociais para populações marginalizadas, promovendo maior inclusão digital e igualdade no ambiente virtual.
                    </p>
                </div>
            </div>
        </div>
    )
}
