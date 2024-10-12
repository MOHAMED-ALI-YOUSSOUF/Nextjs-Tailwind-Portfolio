import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import "./styles/index.css";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Mohamed Ali Youssouf",
  description: "Frontend Developer",
  openGraph: {
    title: "Mohamed Ali Youssouf",
    description: "Frontend Developer",
    url: "https://www.mohamed-ali-youssouf.com",
    siteName: "Mohamed Ali Youssouf Portfolio",
    images: [
      {
        url: "https://www.mohamed-ali-youssouf.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Ali Youssouf Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Youssouf",
    description: "Frontend Developer",
    images: ["https://www.mohamed-ali-youssouf.com/og-image.jpg"],
  },
};


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
        <link rel="icon" href="/logo4.svg" />
      </head>

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
