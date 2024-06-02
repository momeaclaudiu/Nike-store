import { SHOE_LIST } from "@/constants"
import Navbar from "@/components/Navbar"
import ShoeDetails from "@/components/ShoeDetails"
import NewArrivals from "@/components/NewArrivals"

export default async function Home() {
	return (
		<div className="animate-fadeIn p-10 xl:px-24">
			<Navbar />
			<ShoeDetails />
			<NewArrivals items={SHOE_LIST} />
		</div>
	)
}
