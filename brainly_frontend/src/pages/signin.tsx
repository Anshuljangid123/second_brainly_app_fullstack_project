import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null) ;
    const passwrodRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwrodRef.current?.value;

        const response = await axios.post(BACKEND_URL + "/api/v1/signin" , {
            username , 
            password 
        });


        const jwt = response.data.token;
        localStorage.setItem("token" , jwt);
        navigate("/Dashboard");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8">
            <div className="pd-2 m-4">
                <Input ref={usernameRef} placeholder="Username:"/>
            </div>
            
            <div className="pt-2 m-4">
                <Input ref={passwrodRef} placeholder="Password:"/>    
            </div>
            

            <div className="flex justify-center pt-4 p-4">
            <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true}/>
            </div>
            
        </div>

    </div>
}