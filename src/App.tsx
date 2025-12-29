import { useState } from "react";
import BillList from "./components/home/bill-list";
import BillTitle from "./components/home/bill-title";
import OrderTitle from "./components/home/order-title";
import PageLogo from "./components/home/page-logo";
import ProductList from "./components/home/product-list";
import SubmitOrder from "./components/home/submit-order";
import TotalPrice from "./components/home/total-price";
import Data from "./components/shared/json";

function App() {
	const [products, setProducts] = useState(Data);

	const changeQty = (id: number, delta: number) => {
		setProducts((prev) =>
			prev.map((p) =>
				p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p
			)
		);
	};
	return (
		<div className="w-full h-dvh flex flex-col items-center gap-2 bg-[#ececec] p-4">
			<PageLogo />
			<OrderTitle />
			<ProductList products={products} onChangeQty={changeQty} />
			<BillTitle />
			<BillList products={products} />
			<TotalPrice
				total={products.reduce((sum, p) => sum + p.quantity * p.price, 0)}
			/>
			<SubmitOrder />
		</div>
	);
}

export default App;
