import { createContext, useContext, useState, ReactNode } from 'react';
import { Game } from '../components/home/types';

interface ActiveTabContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    search: boolean;
    setSearch: (search: boolean) => void;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    activeBottomNav: string;
    setActiveBottomNav: (activeBottomNav: string) => void;
    favGame: Game[];
    setFavGame: (favGame: Game[]) => void;
    openProvider: boolean;
    setOpenProvider: (openProvider: boolean) => void;
    gameProvider: string;
    setGameProvider: (gameProvider: string) => void;
}

const ActiveTabContext = createContext<ActiveTabContextType | undefined>(undefined);

export const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState('START');
    const [search, setSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeBottomNav, setActiveBottomNav] = useState('SPORTS');
    const [favGame, setFavGame] = useState<Game[]>([]);
    const [openProvider, setOpenProvider] = useState(false);
    const [gameProvider, setGameProvider] = useState("");

    return (
        <ActiveTabContext.Provider value={{ activeTab, setActiveTab, search, setSearch, searchTerm, setSearchTerm, activeBottomNav, setActiveBottomNav, favGame, setFavGame, openProvider, setOpenProvider, gameProvider, setGameProvider }}>
            {children}
        </ActiveTabContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useActiveTab = () => {
    const context = useContext(ActiveTabContext);
    if (context === undefined) {
        throw new Error('useActiveTab must be used within an ActiveTabProvider');
    }
    return context;
};