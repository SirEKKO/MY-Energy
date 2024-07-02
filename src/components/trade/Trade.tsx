import { Button } from "@/components/ui/button"
import { PlugZap2, Zap } from "lucide-react"
import Link from "next/link"

export default function Trade() {
  const traders = [
    {
      id: 1,
      name: "John Doe",
      ownedEnergy: 123,
      usedEnergy: 557,
      distance: 55
    },
    {
      id: 2,
      name: "Jane Smith",
      ownedEnergy: 73,
      usedEnergy: 33,
      distance: 12
    },
    {
      id: 3,
      name: "Michael Johnson",
      ownedEnergy: 23,
      usedEnergy: 542,
      distance: 6
    },
    {
      id: 4,
      name: "Emily Brown",
      ownedEnergy: 239,
      usedEnergy: 11,
      distance: 33
    },
    {
      id: 5,
      name: "David Lee",
      ownedEnergy: 11,
      usedEnergy: 16,
      distance: 22
    },
    {
      id: 6,
      name: "Sarah Kim",
      ownedEnergy: 12,
      usedEnergy: 150,
      distance: 1
    },
  ]
  return (
    <div className="w-full bg-gradient-to-r from-green-700 to-[#1c1c1c] text-white min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-row w-[800px] mb-32">
        <div className="border-[1px] rounded-s-lg border-white w-1/2 py-6 flex flex-row gap-2 justify-center">
          <Zap />
          <p>Your energy: 11kwh</p>
        </div>
        <div className="border-[1px] rounded-e-lg border-white w-1/2 py-6 flex flex-row gap-2 justify-center">
          <PlugZap2 />
          <p>Energy used: 210kwh</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-8">Trading Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {traders.map((trader) => (
          <div
            key={trader.id}
            className="rounded-lg shadow-3xl overflow-hidden"
          >
            <div className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-2 text-white">{trader.name}</h2>
              <p className="text-gray-200 mb-4"><span className="font-semibold">Owned energy:</span> {trader.ownedEnergy}kwh</p>
              <p className="text-gray-200 mb-4"><span className="font-semibold">Used energy:</span> {trader.usedEnergy}kwh</p>
              <p className="text-gray-200 mb-4"><span className="font-semibold">Distance:</span> {trader.distance}km</p>
              <Link href="/tradeEnergy" className="w-full bg-black hover:bg-green-500 duration-300 text-white py-2 rounded-lg text-center">
                Trade
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}