import { ReactElement } from "react";


export function SideBarItems({text , icon} : {
    text : string ;
    icon : ReactElement;
}){
    return <div className="flex py-2 text-gray-700 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 duration-150">
        
        <div className="p-2 text-red-600">
        {icon}
        </div>
        
        <div className="p-2 ">
        {text}
        </div>
    
    </div>
}