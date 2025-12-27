import Data from "../shared/json";

function BillList() {
	return (
		<div>
			<div className="grid grid-cols-5 gap-2">
				{Data.map((item) => {
					return (
						<div
							key={item.id}
							className="flex flex-col gap-2 bg-[#1e3932] p-2 rounded-lg"
						>
							<img src={item.img} className="w-26 h-28" />
							<p className="text-[#ececec] text-sm font-semibold">
								{item.name}
							</p>
							<p className="font-bold text-[#e6caa2] text-md">${item.price}</p>
							<p className="text-[#ececec] text-sm font-semibold">
								Qty: {item.quantity}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default BillList;
