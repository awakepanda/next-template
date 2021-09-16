import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/message", label: "Message" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  return (
    <header className="h-20 bg-gray-50">
      <div className="flex h-full">
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href}>
              <a className="w-1/5 flex justify-center items-center hover:bg-black hover:text-white transition">
                {item.label}
              </a>
            </Link>
          );
        })}
      </div>
    </header>
  );
};
