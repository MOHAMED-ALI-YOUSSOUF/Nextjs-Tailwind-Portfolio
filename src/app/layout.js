import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import "./styles/index.css";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Mohamed Ali Youssouf",
  description: "Frontend Developer",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
        <script
          id="theme-switcher"
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
 
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
