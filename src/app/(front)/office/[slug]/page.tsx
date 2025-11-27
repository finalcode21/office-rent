import Navbar from "@/components/Navbar";
import OfficeFeatures from "@/features/offices/components/OfficeFeatures";
import OfficeHeader from "@/features/offices/components/OfficeHeader";
import SalesContactCard from "@/features/offices/components/SalesContactCard";
import { officeSpaces } from "@/features/offices/data/officeSpace.mock";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
  return officeSpaces.map((office) => ({
    slug: office.slug
  }));
}

// 👇 params harus bertipe Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export default function OfficeSpaceDetailPage({params}:Props){

const { slug } = React.use(params); // ✅ unwrap tanpa await

  const Office = officeSpaces.find((item) => item.slug === slug);
  if (!Office) return notFound();

    return (
        <>
        <Navbar/>
        <OfficeHeader image={Office.image} images={Office.images}/>
        <section
            id="Details"
            className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10"
        >
            <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            {Office.tags.map((tag) => (
                <p key={tag} className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                    {tag}
                </p>
            ))}
            <div className="flex items-center justify-between">
                <div>
                <h1 className="font-extrabold text-[32px] leading-11">
                   {Office.title}
                </h1>
                <div className="flex items-center gap-1.5 mt-2.5">
                   <Image
                    src="/assets/images/icons/location.svg"
                    width={24}   // w-6 = 24px
                    height={24}  // h-6 = 24px
                    alt="icon"
                    />
                    <p className="font-semibold">{Office.location}</p>
                </div>
                </div>
                <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1">                   
                    <Image
                    src="/assets/images/icons/Star 1.svg"
                    className="w-5 h-5"
                    alt="star rating filled"
                    width={20}
                    height={20}
                    />
                    <Image
                    src="/assets/images/icons/Star 1.svg"
                    className="w-5 h-5"
                    alt="star rating filled"
                    width={20}
                    height={20}
                    />
                    <Image
                    src="/assets/images/icons/Star 1.svg"
                    className="w-5 h-5"
                    alt="star rating filled"
                    width={20}
                    height={20}
                    />
                    <Image
                    src="/assets/images/icons/Star 1.svg"
                    className="w-5 h-5"
                    alt="star rating filled"
                    width={20}
                    height={20}
                    />
                    <Image
                    src="/assets/images/icons/Star 5.svg"
                    className="w-5 h-5"
                    alt="star rating empty"
                    width={20}
                    height={20}
                    />
                </div>
                <p className="font-semibold text-right">{Office.rating}/5 (19,384)</p>
                </div>
            </div>
            <p className="leading-[30px]">
                {Office.about}
            </p>
            <hr className="border-[#F6F5FD]" />
            <h2 className="font-bold">You Get What You Need Most</h2>
            <OfficeFeatures features={Office.features}/>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-1.5">
                <h2 className="font-bold">Office Address</h2>
                <p>{Office.title}</p>
                <p>{Office.address}</p>
            </div>
            <div className="overflow-hidden w-full h-[280px]">
                <div id="my-map-display" className="h-full w-full max-w-none bg-none">
                <iframe
                    className="h-full w-full border-0"
                    src='https://www.google.com/maps/embed/v1/place?q=${Office.title},&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
                />
                </div>
                <a
                className="from-embedmap-code"
                href="https://www.bootstrapskins.com/themes"
                id="enable-map-data"
                >
                premium bootstrap themes
                </a>
            </div>
            </div>
            <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
            <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
                {Office.isFullyBooked ? (
                    <div>
                        <p className="font-bold text-xl leading-[30px]">Sorry. This office is <span className="text-[#FF2D2D]">fully booked</span> at this moment, try next time.</p>
                    </div>
                ) : (
                    <div>
                    <p className="font-extrabold text-[32px] leading-12 text-[#0D903A]">
                        Rp {Office.price.toLocaleString('id')}
                    </p>
                    <p className="font-semibold mt-1">For {Office.duration} days working</p>
                    </div>
                )}
                <hr className="border-[#F6F5FD]" />
                <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Image
                    src="/assets/images/icons/verify.svg"
                    className="w-[30px] h-[30px]"
                    alt="icon verifikasi akses pembelajaran startup"
                    width={30}
                    height={30}
                />
                <p className="font-semibold leading-7">
                    Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
                </div>

                <div className="flex items-center gap-3">
                <Image
                    src="/assets/images/icons/verify.svg"
                    className="w-[30px] h-[30px]"
                    alt="icon verifikasi akses pembelajaran startup"
                    width={30}
                    height={30}
                />
                <p className="font-semibold leading-7">
                    Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
                </div>

                <div className="flex items-center gap-3">
                <Image
                    src="/assets/images/icons/verify.svg"
                    className="w-[30px] h-[30px]"
                    alt="icon verifikasi akses pembelajaran startup"
                    width={30}
                    height={30}
                />
                <p className="font-semibold leading-7">
                    Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
                </div>
                </div>
                <hr className="border-[#F6F5FD]" />
                <div className="flex flex-col gap-3.5">
                {Office.isFullyBooked ? (
                    <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                        <Image
                        src="/assets/images/icons/save-add.svg"
                        width={24}   // w-6 = 1.5rem = 24px
                        height={24}  // h-6 = 1.5rem = 24px
                        alt="icon"
                        />
                        <span>Save for Later</span>
                    </button>
                ):(
                    <a
                        href="booking.html"
                        className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
                    >
                        <Image
                            src="/assets/images/icons/slider-horizontal-white.svg"
                            width={24}   // Sesuaikan dengan ukuran asli atau Tailwind `w-6` = 24px
                            height={24}  // Sesuaikan dengan Tailwind `h-6` = 24px
                            alt="icon"
                            />
                        <span>Book This Office</span>
                    </a>
                )}
                
                
                </div>
            </div>
            <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-5 bg-white">
                <h2 className="font-bold">Contact Our Sales</h2>
                <div className="flex flex-col gap-[30px]">
                    {Office.salesContact.map((contact,index)=>(
                        <SalesContactCard key={index} contact={contact}/>
                    ))}
                </div>
            </div>
            </div>
        </section>
        </>

    );
}