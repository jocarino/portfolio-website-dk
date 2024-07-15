'use client';

import { HiMenu } from 'react-icons/hi';


type FloatinButtonProps = {
    onClick: () => void;
};

export default function FloatingButton({ onClick, }: FloatinButtonProps) {

    return (
        <button
            onClick={onClick}
            className="fixed bottom-4 right-4 z-50 p-4 bg-pink-400 text-white rounded-full shadow-lg"
        >
            <HiMenu className="w-6 h-6" />
        </button>
    );
};
