import { CardDetails } from "@/constants"
import CardItem from "./CardItem"

export type CartItem = {
	product: CardDetails
	qty: number
	size: number
}

interface CartProps {
	cartItems: CartItem[]
}

const Cart = ({ cartItems }: CartProps) => {
	return (
		<>
			<h2 className="dark:text-white text-4xl font-bold mb-5">Cart</h2>
			<ul className="space-y-5">
				{cartItems.map((item) => (
					<li key={item.product.id}>
						<CardItem item={item} />
					</li>
				))}
			</ul>
		</>
	)
}

export default Cart
