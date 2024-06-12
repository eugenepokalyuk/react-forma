import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Sheet: React.FC<SheetProps> = ({ isOpen, onClose, children }) => {
    const sheetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-end justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div ref={sheetRef} className="relative bg-white dark:bg-gray-800 w-full max-w-md mx-auto rounded-t-3xl p-4 z-[99999]">
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Sheet;