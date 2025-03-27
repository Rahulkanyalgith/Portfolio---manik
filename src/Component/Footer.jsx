function Footer() {
  return (
    <footer className="dark:bg-grey-800 w-full  mt-10 pb-4">
      <div className="mb-6 font-mono flex flex-col gap-2 items-center">
        <div className="text-3xl text-violet-800 md:text-2xl text-primaryColor font-semibold">
          Manik Mattoo
        </div>
        <div className="text-textColor text-xl md:text-lg sm:text-base xs:text-sm flex flex-col items-center mt-2">
          Copyright &copy; {new Date().getFullYear()} Manik Mattoo <span className="hidden xs:inline">|</span> <span>All Rights Reserved</span>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-between gap-3 py-3 tracking-wide md:mx-6 md:flex-row md:gap-0 lg:mx-10 lg:py-4 xl:mx-auto xl:max-w-6xl">
        <p>
          Made by <span className="animate-ping opacity-100">🔥</span> by
          <span className="mx-1 whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 p-1">
            Manik
          </span>
        </p>
        <p>
          Made with
          <span className="mx-1 whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 p-1">
            React.js | Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;