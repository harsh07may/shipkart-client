import { BikeIcon, CoinsIcon, CreditCardIcon, TruckIcon } from "lucide-react";

export default function DetailsSection() {
  return (
    <section className="grid grid-cols-1 bg-white font-sans md:grid-flow-col md:grid-cols-3 md:grid-rows-2">
      {/* GRID: 3 Rows & 3 COLUMNS */}
      <div className="flex flex-col items-start justify-center border-2 bg-[#FF9F9F] px-10 py-20 md:col-span-1 md:row-span-2">
        <TruckIcon className="h-10 w-10" />
        <p className="w-32 text-start font-bold">
          Super Fast and Free Delivery
        </p>
      </div>
      <div className="flex flex-col items-center border-2 bg-[#B8FF9F] px-10 py-20 md:col-span-1 md:row-span-1">
        <BikeIcon className="h-10 w-10" />
        <p className="w-32 text-center">Non-Contact Shipping</p>
      </div>
      <div className="flex flex-col items-center border-2 bg-[#FFA6F6] px-10 py-20 md:col-span-1 md:row-span-1">
        <CoinsIcon className="h-10 w-10" />
        <p className="w-32 text-center">Money Back Guaranteed</p>
      </div>
      <div className="flex flex-col items-end justify-center border-2 bg-[#FFF59F] px-10 py-20 md:col-span-1 md:row-span-2">
        <CreditCardIcon className="h-10 w-10" />
        <p className="w-32 text-end">Super Secure Payment System</p>
      </div>
    </section>
  );
}
