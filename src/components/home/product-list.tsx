import Data from "../shared/json";
import Quantity from "../shared/quantity";

function ProductList() {
	return (
		<div className="grid grid-cols-5 gap-2">
			{Data.map((item) => {
				return (
					<div
						key={item.id}
						className="flex flex-col gap-2 bg-[#1e3932] p-2 rounded-lg"
					>
						<img src={item.img} className="w-26 h-30" />
						<p className="text-[#ececec] text-sm font-semibold">{item.name}</p>
						<p className="font-bold text-[#e6caa2] text-md">${item.price}</p>
						<div className="w-full flex justify-center">
							<Quantity quantity={item.quantity} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProductList;
