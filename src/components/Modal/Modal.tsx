import { FC } from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as IconClose } from '../../assets/icons/close.svg';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-gradient-to-b from-[#49288A] to-[#49288B]  p-4 rounded-lg shadow-lg w-full max-w-md">
                <button className="flex justify-center items-center absolute -top-10 md:-top-8 right-0 md:-right-8 bg-white bg-opacity-50 hover:bg-opacity-100 size-8 rounded-full" onClick={onClose}>
                    <IconClose />
                </button>
                
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
};

export default Modal;
