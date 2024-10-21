import { useState, useEffect, useRef, ReactNode } from 'react';
import { InfoIcon } from '../icons/info';
import { Providers } from '../constants';

const BottomModal = ({ children, title, isOpen, onClose }: { children: ReactNode, title: string, isOpen: boolean, onClose: () => void }) => {
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible, onClose]);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-50 bg-white shadow-lg rounded-t-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
            ref={modalRef}
        >
            <div className="">
                <div className='flex flex-row justify-between items-center p-2 bg-[#00A6FF]'>
                    {title && (
                        <div className='flex flex-row items-center gap-x-2'>
                            <InfoIcon />
                            <h3 className="text-base font-medium leading-6 text-white">{title}</h3>
                            <h3 className='rounded-full border border-white text-white px-3'>{Providers.length}</h3>
                        </div>
                    )}
                    <p className='bg-inherit mr-1 text-white' onClick={onClose}>X</p>
                </div>
                <div className="mt-2">{children}</div>
            </div>
        </div>
    );
};

export default BottomModal;