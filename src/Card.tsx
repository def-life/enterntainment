import { cva } from "class-variance-authority";
import { cn } from "./lib/utils";


// we can add className attribute for each major dom parts we want
// TODO: change based on api data, maybe add css prop if there is no global theme api
export interface MovieCardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string,
    price?: number,
    imageUrls: string[],
    logoUrl?: string,
    orientation: "vertical" | "horizontal",
    channel: boolean;


}

const cardSizeVariants = cva(
    "mb-[10px] flex justify-center items-center gap-[3.3px]",
    {
        variants: {
            orientation: {
                horizontal: "w-[178px] h-[100px] sm:h-[148px] sm:w-[263px]",
                vertical: "w-[130px] h-[238px] sm:w-[164px] sm:h-[246px]"
            },
        },
        defaultVariants: {
            orientation: "horizontal",
        },
    }
);


export default function MovieCard(props: MovieCardProps) {
    const { title = "MoonWalker", price = 100, imageUrls, className,
        channel, logoUrl = true, orientation = "horizontal", ...rest } = props

    const slicedChannel = imageUrls.slice(0, 3)

    return (
        <div
            className={cn("relative", className)}
            {...rest}
        >
            {/* Image */}
            {/* <div className={cn(cardSizeVariants({ orientation }),)}>
                {<img
                    src={imageUrl}
                    alt={`${title} poster`}
                    className="w-full h-full object-cover bg-gray-400 rounded-lg"
                />}
            </div> */}

            <div className={cn(cardSizeVariants({ orientation }), "bg-[#363636]")}>
                {
                    slicedChannel.map((url: string, index) => {
                        return <img
                            key={url}
                            src={url}
                            alt={`${title} poster`}
                            className={
                                cn("w-full h-full object-cover bg-[#363636] rounded-lg", {
                                    "w-[64px] h-[64px] sm:w-[88px] sm:h-[88px] rounded-full": channel,
                                    "w-8 h-8 sm:w-[54px] sm:h-[54px] rounded-full": channel && imageUrls.length > 1

                                })
                            }
                        />
                    })

                }

                {imageUrls.length > 3 && <div className="w-8 h-8 sm:w-[54px] sm:h-[54px] rounded-full bg-black text-white flex justify-center items-center text-[11px] sm:text-base leading-3 font-medium text-center">+{imageUrls.length - 3}<br />more</div>}
            </div>


            {/* Info */}
            <div className="text-white">
                <h2 className="text-xs sm:text-base font-normal font-sans">{title}</h2>
                <p className="text-sm sm:text-base">${price}</p>
            </div>
            {logoUrl && <img src="/logo.png" className="w-6 h-6 rounded-full object-cover absolute top-[4%] right-[4%]" />}

            {imageUrls.length > 1 && <div
                style={{ backgroundImage: 'linear-gradient(to right, #E8B200, #FFA52F)' }}
                className="w-[50px] h-[18px] sm:w-[84px] sm:h-[25px] sm:text-sm text-black absolute text-[10px] flex justify-center items-center bg-gradient-to-l top-[5%] left-0 ">Combo</div>}
        </div>
    );
}
