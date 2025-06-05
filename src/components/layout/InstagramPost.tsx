'use client';

import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState, useRef, useEffect } from 'react';

type InstagramPostProps = {
    username: string;
    profileImage: string | StaticImageData;
    postImage: string;
    caption: string;
    likes: number;
    lastComment?: {
        user: string;
        text: string;
    };
};

export default function InstagramPost({
    username,
    profileImage,
    postImage,
    caption,
    likes,
    lastComment,
}: InstagramPostProps) {
    const [showFullCaption, setShowFullCaption] = useState(false);
    const [showFullComments, setShowFullComments] = useState(false);
    const [commentsOverflow, setCommentsOverflow] = useState(false);
    const [comments, setComments] = useState<{ user: string; text: string }[]>(lastComment ? [lastComment] : []);
    const [newComment, setNewComment] = useState('');
    const commentsRef = useRef<HTMLDivElement>(null);

    const captionLimit = 60;
    const commentMaxHeight = 5;

    const isLongCaption = caption.length > captionLimit;
    const shortCaption = isLongCaption ? caption.slice(0, captionLimit) : caption;

    useEffect(() => {
        if (commentsRef.current) {
            setCommentsOverflow(commentsRef.current.scrollHeight > 5);
        }
    }, [comments]);

    const handlePublish = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, { user: 'Estudante', text: newComment.trim() }]);
            setNewComment('');
        }
    };

    return (
        <div className="max-w-md mx-auto border border-neutral-300 rounded-md bg-white">
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                    <Image
                        src={profileImage}
                        alt={`${username} profile`}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                    />
                    <span className="ml-3 font-semibold text-sm">{username}</span>
                </div>
                <button className="text-xl font-bold">⋯</button>
            </div>

            <div className="relative w-full h-[400px]">
                <Image src={postImage} alt="Post" fill className="object-cover" />
            </div>

            <div className="flex justify-between px-4 py-2">
                <div className="flex space-x-4">
                    <Heart className="w-6 h-6" fill="#ec4a54" />
                    <MessageCircle className="w-6 h-6" />
                    <Send className="w-6 h-6" />
                </div>
                <Bookmark className="w-6 h-6" />
            </div>

            <div className="px-4 text-sm font-semibold">
                {likes.toLocaleString('pt-BR')} curtidas
            </div>

            <div className="px-4 text-sm">
                <span className="font-semibold">{username}</span>{' '}
                {showFullCaption ? caption : shortCaption}
                {isLongCaption && (
                    <button
                        onClick={() => setShowFullCaption(!showFullCaption)}
                        className="text-neutral-500 ml-1"
                    >
                        {showFullCaption ? 'ver menos' : '...mais'}
                    </button>
                )}
            </div>

            <div className="px-4 text-sm">
                <div
                    ref={commentsRef}
                    className={`transition-all duration-300 ${!showFullComments ? `max-h-[${commentMaxHeight}px] overflow-hidden` : 'max-h-full'
                        }`}
                >
                    {comments.map((comment, index) => (
                        <div key={index} className="text-neutral-900 mt-1">
                            <span className="font-semibold text-neutral-900">{comment.user}</span>{' '}
                            {comment.text}
                        </div>
                    ))}
                </div>
            </div>

            {commentsOverflow && (
                <button
                    onClick={() => setShowFullComments(!showFullComments)}
                    className="px-4 text-sm text-neutral-500 cursor-pointer mt-1"
                >
                    {showFullComments ? 'ver menos' : 'ver mais'}
                </button>
            )}

            <div className="flex items-center px-4 py-2 border-t border-neutral-300">
                <span className="text-xl">😊</span>
                <input
                    type="text"
                    placeholder="Adicione um comentário..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1 ml-3 outline-none border-none text-sm"
                />
                <button
                    onClick={handlePublish}
                    className="text-sm font-semibold text-blue-500"
                >
                    Publicar
                </button>
            </div>
        </div>
    );
}
