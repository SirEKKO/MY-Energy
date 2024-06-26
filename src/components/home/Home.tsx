import React from 'react';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Avatar } from '../ui/avatar';
import { User } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-500 to-[#1c1c1c] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Trade Energy, Not Crypto
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Our platform allows you to trade energy futures and options with ease. Secure, transparent, and
                    regulated.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/login"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white text-indigo-500 px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Trading
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="https://fastly.picsum.photos/id/130/600/600.jpg?hmac=DoqjTb2qtdt74LPacENUaJukVASYr4uFjPKRKbJ1TC4"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-[#1c1c1c] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Secure and Transparent Energy Trading
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects buyers and sellers of energy futures and options, providing a secure and
                  transparent marketplace. Trade with confidence, knowing your transactions are regulated and audited.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="https://fastly.picsum.photos/id/130/600/600.jpg?hmac=DoqjTb2qtdt74LPacENUaJukVASYr4uFjPKRKbJ1TC4"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Secure Transactions</h3>
                      <p className="text-white/80">
                        All trades are recorded on a secure, distributed ledger for transparency and accountability.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Regulated Marketplace</h3>
                      <p className="text-white/80">
                        Our platform is regulated by industry authorities, ensuring compliance and consumer protection.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Real-Time Pricing</h3>
                      <p className="text-white/80">
                        Access live market data and make informed trading decisions with our real-time pricing
                        information.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-[#1c1c1c] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">Meet Our Customers</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Industry Leaders</h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform has been used by some of the biggest names in the energy industry. See what they have to
                  say.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-lg p-4 flex flex-col items-center justify-center">
                  <Avatar className="w-12 h-12 mb-2 flex justify-center items-center">
                    <User />
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-sm text-white/80">CEO, Acme Energy</p>
                  </div>
                  <div className="text-sm text-white/80 mt-2">
                    "Energy Trade has been a game-changer for our business. The\n platform is secure, transparent, and
                    easy to use."
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 flex flex-col items-center justify-center">
                  <Avatar className="w-12 h-12 mb-2 flex justify-center items-center">
                    <User />
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-sm text-white/80">Head of Trading, Global Energy Corp</p>
                  </div>
                  <div className="text-sm text-white/80 mt-2">
                    "I've been using Energy Trade for years and it's the best\n platform I've ever used. Highly
                    recommended."
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 flex flex-col items-center justify-center">
                  <Avatar className="w-12 h-12 mb-2 flex justify-center items-center">
                    <User />
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">Michael Johnson</h3>
                    <p className="text-sm text-white/80">Chief Trader, Renewable Energy Partners</p>
                  </div>
                  <div className="text-sm text-white/80 mt-2">
                    "Energy Trade has helped us streamline our trading\n operations and make more informed decisions."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-[#1c1c1c] text-white">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Start Trading Energy Futures and Options
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides a secure and transparent marketplace for trading energy commodities. Sign up today
                to get started.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-white/20 text-white placeholder:text-white/80 focus:bg-white/30"
                />
                <Button type="submit" className="bg-white text-indigo-500 hover:bg-white/90">
                  Sign Up
                </Button>
              </form>
              <p className="text-xs text-white/80">
                Sign up to start trading energy futures and options.{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;