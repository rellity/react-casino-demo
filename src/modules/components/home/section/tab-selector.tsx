import { useRef, useEffect } from 'react';
import { NavItemProps } from '../types';
import { useActiveTab } from '../../../store/filter-store';
import { navItems } from '../constants';


const NavItem = ({ Icon, label, isActive, onClick }: NavItemProps) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center p-0.5 px-1 ${isActive ? 'text-[#00A6FF]' : 'text-gray-400'
            } min-w-[60px]`}
    >
        <Icon size={24} active={isActive} />
        <span className={`text-xs mt-1 whitespace-nowrap ${isActive ? "text-[#00A6FF] underline" : "text-gray-400"
            }`}>{label}</span>
    </button>
);

const MidBar = () => {
    const { activeTab, setActiveTab } = useActiveTab();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 0;
        }
    }, []);

    return (
        <div className="w-screen overflow-x-auto no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className='flex flex-row items-center p-0.5 min-w-max' ref={scrollRef}>
                {navItems.map((item) => (
                    <NavItem
                        key={item.label}
                        Icon={item.icon}
                        label={item.label}
                        isActive={activeTab === item.label}
                        onClick={() => setActiveTab(item.label)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MidBar;