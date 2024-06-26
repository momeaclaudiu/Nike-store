import Image from "next/image"
import { CiTrash } from "react-icons/ci"

import Select from "./Select"

import { QTY, SIZES, CartItem } from "@/constants"

interface CardItemProps {
	item: CartItem
	onClickTrash: (productId: number | undefined) => void
}

const CardItem = ({ item, onClickTrash }: CardItemProps) => {
	const {
		shoe: { title, description, price, src, id },
		size,
		qty,
	} = item

	return (
		<div className="cursor-pointer hover:bg-[#DAFFA2] bg-gray-50 dark:bg-transparent dark:hover:bg-night-50 p-2 space-y-2">
			{/* Image */}
			<div className="flex flex-center space-x-2  ">
				<Image src={src} alt={title} height={96} />
				<div className="space-y-2">
					{/* Title & Description */}
					<div className="font-bold dark:text-white">{title}</div>
					<div className="text-sm text-gray-400">{description}</div>
				</div>
				{/* Price */}
				<div className="font-bold dark:text-white">{price}$</div>
			</div>

			<div className="flex justify-between items-end pl-32">
				<div className="flex space-x-6">
					<div>
						<div className="font-bold dark:text-white">SIZE</div>
						<Select
							value={size}
							options={SIZES}
							title=""
							className="w-16 p-1 pl-2"
						/>
					</div>
					<div>
						<div className="font-bold dark:text-white">QTY</div>
						<Select
							value={qty}
							options={QTY}
							title=""
							className="w-16 p-1 pl-2"
						/>
					</div>
				</div>
				<button onClick={() => onClickTrash(id)}>
					<CiTrash
						size={25}
						className="text-black dark:text-white hover:fill-red-500 mb-2"
					/>
				</button>
			</div>
		</div>
	)
}

export default CardItem
