import { useActiveTab } from "../../../store/filter-store";
import { SearchIcon } from "../icons/search";
import { NAVSeparator } from "../icons/separator-grey";
import MidBar from "./tab-selector";

export const MidNavSection = () => {
    const { search, setSearch } = useActiveTab();
    return <div className="w-screen flex flex-row items-center justify-center">
        <button
            onClick={() => setSearch(!search)}
            className={`flex flex-col items-center justify-center p-2 ${search ? 'text-[#00A6FF]' : 'text-gray-400'
                } hover:text-yellow-300 transition-colors min-w-[80px]`}
        >
            <SearchIcon active={search} />
            <span className="text-xs mt-1 whitespace-nowrap">SEARCH</span>
        </button>
        <NAVSeparator />
        <MidBar />

    </div>
}

