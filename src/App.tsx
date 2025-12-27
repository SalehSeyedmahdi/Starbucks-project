import { useState } from "react";
import "./App.css";
import OrderTitle from "./components/home/order-title";
import PageLogo from "./components/home/page-logo";
import ProductCart from "./components/home/product-list";
import Data from "./components/shared/json";

function App() {
	const [data, setData] = useState(Data);
	return (
		<div className="w-full h-dvh flex flex-col items-center gap-4 bg-[#ececec] p-4">
			<PageLogo />
			<OrderTitle />
			<ProductCart data={data} />
		</div>
	);
}

export default App;
