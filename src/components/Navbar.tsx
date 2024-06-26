"use client"

import { useState } from "react"
import Image from "next/image"

import { ROUTES } from "@/constants"

import { RxHamburgerMenu } from "react-icons/rx"
import { TbShoppingBag } from "react-icons/tb"
import nikeLogo from "@/public/nike-logo.svg"

interface NavbarProps {
	onClickShoppingBtn: () => void
}

const Navbar = ({ onClickShoppingBtn }: NavbarProps) => {
	const [isMobileMenuShow, setIsMobileMenuShown] = useState<boolean>(false)

	return (
		<nav className="flex z-10  flex-wrap justify-between relative">
			<a>
				<Image
					src={nikeLogo}
					alt="brand-logo"
					className="dark:invert mb-4"
				/>
			</a>
			<button
				onClick={() => setIsMobileMenuShown(!isMobileMenuShow)}
				className="lg:hidden rounded-lg mb-4 p-2 focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
			>
				<RxHamburgerMenu size={25} />
			</button>

			<div
				className={`${
					isMobileMenuShow ? "" : "hidden"
				} w-full lg:w-auto lg:block`}
			>
				<ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg border lg:border-none border-gray-100 rounded-lg p-4 lg:dark:text-white">
					{ROUTES.map((route, index) => (
						<li
							className={`lg:hover:bg-transparent lg:hover:text-blue-500 cursor-pointer rounded py-2 px-3 ${
								!index
									? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
									: "hover:bg-gray-100"
							} ${index >= 3 ? "lg:text-white" : ""}`}
							key={index}
						>
							{route}
						</li>
					))}
				</ul>
			</div>
			<div
				onClick={onClickShoppingBtn}
				className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8"
			>
				<div className="h-12 w-12 cursor-pointer flex-center rounded-full bg-white shadow-md">
					<TbShoppingBag />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
