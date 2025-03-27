import { ShareIcon } from "../icons/share_icon";

interface CardProps{
    title : string ;
    link : string ;
    type : "twitter" | "youtube";
}

export function Card({title , link , type } : CardProps){
    return <div className="p-4">
        <div className="p-4 bg-white rounded-md max-w-72  border-gray-200 border min-h-48 min-w-72">

            <div className="flex justify-between ">

                <div className="flex items-center text-md">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon/>
                    </div>
                    {title}
                </div>

                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                        <ShareIcon/>
                        </a>
                        
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon/>
                    </div>
                    
                </div>
                
            </div>

            <div className="pt-4 m-2">
                {type === "youtube" && <iframe className="w-full"  src={link.replace("watch" , "embed").replace("?v=" , "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
               
               {type === "twitter" && <><blockquote className="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">The new tax bill could let the government check your digital activity to fight evasion. Here&#39;s what <a href="https://twitter.com/hashtag/NirmalaSitharaman?src=hash&amp;ref_src=twsrc%5Etfw">#NirmalaSitharaman</a> said in the Parliament. <a href="https://t.co/GCJ7LWRFu8">pic.twitter.com/GCJ7LWRFu8</a></p>&mdash; Brut India (@BrutIndia) <a href="https://twitter.com/BrutIndia/status/1904816876146090216?ref_src=twsrc%5Etfw">March 26, 2025</a></blockquote><script async src={link} charset="utf-8"></script></>}
            
            </div>
            
        </div>
    </div>
}