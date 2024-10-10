import Link from 'next/link';

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Posts',
    href: '/posts',
  },
];

export default function Header() {
  return (
    <header className="p-4 flex justify-between border-b">
      <h1>Blog</h1>
      <nav>
        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.title} className="inline-block ml-4">
              <Link href={navLink.href}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
