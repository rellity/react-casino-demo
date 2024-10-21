import { BingoIcon } from "./icons/bingo";
import { CardsIcon } from "./icons/cards";
import { FireIcon } from "./icons/fire";
import { OtherIcon } from "./icons/icons";
import { JackpotIcon } from "./icons/jackpot-slot";
import { LiveIcon } from "./icons/liveicon";
import { NewIcon } from "./icons/new";
import { SlotIcon } from "./icons/slots";
import SugarRush from "./games/sugar-rush.svg"
import BigBadWolf from "./games/big-bad-wolf.svg"
import ShaolinCrew from "./games/shaolin-crew.svg"
import BookEgypt from './games/book-of-egypt.svg'

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
    { name: "Sugar Rush", categories: ["new", "start", "slots"], icon: SugarRush },
    { name: "Big Bad Wolf", categories: ["new", "live", "table games"], icon: BigBadWolf },
    { name: "Shaolin Crew", categories: ["jackpot", "table games"], icon: ShaolinCrew },
    { name: "Book of Egypt", categories: ["new", "table games"], icon: BookEgypt },
    { name: "Sugar Rush", categories: ["new", "start", "slots"], icon: SugarRush },
    { name: "Sugar Rush", categories: ["new", "start", "slots"], icon: SugarRush },
    { name: "Sugar Rush", categories: ["new", "start", "slots"], icon: SugarRush },
    { name: "Sugar Rush", categories: ["new", "start", "slots"], icon: SugarRush },
    { name: "Sugar Rush", categories: ["new", "start", "slots"], icon: SugarRush },
    { name: "Sugar Rush", categories: ["new", "start", "slots"], icon: SugarRush },
]

