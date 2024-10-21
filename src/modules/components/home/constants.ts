import { BingoIcon } from "./icons/bingo";
import { CardsIcon } from "./icons/cards";
import { FireIcon } from "./icons/fire";
import { OtherIcon } from "./icons/icons";
import { JackpotIcon } from "./icons/jackpot-slot";
import { LiveIcon } from "./icons/liveicon";
import { NewIcon } from "./icons/new";
import { SlotIcon } from "./icons/slots";
import SugarRush from "./svgs/sugar-rush.svg"
import BigBadWolf from "./svgs/big-bad-wolf.svg"
import BookEgypt from './svgs/book-of-egypt.svg'
import Anaconda from './svgs/anaconda.svg'
import Alligator from './svgs/alligator.svg'
import Pirates from './svgs/pirates.svg'
import Maya from './svgs/maya.svg'
import { FilledStar } from "./icons/gey-star";
import { SoccerIcon } from "./icons/soccer";
import { ProfileIcon } from "./icons/contact";
import { DicesIcons } from "./icons/dices";
import { Evo } from "./icons/evo";
import { Pragmatic } from "./icons/paragmaic";
import { Expanse } from "./icons/expanse";
import { Matrix } from "./icons/matrix";

export const navItems = [
    { icon: FireIcon, label: 'START' },
    { icon: NewIcon, label: 'NEW' },
    { icon: SlotIcon, label: 'SLOTS' },
    { icon: LiveIcon, label: 'LIVE' },
    { icon: JackpotIcon, label: 'JACKPOT' },
    { icon: CardsIcon, label: 'TABLE GAMES' },
    { icon: BingoIcon, label: 'BINGO' },
    { icon: OtherIcon, label: 'OTHERS' },
];

export const GAMES = [
    { id: "1", name: "Sugar Rush", categories: ["new", "start", "slots"], icon: SugarRush, provider: "PragmaticPlay" },
    { id: "3", name: "Big Bad Wolf", categories: ["new", "live", "table games"], icon: BigBadWolf, provider: "EveryMatrix" },
    { id: "4", name: "Book of Egypt", categories: ["new", "table games"], icon: BookEgypt, provider: "EveryMatrix" },
    { id: "5", name: "Pirate: Power", categories: ["new", "start", "slots"], icon: Pirates, provider: "Expanse" },
    { id: "6", name: "Anaconda Wild 2 Powerplay Jackpot", categories: ["new", "start", "slots", "jackpot"], icon: Anaconda, provider: "Expanse" },
    { id: "7", name: "Anaconda Wild 2 Powerplay", categories: ["new", "start", "slots"], icon: Alligator, provider: "Expanse" },
    { id: "8", name: "Maya Jackpot", categories: ["new", "jackpot", "slots"], icon: Maya, provider: "Evolution" },
]

export const BottomNavItems = [
    { Icon: SoccerIcon, label: "SPORTS" },
    { Icon: FilledStar, label: "FAVORITES" },
    { Icon: ProfileIcon, label: "INVITE" },
    { Icon: DicesIcons, label: "CASINO LIVE" },
    { Icon: ProfileIcon, label: "CASHIER" },
]


export const Providers = [
    { icon: Pragmatic, label: "PragmaticPlay" },
    { icon: Matrix, label: "EveryMatrix" },
    { icon: Evo, label: "Evolution" },
    { icon: Expanse, label: "Expanse" },

]

