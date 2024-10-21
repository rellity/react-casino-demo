
import TopBar from "../../modules/components/navs/topbar"
import { BellIcon } from "../../modules/components/home/icons/bell";
import { MidNavSection } from "../../modules/components/home/section/mid-nav-section";
import { SearchSection } from "../../modules/components/home/section/search-section";
import { useActiveTab } from "../../modules/store/filter-store";
import { BannerCarousel } from "../../modules/components/home/section/banner-carousel";
import GameSection from "../../modules/components/home/section/games-section";
import BottomNav from "../../modules/components/navs/bottomnav";
import GameProviders from "../../modules/components/home/section/game-providers";
import { ProviderModal } from "../../modules/components/home/modal/provider-modal";



export default function HomePage() {

    const { search } = useActiveTab();

    return (
        <div className="overflow-hidden">
            <TopBar />

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center p-2 pb-1">
                    <BannerCarousel />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <BellIcon />
                    <h2 className="text-[#00A6FF] text-[1rem]">¡FELICIDADES artxxxxipa! GANADOR DESTACADO</h2>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <MidNavSection />
                    {search && <SearchSection />}
                </div>
            </div>
            <GameSection />

            <GameProviders />

            <ProviderModal />

            <BottomNav />
        </div>
    );
}