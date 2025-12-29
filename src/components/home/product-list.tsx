import Quantity from "../shared/quantity";

function ProductList({
	products,
	onChangeQty,
}: {
	products: any[];
	onChangeQty: (id: number, delta: number) => void;
}) {
	return (
		<div className="grid grid-cols-5 gap-2">
			{products.map((item) => {
				return (
					<div
						key={item.id}
						className="flex flex-col gap-1 bg-[#1e3932] p-2 rounded-lg"
					>
						<img src={item.img} className="w-26 h-27" />
						<p className="text-[#ececec] text-sm font-semibold">{item.name}</p>
						<p className="font-bold text-[#e6caa2] text-md">${item.price}</p>
						<div className="w-full flex justify-center">
							<Quantity
								quantity={item.quantity}
								onIncrease={() => onChangeQty(item.id, +1)}
								onDecrease={() => onChangeQty(item.id, -1)}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProductList;
