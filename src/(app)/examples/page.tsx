'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InstagramPost from '@/components/layout/InstagramPost';

import Senado from '../../../public/images/Senado_Federal_do_Brasil_(Flag).jpg';
import FakeNews from '../../../public/images/3cdb8d10-0736-11e8-a0cd-5ffc6ce60a85_fake-news-2127597_1920.png.cf.jpg';
import LGPD from '../../../public/images/LGPD-CONTRATE-COM-PROMOCAO-OFERTA.png';
import STJ from '../../../public/images/unnamed.png';

import PLBETS from '../../../public/images/bets-celular.jpg';
import PLFAKE from '../../../public/images/plfake.jpeg';
import LGPDFOTO from '../../../public/images/lgpd.jpeg';
import REDESSOCIAIS from '../../../public/images/20180812074324157698i-1.jpg';

const posts = [
    {
        id: 0,
        username: 'Senado',
        profileImage: Senado,
        postImage: PLBETS,
        caption: 'Influenciadores, atletas e artistas têm grande poder nas redes...',
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
        caption: 'Notícias falsas circulam mais rápido que a verdade...',
        likes: 945,
        lastComment: {
            user: 'População',
            text: 'Isso me ajudaria demais!',
        },
    },
    {
        id: 2,
        username: 'LGPD',
        profileImage: LGPD,
        postImage: LGPDFOTO,
        caption: 'Você sabia que seus dados podem estar sendo vendidos agora mesmo?...',
        likes: 1732,
        lastComment: {
            user: 'População',
            text: 'Sem dúvidas a lei mais importante!',
        },
    },
    {
        id: 3,
        username: 'STJ',
        profileImage: STJ,
        postImage: REDESSOCIAIS,
        caption: 'Ter regras para o uso das redes sociais é fundamental...',
        likes: 1107,
        lastComment: {
            user: 'População',
            text: 'Sem dúvidas, isso é importantissimo!',
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

    const scrollByOneCard = (direction: 'left' | 'right') => {
        const container = containerRef.current;
        if (!container) return;

        const card = container.querySelector('div > div');
        const cardWidth = card ? (card as HTMLElement).offsetWidth : 360;

        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    useEffect(() => {
        updateScrollButtons();
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
            window.addEventListener('resize', updateScrollButtons);
        }
        return () => {
            container?.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('resize', updateScrollButtons);
        };
    }, []);

    return (
        <div className="relative max-w-[1300px] mx-auto py-12 px-4">
            <p className="font-bold text-[22px] text-[#9b4890] text-center">POLÍTICAS PÚBLICAS</p>

            <div className="relative flex items-center mt-12">
                <button
                    onClick={() => scrollByOneCard('left')}
                    disabled={!canScrollLeft}
                    aria-label="Scroll para a esquerda"
                    className={`p-2 rounded-full shadow-xl absolute left-0 z-10 bg-[#9b4890] text-white disabled:bg-gray-400 disabled:cursor-not-allowed`}
                >
                    <ChevronLeft size={24} />
                </button>

                <div
                    ref={containerRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar w-full snap-x snap-mandatory"
                >
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="flex-shrink-0 w-full max-w-[360px] snap-center"
                        >
                            <InstagramPost {...post} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scrollByOneCard('right')}
                    disabled={!canScrollRight}
                    aria-label="Scroll para a direita"
                    className={`p-2 rounded-full shadow-xl absolute right-0 z-10 bg-[#9b4890] text-white disabled:bg-gray-400 disabled:cursor-not-allowed`}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
