import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { Menu } from "@headlessui/react";

export default function Nav() {
  const { user } = useUser();
  return (
    <div className="w-2/3 max-w-xl text-white font-light text-base">
      <nav>
        <ul className="flex justify-between">
          <li className="nav-menu-item">
            <Link href={"/movies"}>
              <a>MOVIES</a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href={"/series"}>
              <a>SERIES</a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href={"/news"}>
              <a>NEWS</a>
            </Link>
          </li>
          {user ? (
            <li className="nav-menu-item">
              <Link href={"/api/auth/logout"}>
                <a>LOGOUT</a>
              </Link>
            </li>
          ) : (
            <li className="nav-menu-item">
              <Link href={"/api/auth/login"}>
                <a>LOGIN</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
