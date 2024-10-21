import { createContext, useContext, useState, ReactNode } from 'react';

interface ActiveTabContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    search: boolean;
    setSearch: (search: boolean) => void;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

const ActiveTabContext = createContext<ActiveTabContextType | undefined>(undefined);

export const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState('START');
    const [search, setSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <ActiveTabContext.Provider value={{ activeTab, setActiveTab, search, setSearch, searchTerm, setSearchTerm }}>

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