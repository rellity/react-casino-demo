import { FMone } from "../home/icons/fm15";
import { MenuIcon } from "../home/icons/menu-icon";
import { ProfilePlaceHolder } from "../home/icons/profile";
import { SeparatorTop } from "../home/icons/separator";
import { Wallet } from "../home/icons/wallet";

const TopBar = () => {
    return (
        <nav className="bg-white p-4 flex justify-between items-center border-b border-[#00A6FF]">
            <div className="flex space-x-4 items-center">
                <div className="text-xl font-bold">
                    <MenuIcon />
                </div>
                <div>
                    <FMone />
                </div>
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="flex flex-row space-x-2">
                    <Wallet />
                    <div className="text-sm font-bold text-[#00A6FF]">$ 1990.6</div>
                </div>
                <SeparatorTop />
                <ProfilePlaceHolder />
            </div>
        </nav>
    );
};

export default TopBar;
