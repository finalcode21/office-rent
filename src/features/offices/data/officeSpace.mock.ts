import { officeSpace } from "../types/officeSpace.types";

export const officeSpaces:officeSpace[] = [
    {        
            id:1,
            title:'Angga Park Central Master Silicon Valley Star Class',
            slug:'angga-park-central-master-silicon-valley-star-class',
            price:1856000,
            duration:'1 days',
            address:'Dekat gedung BWA HQ Jakarta no.290000',
            about:'whether you need quiet private space away from distractions or collobrate in person...',
            location:'Jakarta Pusat',
            rating:4.5,
            tags:['popular'],
            image:'/assets/images/thumbnails/thumbnails-1.png',
            images: [
                '/assets/images/thumbnails/thumbnail-details-2.png',
                '/assets/images/thumbnails/thumbnail-details-3.png'
            ],
            features:['Privacy','Global Event','Sustainbility','Extra Snacks','Compact','Free Move'],
            salesContact:[
                {
                    name:'Masayoshi',
                    role:'Sales Manager',
                    photo:'/assets/images/photos/photo-1.png'
                },
                {
                    name:'Fuji Ovina',
                    role:'Sales Manager',
                    photo:'/assets/images/photos/photo-2.png'
                }
            ],
            isFullyBooked:false,
    },
    {        
            id:2,
            title:'Saung Sahaja',
            slug:'saung-sahaja',
            price:150000,
            duration:'1 days',
            address:'Dekat gedund sate',
            about:'whether you need quiet private space away from distractions or collobrate in person...',
            location:'Bandung',
            rating:4.8,
            tags:['Cheaper'],
            image:'/assets/images/thumbnails/thumbnails-3.png',
            images: [
                '/assets/images/thumbnails/thumbnail-details-3.png',
                '/assets/images/thumbnails/thumbnail-details-4.png'
            ],
            features:['Global Event','Privacy','Free Move','Subtainbility','extra snack'],
            salesContact:[
                {
                    name:'Amara',
                    role:'Sales Manager',
                    photo:'/assets/images/photos/photo-1.png'
                },
                {
                    name:'Dika',
                    role:'Sales Manager',
                    photo:'/assets/images/photos/photo-2.png'
                }
            ],
            isFullyBooked:false,
    },

   {        
            id:3,
            title:'Pondok Pekerja Surabaya',
            slug:'pondok-pekerja-surabaya',
            price:750000,
            duration:'1 days',
            address:'Dekat gedung BWA HQ Jakarta no.290000',
            about:'whether you need quiet private space away from distractions or collobrate in person...',
            location:'Surabaya',
            rating:4.5,
            tags:['Cheaper'],
            image:'/assets/images/thumbnails/thumbnails-2.png',
            images: [
                '/assets/images/thumbnails/thumbnail-details-5.png',
                '/assets/images/thumbnails/thumbnail-details-6.png'
            ],
            features:['Fast Connection','Free Move','Subtainbility','extra snack'],
            salesContact:[
                {
                    name:'Amara',
                    role:'Sales Manager',
                    photo:'/assets/images/photos/photo-1.png'
                },
                {
                    name:'Dika',
                    role:'Sales Manager',
                    photo:'/assets/images/photos/photo-2.png'
                }
            ],
            isFullyBooked:true,
    },
];