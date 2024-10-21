import { SkeletonLoader } from "../../shared/skeleton-laoder";

import useGameData from "../hooks/useGameData";



export default function GameSection() {
    const { filteredGames, isLoading } = useGameData()
    return (
        <div className="p-4">
            <div className="grid grid-cols-2 max-md:grid-cols-3 gap-1.5">
                {isLoading
                    ? Array(6)
                        .fill(0)
                        .map((_, index) => <SkeletonLoader key={index} />)
                    : filteredGames.length > 0
                        ? filteredGames.map((game) => (
                            <div
                                key={game.name}
                                className="relative rounded-lg overflow-hidden shadow-lg aspect-square"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-75" />
                                <img
                                    src={game.icon}
                                    alt={game.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <div className="flex flex-wrap gap-1"></div>
                                </div>
                            </div>
                        ))
                        : <p className="text-gray-500 text-nowrap">No games found.</p>}
            </div>
        </div>
    );
}
