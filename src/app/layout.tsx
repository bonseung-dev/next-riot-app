import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Riot App",
  description: "Riot Games API를 활용한 앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 bg-gray-100">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/champions">챔피언 목록</Link>
            </li>
            <li>
              <Link href="/items">아이템 목록</Link>
            </li>
            <li>
              <Link href="/rotation">챔피언 로테이션</Link>
            </li>
          </ul>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
