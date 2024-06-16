import { FC, useState } from "react"
import Image from "next/image"

import { CardDetails, QTY, SIZES, AddToCart } from "@/constants"
import Select from "./Select"

interface ShoeDetailsProps {
	shoe: CardDetails
	onClickAdd: ({ shoe, size, qty }: AddToCart) => void
}

type formProps = {
	qty: number | null
	size: number | null
}

const ShoeDetails: FC<ShoeDetailsProps> = ({ shoe, onClickAdd }) => {
	const { title, price, description, src } = shoe
	const [form, setForm] = useState<formProps>({ qty: null, size: null })

	const handleQtyChange = (qty: number) => {
		setForm((prevForm) => ({ ...prevForm, qty }))
	}

	const handleSizeChange = (size: number) => {
		setForm((prevForm) => ({ ...prevForm, size }))
	}

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
					<Select
						value={form.qty}
						onChange={handleQtyChange}
						title={"Qty"}
						options={QTY}
					/>
					<Select
						value={form.size}
						onChange={handleSizeChange}
						title={"Size"}
						options={SIZES}
					/>
				</div>

				{/*Shoe buttons and links*/}
				<div className="flex items-center sm:space-x-10 space-x-6">
					<button
						onClick={() =>
							onClickAdd({ shoe, qty: form.qty, size: form.size })
						}
						className="btn-press-anim h-14 w-44 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 active:bg-gray-700"
					>
						Add to bag
					</button>
					<a
						href="#"
						className="sm:text-lg text-sm text-wrap font-bold underline dark:text-white"
					>
						View details
					</a>
				</div>
			</div>
		</div>
	)
}

export default ShoeDetails
