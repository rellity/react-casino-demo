import { useId } from "react";
import { SkeletonLoader } from "../../shared/skeleton-laoder";

import useGameData from "../hooks/useGameData";
import { StarIcon } from "../icons/star";
import { useActiveTab } from "../../../store/filter-store";
import { FilledStar } from "../icons/gey-star";



export default function GameSection() {
    const randID = useId();
    const { filteredGames, isLoading } = useGameData()
    const { favGame, setFavGame } = useActiveTab()
    return (
        <div className="p-4">
            <div className="grid grid-cols-2 max-md:grid-cols-3 gap-1.5">
                {isLoading
                    ? Array(9)
                        .fill(0)
                        .map((_, index) => <SkeletonLoader key={index} />)
                    : filteredGames.length > 0
                        ? filteredGames.map((game) => (
                            <div
                                key={randID + game.id}
                                className="relative rounded-lg overflow-hidden shadow-lg aspect-square"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-75" />
                                <div className={`absolute top-0 right-0 text-white z-40 ${(favGame.find((g) => g.id === game.id)) ? "scale-75" : "p-[3px]"} cursor-pointer`} onClick={() => (favGame.find((g) => g.id === game.id)) ? setFavGame(favGame.filter((g) => g.id !== game.id)) : setFavGame([...favGame, game])}>
                                    {(favGame.find((g) => g.id === game.id)) ?
                                        <FilledStar color="yellow" active={true} /> : <StarIcon active={false} />}
                                </div>
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
                        : <div className="justify-center text-gray-500 text-nowrap cols-span-3 items-center">No games found.</div>}
            </div>
        </div>
    );
}
