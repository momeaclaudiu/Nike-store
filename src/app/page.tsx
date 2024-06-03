"use client"

import { useState } from "react"

import { FAKE_CART_ITEMS, SHOE_LIST } from "@/constants"

import Navbar from "@/components/Navbar"
import ShoeDetails from "@/components/ShoeDetails"
import NewArrivals from "@/components/NewArrivals"
import Sidebar from "@/components/Sidebar"
import Cart from "@/components/Cart"

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
				<Cart cartItems={FAKE_CART_ITEMS} />
			</Sidebar>
		</div>
	)
}

export default Home
