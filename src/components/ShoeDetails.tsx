import { FC } from "react"
import Image from "next/image"

import { CardDetails, QTY, SIZES } from "@/constants"
import Select from "./Select"

interface ShoeDetailsProps {
	shoe: CardDetails
}

const ShoeDetails: FC<ShoeDetailsProps> = ({
	shoe: { title, price, description, src },
}) => {
	return (
		<div className="flex flex-col space-y-4 lg:flex-row-reverse dark:text-white">
			{/*Shoe image*/}
			<div className="flex-1 lg:-mt-32 lg:ml-28">
				<div className="h-full relative flex-center bg-gradient-to-br from-[#f637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
					<Image
						className="animate-float"
						src={src}
						alt="nike-air-max-270"
						priority
					/>
				</div>
			</div>
			<div className="flex-1 space-y-6">
				{/*Shoe text details*/}
				<div className="text-5xl font-black md:text-9xl">{title}</div>
				<div className="font-medium md:text-xl">{description}</div>
				<div className="flex space-x-6">
					<div className="text-3xl font-extrabold md:text-6xl">
						{price}
					</div>
					<Select title={"Qty"} options={QTY} />
					<Select title={"Size"} options={SIZES} />
				</div>

				{/*Shoe buttons and links*/}
				<div className="space-x-10">
					<button className="btn-press-anim h-14 w-44 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 active:bg-gray-700">
						Add to bag
					</button>
					<a
						href="#"
						className="text-lg font-bold underline dark:text-white"
					>
						View details
					</a>
				</div>
			</div>
		</div>
	)
}

export default ShoeDetails
