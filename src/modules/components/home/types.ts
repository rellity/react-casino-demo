export type NavItemData = {
    icon: React.ElementType;
    label: string;
    isSearchIcon?: boolean;
}

// @typescript-eslint/no-unused-vars
export type NavItemProps = {
    Icon: React.ElementType;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export type Game = {
    id: string
    name: string;
    icon: string;
    categories: string[];
    provider: string;
};