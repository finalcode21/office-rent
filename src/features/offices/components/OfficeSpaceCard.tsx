import Image from "next/image";
import { officeSpace } from "../types/officeSpace.types";
import Link from "next/link";
export default function OfficeSpaceCard({space}: {space: officeSpace}) {
    return(

             <Link href={`/office/${space.slug}`} className="card">
                <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
<div className="thumbnail-container relative w-full h-[200px]">
  {space.tags.map((tag) => (
    <p
      key={tag}
      className="absolute top-5 left-5 w-fit rounded-full px-4 py-1.5 bg-[#0D903A] font-bold text-sm text-[#F7F7FD] z-10"
    >
      {tag}
    </p>
  ))}

  <Image
    src={space.image}
    alt="thumbnails"
    fill                         // ✅ Gunakan fill biar mengikuti container
    sizes="(max-width: 768px) 100vw, 400px" // ✅ bantu Next.js untuk responsif
    className="object-cover rounded-lg"     // ✅ hindari w-full h-full override!
    priority={false}
  />
</div>
                  <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                    <h3 className="line-clamp-2 font-bold text-[22px] leading-9 h-[72px]">
                     {space.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-xl leading-[30px]">
                        Rp {space.price.toLocaleString('id')}
                      </p>
                      <div className="flex items-center justify-end gap-1.5">
                        <p className="font-semibold">{space.duration}</p>
                        <Image width={24} height={24}
                          src="/assets/images/icons/clock.svg"
                          className="w-6 h-6"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-end gap-1.5">
                        <Image width={24} height={24}
                          src="/assets/images/icons/location.svg"
                          className="w-6 h-6"
                          alt="icon"
                        />
                        <p className="font-semibold">{space.location}</p>
                      </div>
                      <div className="flex items-center justify-end gap-1.5">
                        <p className="font-semibold">{space.rating}</p>
                        <Image width={24} height={24}
                          src="/assets/images/icons/Star 1.svg"
                          className="w-6 h-6"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-end gap-1.5">
                        <Image width={24} height={24}
                          src="/assets/images/icons/wifi.svg"
                          className="w-6 h-6"
                          alt="icon"
                        />
                        <p className="font-semibold">High Speed Wifi</p>
                      </div>
                      <div className="flex items-center justify-end gap-1.5">
                        <Image width={24} height={24}
                          src="/assets/images/icons/security-user.svg"
                          className="w-6 h-6"
                          alt="icon"
                        />
                        <p className="font-semibold">100% Privacy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
    );
}