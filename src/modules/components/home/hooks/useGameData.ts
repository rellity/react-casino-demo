import { useEffect, useState, useMemo } from "react";
import { GAMES } from "../constants";
import { Game } from "../types";
import { useActiveTab } from "../../../store/filter-store";

export default function useGameData() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [games, setGames] = useState<Game[]>([]);
    const { searchTerm, activeTab: categoryTerm } = useActiveTab();

    // block for 3 secs
    useEffect(() => {
        const fetchGames = async () => {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setIsLoading(false);
            setGames(GAMES);
        };

        fetchGames();
    }, [searchTerm, categoryTerm]);



    const filteredGames = useMemo(() => {
        return games.filter((game) => {
            const matchesCategory = categoryTerm
                ? game.categories.includes(categoryTerm.toLowerCase())
                : true;

            const matchesSearchTerm = game.name.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearchTerm;
        });
    }, [games, searchTerm, categoryTerm]);

    return { filteredGames, isLoading };
}
