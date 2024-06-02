"use client"

import { SHOE_LIST } from "@/constants"
import Navbar from "@/components/Navbar"
import ShoeDetails from "@/components/ShoeDetails"
import NewArrivals from "@/components/NewArrivals"
import Sidebar from "@/components/Sidebar"
import { Fragment, useState } from "react"

const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	return (
		<div className="animate-fadeIn p-10 xl:px-24">
			<Navbar onClickShoppingBtn={() => setIsSidebarOpen(true)} />
			<ShoeDetails />
			<NewArrivals items={SHOE_LIST} />
			<Sidebar
				isOpen={isSidebarOpen}
				onClickClose={() => setIsSidebarOpen(false)}
			>
				<p>Test</p>
			</Sidebar>
		</div>
	)
}

export default Home
