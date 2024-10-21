import React from 'react';
import { BottomNavItems } from '../home/constants';
import { useActiveTab } from '../../store/filter-store';

const BottomNav = () => {
    const { activeBottomNav, setActiveBottomNav } = useActiveTab();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <ul className="flex justify-around items-center h-16">
                {BottomNavItems.map((nav) => <NavItem Icon={nav.Icon} label={nav.label} active={activeBottomNav === nav.label} onClick={setActiveBottomNav} />)}
            </ul>
        </nav>
    );
};


const NavItem = ({ Icon, label, active, onClick }: { Icon: React.ElementType, label: string, active?: boolean, onClick: (label: string) => void }) => {
    return (
        <li className={`flex flex-col items-center`}>
            <button
                className={`flex flex-col items-center justify-center w-full h-full ${active ? 'text-blue-500' : 'text-gray-500'}`}
                onClick={() => onClick(label)}
            >   <div className={`${active && "p-1 ring-2 rounded-full ring-[#00A6FF] ring-opacity-50"}`}>
                    <Icon active={active} />
                </div>

                <span className="mt-1 text-xs font-medium">{label}</span>
            </button>
        </li>
    );
};

export default BottomNav;