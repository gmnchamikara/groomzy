import { getCurrentUser } from "@/actions/getCurrentUser";
import { Redressed } from "next/font/google";
import Link from "next/link";
import Container from "../Container";
import CartCounter from "./CartCount";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";
import UserMenu from "./UserMenu";
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div
      className="
        stiky 
        top-0
        w-full 
        bg-slate-200
        z-30 
        shadow-sm"
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
            flex 
            items-center 
            justify-between 
            gap-3 
            md:gap-0"
          >
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl dark:text-orange-600`}
            >
              Groomzy
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div
              className="
            flex 
            items-center
            gap-8
            md:gap-12"
            >
              <CartCounter />
              <UserMenu currentUser={currentUser} />
              <ThemeButton />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
