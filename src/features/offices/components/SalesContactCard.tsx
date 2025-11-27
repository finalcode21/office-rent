import Image from "next/image";
import Link from "next/link";
import { Contact } from "../types/officeSpace.types";


export default function SalesContactCard({contact}: {contact: Contact} ) {
    return (
<div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        <div className="relative w-full h-full">
                        <Image
                            src={contact.photo}
                            alt={contact.name}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        </div>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <p className="font-bold">{contact.name}</p>
                        <p className="text-sm leading-[21px]">{contact.role}</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-4">
                        <Link href="#">
                            <Image
                            src="/assets/images/icons/call-green.svg"
                            width={40}   // w-10 = 40px
                            height={40}  // h-10 = 40px
                            alt="call icon"
                            />
                        </Link>

                        <Link href="#">
                            <Image
                            src="/assets/images/icons/chat-green.svg"
                            width={40}   // w-10 = 40px
                            height={40}  // h-10 = 40px
                            alt="chat icon"
                            />
                        </Link>
                        </div>
                    </div>
                </div>
    );
}