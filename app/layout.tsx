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
  title: "Rick 'n Morty",
  description: "An awesome app showcasing Rick 'n Morty",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
      <body className={"bg-indigo-600 text-white"}>
      <div className={"h-full w-full flex justify-center align-middle m-auto"}>
        <SignedOut>
          <SignInButton>
            <div className={"mt-[50%] flex justify-center align-middle"}>
              <button className={"bg-green-600 text-white p-2 rounded-md"}>Enter Rick 'n Morty land</button>
            </div>
          </SignInButton>
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
