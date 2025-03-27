
import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button";
import { Input } from "./input";
// controlled component
export function CreateContentModel( {open , onClose}){
    // we need to make the floting component 
    return <div>
        
        {open && <div className="w-screen h-screen bg-slate-200 fixed left-0 opacity-90 flex justify-center ">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded ">

                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon/>
                        </div>
                        

                    </div>
                    <div>
                        <Input placeholder={"title"}/>
                        <Input placeholder={"Link"}/>

                    </div>
                    <div className="flex justify-center p-2">
                        <Button variant="primary"  text="submit"/>
                    </div>
                    
                </span>
            </div>
            
        </div>}
        
        
    </div>
}
