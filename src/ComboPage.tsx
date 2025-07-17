import { Button } from "./components/ui/button"

export default function ComboPage() {
    return (
        <div className="flex justify-between  p-6 rounded-lg">
            <div className="w-1/2 p-6  rounded-lg">
                <h2 className="text-2xl font-semibold text-center capitalize">Premium Mania</h2>
                <p className="text-lg font-medium text-center mb-4">15 Ott</p>
                <Button variant="contained" size="default">Subscribe ₹ 399/month</Button>
                <p className="mt-4 text-sm leading-relaxed text-justify">
                    Sony LIV offers a diverse library of originals, blockbuster movies, TV shows, sports,
                    and international content. Stream premium entertainment anytime with exclusive access
                    to Sony Network's top-rated programs.
                </p>
            </div>

            <div className="w-1/2 bg-blue-500 p-6 rounded-lg">
                {/* Add your right-side content here */}
            </div>
        </div>
    )
}
