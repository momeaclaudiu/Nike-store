"use client"

import { useEffect, useState } from "react"

import { AddToCart, CardDetails, SHOE_LIST } from "@/constants"

import { BiMoon, BiSun } from "react-icons/bi"

import Cart from "@/components/Cart"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import ShoeDetails from "@/components/ShoeDetails"
import NewArrivals from "@/components/NewArrivals"

interface CartItem {
	shoe: CardDetails
	qty: number
	size: number
}

const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [currentShoe, setCurrentShoe] = useState<CardDetails>(SHOE_LIST[0])
	const [cartItems, setCartItems] = useState<CartItem[]>([])

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

	const addToCart = ({ shoe, qty, size }: AddToCart) => {
		if (qty && size) {
			const updatedCartItems = [...cartItems]
			const existingItemIndex = cartItems.findIndex(
				(item) => item.shoe.id === shoe.id
			)
			if (existingItemIndex > -1) {
				updatedCartItems[existingItemIndex] = {
					...updatedCartItems[existingItemIndex],
					qty,
					size,
				}
			} else {
				updatedCartItems.push({ shoe, qty, size })
			}

			setCartItems(updatedCartItems)
		}
	}

	return (
		<div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
			<Navbar onClickShoppingBtn={() => setIsSidebarOpen(true)} />
			<ShoeDetails shoe={currentShoe} onClickAdd={addToCart} />
			<NewArrivals items={SHOE_LIST} onClickCard={setCurrentShoe} />
			<Sidebar
				isOpen={isSidebarOpen}
				onClickClose={() => setIsSidebarOpen(false)}
			>
				<Cart cartItems={cartItems} />
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
