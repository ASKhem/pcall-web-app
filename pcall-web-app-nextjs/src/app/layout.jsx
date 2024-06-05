import "@/app/globals.css";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Socials from '@/components/header/Socials';

export const metadata = {
  title: "PC ALL",
  description: "Build a PC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full">
        <Header />
        <Socials />
        <div className="space h-16 w-full" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
