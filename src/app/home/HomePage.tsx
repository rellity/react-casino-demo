
import TopBar from "../../modules/components/navs/topbar"
import { BellIcon } from "../../modules/components/home/icons/bell";
import { MidNavSection } from "../../modules/components/home/section/mid-nav-section";
import { SearchSection } from "../../modules/components/home/section/search-section";
import { useActiveTab } from "../../modules/store/filter-store";
import { BannerCarousel } from "../../modules/components/home/section/banner-carousel";
import GameSection from "../../modules/components/home/section/games-section";

export default function HomePage() {
    const { search } = useActiveTab();

    return (
        <div className="overflow-hidden">
            <TopBar />

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center p-2 pb-1">
                    {/* <img src={banner} alt="banner" className="w-[360px] h-[181px] object-cover" /> */}
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
        </div>
    );
}