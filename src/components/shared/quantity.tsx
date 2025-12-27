import { useState } from "react";

function Quantity(props: { quantity: number }) {
	const [quantity, setQuantity] = useState(props.quantity);

	function AddItem() {
		setQuantity(quantity + 1);
	}
	function RemoveItem() {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	}

	return (
		<div className="w-4/5 flex">
			<div
				className="w-1/3 flex items-center justify-center bg-[#e6caa2] cursor-pointer"
				onClick={AddItem}
			>
				+
			</div>
			<div className="w-1/3 flex items-center justify-center text-sm bg-[#FFFFFF]">
				{quantity}
			</div>
			<div
				className="w-1/3 flex items-center justify-center bg-[#e6caa2] cursor-pointer"
				onClick={RemoveItem}
			>
				-
			</div>
		</div>
	);
}

export default Quantity;
