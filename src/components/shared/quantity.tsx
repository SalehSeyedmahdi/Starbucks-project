function Quantity({
	quantity,
	onIncrease,
	onDecrease,
}: {
	quantity: number;
	onIncrease: () => void;
	onDecrease: () => void;
}) {
	return (
		<div className="w-4/5 flex">
			<div
				className="w-1/3 flex items-center justify-center bg-[#e6caa2] cursor-pointer"
				onClick={onIncrease}
			>
				+
			</div>
			<div className="w-1/3 flex items-center justify-center text-sm bg-[#FFFFFF]">
				{quantity}
			</div>
			<div
				className="w-1/3 flex items-center justify-center bg-[#e6caa2] cursor-pointer"
				onClick={onDecrease}
			>
				-
			</div>
		</div>
	);
}

export default Quantity;
