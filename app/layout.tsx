import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "@/app/providers";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { ToastBar, Toaster } from "react-hot-toast";
import { getCurrentUser } from "@/actions/getCurrentUser";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Groomzy",
  description: "Mug-Shp Website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  //console.log(">>>user", currentUser, "<<<");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className}  dark:text-slate-200 text-slate-700`}
      >
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <Providers>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <NavBar />
              <main className="flex-grow"> {children} </main>
              <Footer />
            </div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
