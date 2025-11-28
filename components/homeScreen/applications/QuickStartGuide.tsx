import React from 'react'
import Image from 'next/image';
//zustand store
import { useApplicationStore } from '@/stores/application';

// icons
import { FaInternetExplorer } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { LuKeyRound } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

//shadcn components
import { Label } from '@/components/ui/label';

// applications components
import Projects from '../applications/projects';
import { div } from 'framer-motion/client';
const QuickStartItem = ({ icon, label, onClick }: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}) => (
    <div
        onClick={onClick}
        className="
            flex  items-center 
            gap-2 p-2
             cursor-pointer
            hover:underline
            text-white
            transition-all
            
        "
    >
        {icon}
        <Label className="text-[14px] cursor-pointer">{label}</Label>
    </div>
);


const QuickStartGuide = () => {
    const addWindowItem = useApplicationStore((state) => state.addWindowItem)
    return (
        <div className="flex flex-col  p-4 px-10 gap-4 text-black ">
            {/* Header text */}
            <Label className="text-[20px] text-white font-semibold text-center leading-none">
                Welcome to My Personal Portfolio! Inspired by (Windows XP Edition)
            </Label>
            <Label className="text-[13px] text-white/70 text-center leading-none">
                Learn more about me by clicking any of the categories below.
            </Label>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 gap-4  w-full px-4">

                {/* Projects */}
                <QuickStartItem
                    label="Projects"
                    icon={<Image src="/projectsIcon.ico" alt='' width={20} height={20} className='w-[50px]' />}
                    onClick={() => addWindowItem(
                        "Projects",
                        <Image src="/projectsIcon.ico" alt='' width={20} height={20} className='w-[15px]' />,
                        <Projects />
                    )}
                />

                {/* Skills */}
                <QuickStartItem
                    label="Skills"
                    icon={<FaFolderOpen className="text-[#f5d78c] text-[50px]" />}
                    onClick={() => addWindowItem(
                        "Skills",
                        <FaFolderOpen className="text-[#f5d78c] text-[15px]" />,
                        <Projects />
                    )}
                />

                {/* About Me */}
                <QuickStartItem
                    label="About Me"
                    icon={<FaFolderOpen className="text-[#f5d78c] text-[50px]" />}
                    onClick={() => addWindowItem(
                        "About Me",
                        <FaFolderOpen className="text-[#f5d78c] text-[15px]" />,
                        <Projects />
                    )}
                />

                {/* Contact */}
                <QuickStartItem
                    label="Contact"
                    icon={<FaFolderOpen className="text-[#f5d78c] text-[50px]" />}
                    onClick={() => addWindowItem(
                        "Contact",
                        <FaFolderOpen className="text-[#f5d78c] text-[15px]" />,
                        <Projects />
                    )}
                />

                {/* Resume */}
                <QuickStartItem
                    label="Resume"
                    icon={<FaFolderOpen className="text-[#f5d78c] text-[50px]" />}
                    onClick={() => addWindowItem(
                        "Resume",
                        <FaFolderOpen className="text-[#f5d78c] text-[15px]" />,
                        <Projects />
                    )}
                />
            </div>
        </div>


    )
}

export default QuickStartGuide
