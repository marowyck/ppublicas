import AI from '../../../public/images/Artificial Intelligence 4.svg'
import Image from 'next/image'

export default function IA() {
    return (
        <div className="flex flex-row-reverse bg-gray-200">
            <div className='pt-8'>
                <Image
                    src={AI}
                    alt={'Imagem de uma mulher e um homem construindo uma cabeça de robô bem grande que representa a inteligência artificial.'}
                    width={1200}
                />
            </div>
            <div className='flex flex-col gap-4 py-[80px] px-6'>
                <p className='font-bold text-[22px] text-[#9b4890] text-center'>INTELIGÊNCIA ARTIFICIAL: AMIGA OU INIMIGA?</p>

                <div className='flex flex-col gap-2 text-center'>
                    <p className='text-lg px-6 text-[#262626]'>
                        Nesse momento em que estamos vivendo é impossível não comentar sobre a existência da inteligência artificial, sendo ela utilizada para um código de programação, uma criação de imagem ou um auxílio para uma pesquisa acadêmica. É indubtável que essa tecnologia nos trouxe avanços indiscutívelmente favoráveis, porém a inteligência artificial e seu uso é unicamente benéfico para a sociedade? 
                    </p>
                    <p className='text-lg px-6 text-[#262626]'>
                        Por mais que possamos citar diversos pontos positivos voltados para essa tecnologia, também devemos criticar e ressaltar que o mau uso dela acaba criando diversos prejuízos para a sociedade, sendo por criar informações falsas (que devemos sempre conferir antes de qualquer coisa), ou até mesmo a criação de fotos e vídeos comprometedores.
                    </p>
                    <p className='text-lg px-6 text-[#262626]'>
                        Por isso, devemos lembrar que vivemos em uma sociedade onde o poder move o mundo, e o que for possível buscar para anular ou diminuir o poder alheio, é viável. Criação de imagens, vídeos ou até faixas de áudio fraudulentas podem causar danos à saúde mental de um internauta ou até mesmo danos irreversíveis para um país que ousar utilizar de maneira indevida.
                    </p>
                </div>
            </div>
        </div>
    )
}
