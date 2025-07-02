import { BikeIcon, CoinsIcon, CreditCardIcon, TruckIcon } from "lucide-react";

export default function DetailsSection() {
  return (
    <section className="grid grid-flow-col grid-cols-3 grid-rows-2 bg-white font-sans">
      {/* GRID: 3 Rows & 3 COLUMNS */}
      <div className="col-span-1 row-span-2 flex flex-col items-start justify-center border-2 bg-[#FF9F9F] px-10 py-20">
        <TruckIcon className="h-10 w-10" />
        <p className="w-32 text-start font-bold">
          Super Fast and Free Delivery
        </p>
      </div>
      <div className="col-span-1 row-span-1 flex flex-col items-center border-2 bg-[#B8FF9F] px-10 py-20">
        <BikeIcon className="h-10 w-10" />
        <p className="w-32 text-center">Non- Contact Shipping</p>
      </div>
      <div className="col-span-1 row-span-1 flex flex-col items-center border-2 bg-[#FFA6F6] px-10 py-20">
        <CoinsIcon className="h-10 w-10" />
        <p className="w-32 text-center">Money Back Guranteed</p>
      </div>
      <div className="col-span-1 row-span-2 flex flex-col items-end justify-center border-2 bg-[#FFF59F] px-10 py-20">
        <CreditCardIcon className="h-10 w-10" />
        <p className="w-32 text-end">Super Secure Payment System</p>
      </div>
    </section>
  );
}
