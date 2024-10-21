import { useActiveTab } from "../../../store/filter-store";
import { Providers } from "../constants";
import BottomModal from "./parent-modal"


const GameProviderCard = ({ Icon, active, label, onClick }: { Icon: React.ElementType, active?: boolean, label: string, onClick: (label: string) => void }) => (
    <button
        onClick={() => onClick(active ? "" : label)}
        className={`flex flex-col items-center justify-center p-0.5 px-1  min-w-[60px] border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-100 ${active ? 'bg-blue-300' : 'text-gray-500'}`}
    >
        <Icon size={24} />
    </button>
);


export const ProviderModal = () => {
    const { openProvider, setOpenProvider, gameProvider, setGameProvider } = useActiveTab();

    return <BottomModal title="Game Provider" isOpen={openProvider} onClose={() => setOpenProvider(false)}>
        <div className="grid grid-cols-2 gap-1.5 px-2 mb-[100px]">
            {Providers.map((provider, index) => (
                <GameProviderCard
                    key={index}
                    label={provider.label}
                    Icon={provider.icon}
                    onClick={setGameProvider}
                    active={provider.label === gameProvider}
                />
            ))}
        </div>
    </BottomModal>
}