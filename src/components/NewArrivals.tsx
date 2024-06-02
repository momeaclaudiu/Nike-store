import React from "react"
import Card, { CardProps } from "./Card"

interface NewArrivalsProps {
	items: CardProps[]
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ items }) => {
	return (
		<div className=" mt-20">
			<div className="flex-center">
				<div className="bg-[url('../../public/lines.png')] bg-center text-4xl font-extrabold">
					NEW ARRIVALS
				</div>
			</div>
			<div className="justify- mt-10 grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
				{items.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default NewArrivals
