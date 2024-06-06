import { FC } from "react"
import Image from "next/image"
import { CardDetails } from "@/constants"

interface CardProps {
	item: CardDetails
	onClick: (arg0: CardDetails) => void
}

const Card: FC<CardProps> = ({ item, onClick }) => {
	const { src, className, title } = item
	return (
		<div
			onClick={() => onClick(item)}
			className={`transition transform hover:scale-105 cursor-pointer max-w-xl ${className}`}
		>
			<div className="p-8">
				<div className="text-2xl font-bold">{title}</div>
				<div className="underline underline-offset-4 font-semibold mt-10">
					SHOP NOW +
				</div>
			</div>
			<Image
				className="absolute h-40 w-56 top-5 left-[40%]"
				src={src}
				alt={title}
			/>
		</div>
	)
}

export default Card
