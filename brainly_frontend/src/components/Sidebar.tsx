import { TwitterIcon } from "../icons/twitter_icon";
import { SideBarItems } from "./SidebarItem";
import { YouTubeIcon } from "../icons/youtube_icon";
import { BrainLogo } from "../icons/brain_logo";


export function SideBar(){
    return <div className="h-screen bg-white border-transparent shadow-sm w-76 fixed left-0 top-0 ">
        <div className="pt-4 pl-4 ">
            <div className="flex text-2xl justify-center pt-4 items-center">
                <div className="p-2 m-2 text-purple-600">
                    <BrainLogo/>
                </div>
                
                Brainly
            </div>

            <div className="pt-4 pl-4">
            <SideBarItems text="twitter" icon={<TwitterIcon/>}/>
            <SideBarItems text="youTube" icon={<YouTubeIcon/>}/>                
            </div>

        </div>
    </div>
}