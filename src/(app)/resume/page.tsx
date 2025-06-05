import Profile from '../../../public/images/Profile.svg'
import Image from 'next/image'

export default function Resume() {
    return (
        <div className='flex p-6'>
            <div className='pt-8'>
                <Image src={Profile} alt={'Perfil de um homem em alguma rede social qualquer.'} width={1200} />
            </div>
            <div className='flex flex-col gap-4 py-[80px]'>
                <p className='font-bold text-[22px] text-[#9b4890] text-center'>RESUMO</p>
                <div>
                    <p className='text-lg px-6 font-semibold text-[#9b4890] text-center'>Qual a importância das redes sociais?</p>
                    <p className='text-lg px-6'>É indiscutível que as redes sociais desempenham um papel fundamental na sociedade contemporânea, sendo uma ferramenta essencial para comunicação, disseminação de informações, mobilização social e entretenimento. Elas são as responsáveis por conectar pessoas de diferentes lugares do mundo em tempo real, sendo elas ideias, notícias ou opiniões.</p>
                </div>
                <div>
                    <p className='text-lg px-6 font-semibold text-[#9b4890] text-center'>Mas será que elas apresentam apenas pontos positivos?</p>
                    <p className='text-lg px-6'>Infelizmente, esse impacto das redes sociais também são utilizados de maneira negativa, sendo na disseminação de <span className='italic'>fake news</span>, violação de privacidade, discursos de ódio, exposição excessiva e divulgações indevidas.</p>
                </div>
                <div>
                    <p className='text-lg px-6 font-semibold text-[#9b4890] text-center'>Por que as políticas públicas se tornam tão importantes para os internautas?</p>
                    <p className='text-lg px-6'>As políticas públicas são demasiadamente importantes visto que elas visam garantir o direito dos usuários, regularizar publicidade e uso responsável, combater anúncios nocivos e promover transparência das redes. Dessa forma, polícas públicas garantem um ambiente digital mais seguro e ético.</p>
                </div>
            </div>
        </div>
    )
}