import { useActiveTab } from "../../../store/filter-store";
import { ArrowLeft, ArrowRight } from "../icons/arrow-left";

const GameProviderCard = ({ name, games, image }: { name: string, games: number, image: string }) => {
    return (
        <div>
            <div className="rounded-md rounded-b-none flex items-center justify-center bg-[#888888]/20 p-2">
                <img src={image} alt={name} className="w-16 h-6 mb-2 " />
            </div>
            <div className="rounded-md rounded-t-none p-2 pt-0 flex flex-col items-center justify-center bg-[#888888]/10">
                <h3 className="text-xs font-semibold text-nowrap">{name}</h3>
                <p className="text-gray-500 text-xs font-normal">{games} games</p>
            </div>
        </div>
    );
};

const GameProviders = () => {
    const { setOpenProvider } = useActiveTab();

    const providers = [
        { name: 'GameArt', games: 111, image: '/gameart.png' },
        { name: 'Games Global', games: 8, image: '/GG.webp.png' },
        { name: 'Habanero', games: 206, image: '/HAB.webp.png' },
    ];

    return (
        <>
            <div className="flex flex-row items-center justify-between m-3">

                <p className="text-sm cursor-pointer " onClick={() => setOpenProvider(true)}> Proveedores de juego</p>


                <div className="flex flex-row justify-between gap-x-3">
                    <ArrowLeft />
                    <ArrowRight />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 mb-20 px-2">
                {providers.map((provider, index) => (
                    <GameProviderCard
                        key={index}
                        name={provider.name}
                        games={provider.games}
                        image={provider.image}
                    />
                ))}
            </div>
        </>
    );
};

export default GameProviders;