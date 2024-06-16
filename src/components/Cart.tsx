import { CartItem } from "@/constants"
import CardItem from "./CardItem"

interface CartProps {
	cartItems: CartItem[]
	onClickTrash: (productId: number | undefined) => void
}

const Cart = ({ cartItems, onClickTrash }: CartProps) => {
	return (
		<>
			<h2 className="dark:text-white text-4xl font-bold mb-5">Cart</h2>
			<ul className="space-y-5">
				{cartItems.map((item) => (
					<li key={item.shoe.id}>
						<CardItem item={item} onClickTrash={onClickTrash} />
					</li>
				))}
			</ul>
		</>
	)
}

export default Cart
