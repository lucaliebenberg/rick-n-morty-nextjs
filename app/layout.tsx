import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/nav/navbar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
      <body className={""}>
      <div className={"h-auto w-full flex justify-center align-middle m-auto"}>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
      </div>
      <SignedIn>
        <div className={"h-auto w-full flex flex-row justify-between gap-2 p-2"}>
          <Navbar/>
          <UserButton/>
        </div>
        {children}
      </SignedIn>
      </body>
      </html>
    </ClerkProvider>
  );
}
