import AI from '../../../public/images/Artificial Intelligence 4.svg'
import Image from 'next/image'

export default function IA() {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse bg-gray-200 max-w-screen mx-auto px-6 py-12 gap-12 items-center">
            <div className='md:w-1/2 flex justify-center'>
                <Image
                    src={AI}
                    alt={'Imagem de uma mulher e um homem construindo uma cabeça de robô bem grande que representa a inteligência artificial.'}
                    width={550}
                    className="max-w-full h-auto"
                />
            </div>

            <div className='md:w-1/2 flex flex-col gap-6'>
                <p className='font-bold text-[26px] text-[#9b4890] text-center md:text-left leading-snug'>
                    INTELIGÊNCIA ARTIFICIAL: AMIGA OU INIMIGA?
                </p>

                <div className='text-[#262626] text-lg leading-relaxed text-center md:text-left'>
                    <p>
                        Nesse momento em que estamos vivendo é impossível não comentar sobre a existência da inteligência artificial, sendo ela utilizada para um código de programação, uma criação de imagem ou um auxílio para uma pesquisa acadêmica. É indubtável que essa tecnologia nos trouxe avanços indiscutívelmente favoráveis, porém a inteligência artificial e seu uso é unicamente benéfico para a sociedade?
                    </p>
                    <p className='mt-4'>
                        Por mais que possamos citar diversos pontos positivos voltados para essa tecnologia, também devemos criticar e ressaltar que o mau uso dela acaba criando diversos prejuízos para a sociedade, sendo por criar informações falsas (que devemos sempre conferir antes de qualquer coisa), ou até mesmo a criação de fotos e vídeos comprometedores.
                    </p>
                    <p className='mt-4'>
                        Por isso, devemos lembrar que vivemos em uma sociedade onde o poder move o mundo, e o que for possível buscar para anular ou diminuir o poder alheio, é viável. Criação de imagens, vídeos ou até faixas de áudio fraudulentas podem causar danos à saúde mental de um internauta ou até mesmo danos irreversíveis para um país que ousar utilizar de maneira indevida.
                    </p>
                </div>
            </div>
        </div>
    )
}
