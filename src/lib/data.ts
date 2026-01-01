import { CallStatusEnum } from "@/generated/prisma/enums";
import { DollarSignIcon, HomeIcon, Settings2Icon, SparkleIcon, WebcamIcon } from "lucide-react";

export const sidebarData = [
    {
        id:1,
        title:"Home",
        icon: HomeIcon,
        link: '/home'
    },
    {
        id:2,
        title:"Webinars",
        icon: WebcamIcon,
        link: '/webinars'
    },   
    {
        id:3,
        title:"Leads",
        icon: DollarSignIcon,
        link: '/lead'
    },
    {
        id:4,
        title:"AI Agents",
        icon: SparkleIcon,
        link: '/ai-agents'
    },
    {
        id:5,
        title:"Settings",
        icon: Settings2Icon,
        link: '/settings'
    },
]

export const onBoardingSteps = [
    {
        id: 1,
        title : "Create a webinar",
        complete: false,
        link: ''
    },
    {
        id: 2,
        title : "Get leads",
        complete: false,
        link: ''
    },
    {
        id: 1,
        title : "Conversion Status",
        complete: false,
        link: ''
    }
]



export const potentialCusomer = [
    {
        id: '1',
        name:"John Doe",
        email: "johndoe@gmail.com",
        clerkId:'1',
        profileImage: '/vercel.svg',
        isActive: true,
        lastLoginAt: null,
        createdAt : new Date(),
        updatedAt : new Date(),
        deletedAt : null, 
        tags :  [ "New", "Hot Lead"],
        callStatus : CallStatusEnum.COMPLETED

    },
    {
        id: '2',
        name:"Beth Doe",
        email: "bethdoe@gmail.com",
        clerkId:'1',
        profileImage: '/vercel.svg',
        isActive: true,
        lastLoginAt: null,
        createdAt : new Date(),
        updatedAt : new Date(),
        deletedAt : null, 
        tags :  [ "New", "Hot Lead"],
        callStatus : CallStatusEnum.COMPLETED

    },
    {
        id: '3',
        name:"Jamie Doe",
        email: "jamiedoe@gmail.com",
        clerkId:'3',
        profileImage: '/vercel.svg',
        isActive: true,
        lastLoginAt: null,
        createdAt : new Date(),
        updatedAt : new Date(),
        deletedAt : null, 
        tags :  [ "New", "Hot Lead"],
        callStatus : CallStatusEnum.COMPLETED

    }
]