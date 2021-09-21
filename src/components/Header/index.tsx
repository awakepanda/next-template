import Link from 'next/link';

// const NAV_ITEMS = [
//   { href: "/", label: "Index" },
//   { href: "/message", label: "Message" },
//   { href: "/about", label: "About" },
//   { href: "/team", label: "Team" },
//   { href: "/contact", label: "Contact" },
// ];

export const Header = () => {
  return (
    <header className="w-full h-20 bg-gray-50 fixed left-0 top-0">
      <div className="flex h-full">
        <Link href="/">
          <a className="w-1/5 flex justify-center items-center hover:bg-black hover:text-white transition">Home</a>
        </Link>
        <Link href="/about">
          <a className="w-1/5 flex justify-center items-center hover:bg-black hover:text-white transition">About</a>
        </Link>
        <Link href="/message">
          <a className="w-1/5 flex justify-center items-center hover:bg-black hover:text-white transition">Message</a>
        </Link>
        <Link href="/team">
          <a className="w-1/5 flex justify-center items-center hover:bg-black hover:text-white transition">Team</a>
        </Link>
        <Link href="/contact">
          <a className="w-1/5 flex justify-center items-center hover:bg-black hover:text-white transition">Contact</a>
        </Link>
      </div>
      {/* <div className="flex h-full">
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href}>
              <a className="w-1/5 flex justify-center items-center hover:bg-black hover:text-white transition">
                {item.label}
              </a>
            </Link>
          );
        })}
      </div> */}
    </header>
  );
};
