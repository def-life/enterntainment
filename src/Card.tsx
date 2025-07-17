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

const imageContainerVariants = cva(
    "mb-[10px] flex justify-center items-center",
    {
        variants: {
            orientation: {
                horizontal: "w-[178px] h-[100px] sm:h-[148px] sm:w-[263px]",
                vertical: "w-[130px] h-[238px] sm:w-[164px] sm:h-[246px]"
            },
            kind: {
                channel: "gap-[3.3px]",
                thumbnail: ""
            },
        },


        defaultVariants: {
            orientation: "horizontal",
        },
    }
);

const imageVariants = cva(
    "object-cover bg-[#363636]", {
    variants: {
        layout: {
            movieThumbnail: "w-full h-full rounded-lg",
            singleChannel: "w-[64px] h-[64px] sm:w-[88px] sm:h-[88px] rounded-full",
            multipleChannel: "w-8 h-8 sm:w-[54px] sm:h-[54px] rounded-full",
            multipleThumbnail: "w-[40%] h-full"
        }

    },
    defaultVariants: {
        layout: "movieThumbnail"
    }
},
)

const VISIBLE_IMAGES_LIMIT = 3


export default function MovieCard(props: MovieCardProps) {
    const { title = "MoonWalker", price = 100, imageUrls, className,
        channel, logoUrl, orientation = "horizontal", ...rest } = props

    const visibleImages = imageUrls.slice(0, VISIBLE_IMAGES_LIMIT)
    const layout = channel
        ? imageUrls.length === 1
            ? "singleChannel"
            : "multipleChannel"
        : imageUrls.length > 1
            ? "multipleThumbnail"
            : "movieThumbnail";
    ;
    const showComboBadge = imageUrls.length > 1;
    const kind = channel ? "channel" : "thumbnail"
    return (
        <div
            className={cn("relative inline-block", className)}
            {...rest}
        >
            <div className={cn(imageContainerVariants({ orientation, kind }), "bg-[#363636]")}>
                {
                    visibleImages.map((url: string, index) => {
                        return <img
                            key={`${url}-${index}`} src={url}
                            alt={`${title} poster`}
                            className={
                                cn(imageVariants({ layout }), 
                                    layout === "multipleThumbnail" && index !== 0 && "-ml-[10%]"

                                )
                            }
                            
                        />
                    })

                }

                {imageUrls.length > 3 && layout !== "multipleThumbnail" && <div className="w-8 h-8 sm:w-[54px] sm:h-[54px] rounded-full bg-black text-white flex justify-center items-center text-[11px] sm:text-base leading-3 font-medium text-center">+{imageUrls.length - 3}<br />more</div>}
            </div>


            {/* Info */}
            <div className="text-white">
                <h2 className="text-xs sm:text-base font-normal font-sans">{title}</h2>
                <p className="text-sm sm:text-base">${price}</p>
            </div>
            {logoUrl && <img src="/logo.png" className="w-6 h-6 rounded-full object-cover absolute top-[4%] right-[4%]" />}

            {showComboBadge && <div
                style={{ backgroundImage: 'linear-gradient(to right, #E8B200, #FFA52F)' }}
                className="w-[50px] h-[18px] sm:w-[84px] sm:h-[25px] sm:text-sm text-black absolute text-[10px] flex justify-center items-center bg-gradient-to-l top-[5%] left-0 ">Combo</div>}
        </div>
    );
}
