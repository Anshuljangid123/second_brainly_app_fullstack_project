import { ReactElement } from "react";

type Variants = "primary" | "secondary";

export interface ButtonProps {
    variant : Variants;
    size : "sm" |  "md" | "lg";
    text : string ;
    startIcon ?: ReactElement; // optional 
    endIcon ?: ReactElement;
    onClick : () => void ;
}

const variantStyles ={
    "primary" : "bg-purple-600 text-white ",
    "secondary" : "bg-purple-400  text-purple-800"
}

const defaultStyles = "rounded-md p-4 flex item-center";

const sizeStyles = {
    "sm" : "py-2 px-2 ",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}
export const Button = (props : ButtonProps) =>{
    // props.variant  -> type is ButtonProps
    //props.onClick


    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}  onClick={props.onClick} > 
        <div className="flex">
            {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null } 
            <div className="pl-2 pr-2">
                {props.text} 
            </div>
            
            {props.endIcon}
        </div>
        
    </button>
}

{/* <Button  startIcon = {"+"} endIcon = {"+"}  variant="primary" size="md" onClick={() => {}} text={"asd"}/> */}