import React, { Dispatch, SetStateAction } from "react"
import Card from "./Card"
import { CardDetails } from "@/constants"

interface NewArrivalsProps {
	items: CardDetails[]
	onClickCard: Dispatch<SetStateAction<CardDetails>>
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ items, onClickCard }) => {
	return (
		<div className=" mt-20">
			<div className="flex-center">
				<div className="bg-[url('../../public/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
					NEW ARRIVALS
				</div>
			</div>
			<div className="justify-between mt-10 grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
				{items.map((item) => (
					<Card item={item} key={item.id} onClick={onClickCard} />
				))}
			</div>
		</div>
	)
}

export default NewArrivals
