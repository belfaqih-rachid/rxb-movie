import Image from "next/image";
import amazon from "../assets/amazon_PNG25.png";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  LightningBoltIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between">
      <div className="flex flex-grow  justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="brxl2:text-center whitespace-nowrap">
        <h2 className="text-3xl text-white">
          RXD <span className="text-amber-300">MOV</span>IE
        </h2>
      </div>
    </header>
  );
}

export default Header;
