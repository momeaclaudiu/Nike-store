import { CartItem } from "@/constants"
import CardItem from "./CardItem"

interface CartProps {
	cartItems: CartItem[]
}

const Cart = ({ cartItems }: CartProps) => {
	return (
		<>
			<h2 className="dark:text-white text-4xl font-bold mb-5">Cart</h2>
			<ul className="space-y-5">
				{cartItems.map((item) => (
					<li key={item.shoe.id}>
						<CardItem item={item} />
					</li>
				))}
			</ul>
		</>
	)
}

export default Cart
