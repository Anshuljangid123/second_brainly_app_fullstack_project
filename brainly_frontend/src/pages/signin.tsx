import { Button } from "../components/Button";
import { Input } from "../components/input";

export function Signin(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8">
            <div className="pd-2 m-4">
                <Input placeholder="Username:"/>
            </div>
            
            <div className="pt-2 m-4">
                <Input placeholder="Password:"/>    
            </div>
            

            <div className="flex justify-center pt-4 p-4">
            <Button loading={false} variant="primary" text="Signin" fullWidth={true}/>
            </div>
            
        </div>

    </div>
}