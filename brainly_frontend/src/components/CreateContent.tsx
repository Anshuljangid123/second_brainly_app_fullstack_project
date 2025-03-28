
import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button";
import { Input } from "./input";
import { BACKEND_URL } from "../config";
import axios from "axios";

// controlled component

enum ContentType{
    Youtube = "youtube" , 
    Twitter = "twitter"
} 

export function CreateContentModel( {open , onClose}){
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type , setType] = useState(ContentType.Youtube);

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content` , {
            link , title , type
        } , {
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        })
    }
    // we need to make the floting component 
    return <div>
        
        {open && <div>
            <div className="w-screen h-screen bg-slate-500 fixed left-0 opacity-60 flex justify-center ">
                
            </div>

            <div className="w-screen h-screen fixed left-0 opacity-100 flex justify-center ">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded ">

                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon/>
                            </div>
                        </div>

                        <div>
                            <Input ref={titleRef} placeholder={"title"}/>
                            <Input ref={titleRef} placeholder={"Link"}/>

                        </div>
                        <h1 className="pl-20 m-4"> Type</h1>
                        <div className="flex justify-between ">
                            
                            <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)
                            }}></Button>

                            <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter)
                            }}></Button>

                        </div>
                        <div className="flex justify-center p-2">
                            <Button onClick={addContent} variant="primary"  text="submit"/>
                        </div>
                        
                    </span>
                </div>
            </div>
        </div>}
        
        
    </div>
}
