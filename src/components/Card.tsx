import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export interface CardProps {
	id: number
	src: string | StaticImport
	className: string
	title: string
	description: string
	price: number
}

const Card: React.FC<{ item: CardProps }> = ({
	item: { id, src, className, title, description, price },
}) => {
	return (
		<div
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
