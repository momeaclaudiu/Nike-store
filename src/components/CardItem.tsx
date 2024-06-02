import Image from "next/image"
import { CiTrash } from "react-icons/ci"

import { CardProps } from "./Card"
import Select from "./Select"
import { QTY, SIZES } from "@/constants"

interface CardItemProps {
	item: CardProps
}

const CardItem = ({
	item: { title, description, price, id, className, src },
}: CardItemProps) => {
	return (
		<div className="cursor-pointer hover:bg-[#DAFFA2] bg-gray-50 p-2 space-y-2">
			{/* Image */}
			<div className="flex space-x-2  ">
				<Image src={src} alt={title} height={96} />
				<div className="space-y-2">
					{/* Title & Description */}
					<div className="font-bold">{title}</div>
					<div className="text-sm text-gray-400">{description}</div>
				</div>
				{/* Price */}
				<div className="font-bold">{price}$</div>
			</div>

			<div className="flex justify-between pl-32">
				<div className="flex space-x-6">
					<div>
						<div className="font-bold">SIZE</div>
						<Select options={SIZES} title="" className="w-16 p-1" />
					</div>
					<div>
						<div className="font-bold">QTY</div>
						<Select options={QTY} title="" className="w-16 p-1" />
					</div>
				</div>
				<button>
					<CiTrash size={25} className="text-black" />
				</button>
			</div>
		</div>
	)
}

export default CardItem
