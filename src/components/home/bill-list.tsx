function BillList({ products }: { products: any[] }) {
	return (
		<div>
			<div className="grid grid-cols-5 gap-2">
				{products.map((item) => {
					return (
						<div
							key={item.id}
							className="flex flex-col gap-1 bg-[#1e3932] p-2 rounded-lg"
						>
							<img src={item.img} className="w-26 h-26" />
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
