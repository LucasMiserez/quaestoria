import Link from "next/link";
import {ReactNode} from "react";

interface HeaderProps {
    content: ReactNode;
}

interface pageInterface {
    url: string;
    title: string;
}

const pages : pageInterface[] = [
    {"url": "/", "title": "Home"},
]

export default function Header({ content }: HeaderProps) {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-100 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <Link href={"/"} className="flex-1 mx-2 px-2">Quaestoria</Link>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal">
                                {pages.map(page => (
                                    <li key={page.url}><Link href={page.url}>{page.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {content}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 min-h-full w-80 p-4">
                        {pages.map(page => (
                            <li key={page.url}><Link href={page.url}>{page.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}