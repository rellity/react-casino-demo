
import TopBar from "../../modules/components/navs/topbar"
import banner from "../../assets/banner.svg"
import { BellIcon } from "../../modules/components/home/icons/bell";

export default function HomePage() {
    return (
        <div>
            <TopBar />
            <main className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center p-2 pb-1">
                    <img src={banner} alt="banner" className="w-[360px] h-[181px] object-cover" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <BellIcon />
                    <h2 className="text-[#00A6FF] text-[1rem]">¡FELICIDADES artxxxxipa! GANADOR DESTACADO</h2>
                </div>

                <div>

                </div>
            </main>
        </div>
    );
}