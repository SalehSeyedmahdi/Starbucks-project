function Quantity() {
	function AddItem() {
		console.log("add item");
	}
	function Remove() {
		console.log("remove item");
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
				0
			</div>
			<div
				className="w-1/3 flex items-center justify-center bg-[#e6caa2] cursor-pointer"
				onClick={Remove}
			>
				-
			</div>
		</div>
	);
}

export default Quantity;
