import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTheme } from '../actions/'
import { useLocation } from 'react-router-dom'

const Header = ({ changeTheme, theme }: any) => {
    const navigationRoutes = [
        { path: "/", name: "Home" },
        { path: "/shop", name: "Shop" },
        { path: "/categories", name: "Categories" },
        { path: "/contact", name: "Contact" },
        { path: "/about", name: "About" }];
    const location = useLocation()
    const sun = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>;
    const night = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>;
    return (
        <header className="dark:bg-gray-800">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between my-7">
                    <div className="hidden w-full dark:text-white text-gray-600 md:flex md:items-center">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                        </svg>
                        <span className="mx-1 text-sm">Addis Ababa</span>
                    </div>
                    <div className="w-full dark:text-white text-gray-700 md:text-center text-5xl font-semibold">
                        Vintage Collectables
                </div>
                    <div className="flex items-center justify-end w-full">
                        <button onClick={
                            () => {
                                changeTheme(theme === 'light' ? 'dark' : 'light')
                            }
                        } className="dark:text-white mx-7">
                            {theme === 'light' ? sun : night}
                        </button>

                        <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button>

                        <div className="flex sm:hidden">
                            <button type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="sm:flex sm:justify-center sm:items-center mt-4">
                    <div className="flex flex-col sm:flex-row">
                        {navigationRoutes.map((route, idx) => {
                            return (<Link
                                to={route.path}
                                className={"mt-3 dark:text-gray-400 hover:text-gray-900 sm:mx-3 sm:mt-0 dark:hover:text-white" + (location.pathname === route.path ? "text-white-500" : "dark:text-")}
                            >{route.name}</Link>)
                        })}
                    </div>
                </nav>
                <div className="mb-5">
                    <div className="relative mt-6 max-w-lg mx-auto">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <svg className="h-5 w-5 text-gray-500 dark:text-white" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>

                        <input className="w-full border dark:text-white dark:bg-gray-900 rounded-md pl-10 pr-4 py-2 focus:border-gray-500 dark:border-gray-500 dark:focus:border-white focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = ({ theme }: any) => {
    // console.clear()
    return { theme }
}
export default connect(mapStateToProps, { changeTheme })(Header)