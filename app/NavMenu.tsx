import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from './api/auth/[...nextauth]/route';
import Image from 'next/image';
export default async function NavMenu() {
    const session = await getServerSession(authOptions);

    return (
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="h-[60px] font-medium flex items-center justify-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                    <Link
                        href={'/'}
                        className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="block py-2 pl-3 pr-4 text-[#303030] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/services"
                        className="block py-2 pl-3 pr-4 text-[#303030] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        href="/pricing"
                        className="block py-2 pl-3 pr-4 text-[#303030] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className="block py-2 pl-3 pr-4 text-[#303030] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    {session?.user ? (
                        <Link href={`/profile`}>
                            <Image
                                src={session.user?.image ?? '/mememan.webp'}
                                width={32}
                                height={32}
                                alt="Your Name"
                            />
                        </Link>
                    ) : (
                        <Link
                            href="/signin"
                            className="block py-2 pl-3 pr-4 text-[#303030] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Sign In
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
}
