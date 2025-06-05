'use client';

import Senado from '../../../public/images/Senado_Federal_do_Brasil_(Flag).jpg'
import FakeNews from '../../../public/images/3cdb8d10-0736-11e8-a0cd-5ffc6ce60a85_fake-news-2127597_1920.png.cf.jpg'
import LGPD from '../../../public/images/LGPD-CONTRATE-COM-PROMOCAO-OFERTA.png'
import STJ from '../../../public/images/unnamed.png'

import PLBETS from '../../../public/images/bets-celular.jpg'
import PLFAKE from '../../../public/images/plfake.jpeg'
import LGPDFOTO from '../../../public/images/lgpd.jpeg'
import REDESSOCIAIS from '../../../public/images/20180812074324157698i-1.jpg'

import { useEffect, useRef, useState } from 'react';
import InstagramPost from '@/components/layout/InstagramPost';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const posts = [
    {
        id: 0,
        username: 'Senado',
        profileImage: Senado,
        postImage: PLBETS,
        caption: 'Influenciadores, atletas e artistas têm grande poder nas redes, mas até onde vai essa influência? O Senado aprovou um projeto de lei que proíbe a promoção de apostas (bets) por essas figuras públicas. O objetivo é proteger principalmente os jovens e evitar o incentivo ao vício em jogos online. Responsabilidade também é influência. ⚠️',
        likes: 1280,
        lastComment: {
            user: 'População',
            text: 'Isso é realmente muito bom! Vamos acabar com o "tigrinho"',
        },
    },
    {
        id: 1,
        username: 'PL_FakeNews',
        profileImage: FakeNews,
        postImage: PLFAKE,
        caption: 'Notícias falsas circulam mais rápido que a verdade. E o preço disso? Desinformação, manipulação e até violência. O PL das Fake News propõe regras claras para que plataformas identifiquem, modere e informem sobre conteúdos enganosos. Uma internet segura depende de conteúdo confiável! 🔍📰',
        likes: 945,
        lastComment: {
            user: 'População',
            text: 'Isso me ajudaria demais! Toda vez acabo me perdendo no que é falso ou verdadeiro.',
        },
    },
    {
        id: 2,
        username: 'LGPD',
        profileImage: LGPD,
        postImage: LGPDFOTO,
        caption: 'Você sabia que seus dados podem estar sendo vendidos agora mesmo? A LGPD já é um marco, mas ainda faltam políticas públicas fortes para fiscalizar, punir abusos e educar usuários. Seus dados são valiosos. Proteja o que é seu. 🔐📱',
        likes: 1732,
        lastComment: {
            user: 'População',
            text: 'Sem dúvidas a lei mais importante para nós usuários!',
        },
    },
    {
        id: 3,
        username: 'STJ',
        profileImage: STJ,
        postImage: REDESSOCIAIS,
        caption: 'Ter regras para o uso das redes sociais é fundamental para garantir que o ambiente virtual seja seguro e respeitoso. Essas políticas ajudam a proteger a imagem da empresa, evitam o vazamento de informações confidenciais e promovem o respeito entre colaboradores e seguidores. Além disso, ajudam a evitar problemas legais e crises de reputação. No mundo digital, responsabilidade e ética são tão importantes quanto no presencial. Antes de postar, pense sempre no impacto! ✅✨',
        likes: 1107,
        lastComment: {
            user: 'População',
            text: 'Sem dúvidas, isso é importantissimo! Alegria',
        },
    },
];

export default function Examples() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        const container = containerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
        }
    };

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        updateScrollButtons();
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
            window.addEventListener('resize', updateScrollButtons);
        }
        return () => {
            if (container) container.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('resize', updateScrollButtons);
        };
    }, []);

    return (
        <div className="relative max-w-[1300px] mx-auto py-12">
            <p className='font-bold text-[22px] text-[#9b4890] text-center'>POLÍTICAS PÚBLICAS</p>
            <div className="flex justify-between items-center mb-4 px-6 pt-12">
                <button
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    className={`p-2 rounded-full shadow-xl ${canScrollLeft ? 'bg-[#9b4890] cursor-pointer' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    <ChevronLeft size={24} color='white' />
                </button>
                <div
                    ref={containerRef}
                    className="flex gap-6 px-6 scroll-smooth no-scrollbar overflow-x-hidden"
                    style={{ width: 780 }}
                >
                    {posts.map((post) => (
                        <div key={post.id} className="flex-shrink-0 w-[360px]">
                            <InstagramPost {...post} />
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    className={`p-2 rounded-full shadow-xl ${canScrollRight ? 'bg-[#9b4890] cursor-pointer' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    <ChevronRight size={24} color='white' />
                </button>
            </div>
        </div>
    );
}