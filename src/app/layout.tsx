import "./globals.css";
import { Inter } from "next/font/google";
import ClientProvider from "@/components/ClientProvider";

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
        <ClientProvider>
          <nav className="p-4 bg-gray-100">
            <ul className="flex space-x-4">
              <li>
                <a href="/">홈</a>
              </li>
              <li>
                <a href="/champions">챔피언 목록</a>
              </li>
              <li>
                <a href="/items">아이템 목록</a>
              </li>
              <li>
                <a href="/rotation">챔피언 로테이션</a>
              </li>
            </ul>
          </nav>
          <main className="p-4">{children}</main>
        </ClientProvider>
      </body>
    </html>
  );
}
