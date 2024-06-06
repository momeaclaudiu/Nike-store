"use client"

import { useEffect, useState } from "react"

import { SHOE_LIST } from "@/constants"

import Navbar from "@/components/Navbar"
import ShoeDetails from "@/components/ShoeDetails"
import NewArrivals from "@/components/NewArrivals"
import Sidebar from "@/components/Sidebar"
import Cart from "@/components/Cart"
import { BiMoon, BiSun } from "react-icons/bi"

const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0])

	useEffect(() => {
		const isDarkMode = localStorage.getItem("isDarkMode")
		if (isDarkMode === "true") {
			window.document.documentElement.classList.add("dark")
		}
	}, [])

	const toggleDarkMode = () => {
		window.document.documentElement.classList.toggle("dark")

		localStorage.setItem(
			"isDarkMode",
			window.document.documentElement.classList.contains("dark")
				? "true"
				: "false"
		)
	}

	return (
		<div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
			<Navbar onClickShoppingBtn={() => setIsSidebarOpen(true)} />
			<ShoeDetails shoe={currentShoe} />
			<NewArrivals items={SHOE_LIST} onClickCard={setCurrentShoe} />
			<Sidebar
				isOpen={isSidebarOpen}
				onClickClose={() => setIsSidebarOpen(false)}
			>
				<Cart cartItems={[]} />
			</Sidebar>
			<div className="fixed bottom-4 right-4">
				<button
					onClick={toggleDarkMode}
					className="text-white bg-night-50 px-4 py-2 rounded-full dark:bg-white dark:text-night shadow-lg"
				>
					<BiSun className="hidden dark:block" />
					<BiMoon className="dark:hidden" />
				</button>
			</div>
		</div>
	)
}

export default Home
