import Image from "next/image"
import { CiTrash } from "react-icons/ci"

import { CardProps } from "./Card"
import Select from "./Select"
import { QTY, SIZES } from "@/constants"
import { CartItem } from "./Cart"

interface CardItemProps {
	item: CartItem
}

const CardItem = ({ item }: CardItemProps) => {
	const {
		product: { title, description, price, src },
		size,
		qty,
	} = item

	return (
		<div className="cursor-pointer hover:bg-[#DAFFA2] bg-gray-50 dark:bg-transparent dark:hover:bg-night-50 p-2 space-y-2">
			{/* Image */}
			<div className="flex space-x-2  ">
				<Image src={src} alt={title} height={96} />
				<div className="space-y-2">
					{/* Title & Description */}
					<div className="font-bold dark:text-white">{title}</div>
					<div className="text-sm text-gray-400">{description}</div>
				</div>
				{/* Price */}
				<div className="font-bold dark:text-white">{price}$</div>
			</div>

			<div className="flex justify-between pl-32">
				<div className="flex space-x-6">
					<div>
						<div className="font-bold dark:text-white">SIZE</div>
						<Select
							defaultValue={size}
							options={SIZES}
							title=""
							className="w-16 p-1 pl-2"
						/>
					</div>
					<div>
						<div className="font-bold dark:text-white">QTY</div>
						<Select
							defaultValue={qty}
							options={QTY}
							title=""
							className="w-16 p-1 pl-2"
						/>
					</div>
				</div>
				<button>
					<CiTrash
						size={25}
						className="text-black dark:text-white hover:text-red-400 fill-red"
					/>
				</button>
			</div>
		</div>
	)
}

export default CardItem
