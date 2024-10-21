import { useEffect, useState, useMemo } from "react";
import { GAMES } from "../constants";
import { Game } from "../types";
import { useActiveTab } from "../../../store/filter-store";

export default function useGameData() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [games, setGames] = useState<Game[]>([]);
    const { searchTerm, activeTab: categoryTerm, activeBottomNav, favGame, gameProvider } = useActiveTab();


    // block for 3 secs
    useEffect(() => {
        const fetchGames = async () => {
            setGames([])
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsLoading(false);
            setGames(activeBottomNav === "FAVORITES" ? favGame : GAMES);
        };

        fetchGames();
    }, [searchTerm, categoryTerm, activeBottomNav, favGame, gameProvider]);


    const filteredGames = useMemo(() => {
        return games.filter((game) => {
            const matchesCategory = categoryTerm
                ? game.categories.includes(categoryTerm.toLowerCase())
                : true;

            const matchesSearchTerm = game.name.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesProvider = gameProvider
                ? game.provider.toLowerCase() === gameProvider.toLowerCase()
                : true;

            return matchesCategory && matchesSearchTerm && matchesProvider;
        });
    }, [games, searchTerm, categoryTerm, gameProvider]);

    return { filteredGames, isLoading };
}
