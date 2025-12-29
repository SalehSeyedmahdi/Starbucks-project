function TotalPrice({ total }: { total: number }) {
	return (
		<div className="text-xl font-semibold text-[#0a2746]">Total: ${total}</div>
	);
}

export default TotalPrice;
