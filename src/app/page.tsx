"use client"

import { SHOE_LIST } from "@/constants"
import Navbar from "@/components/Navbar"
import ShoeDetails from "@/components/ShoeDetails"
import NewArrivals from "@/components/NewArrivals"
import Sidebar from "@/components/Sidebar"
import { Fragment, useState } from "react"
import CardItem from "@/components/CardItem"

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
				<>
					<h2 className="text-2xl font-bold">Cart</h2>
					<CardItem item={SHOE_LIST[0]} />
					<CardItem item={SHOE_LIST[1]} />
					<CardItem item={SHOE_LIST[2]} />
				</>
			</Sidebar>
		</div>
	)
}

export default Home
