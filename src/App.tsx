import BillList from "./components/home/bill-list";
import BillTitle from "./components/home/bill-title";
import OrderTitle from "./components/home/order-title";
import PageLogo from "./components/home/page-logo";
import ProductList from "./components/home/product-list";
import SubmitOrder from "./components/home/submit-order";
import TotalPrice from "./components/home/total-price";

function App() {
	return (
		<div className="w-full h-dvh flex flex-col items-center gap-2 bg-[#ececec] p-4">
			<PageLogo />
			<OrderTitle />
			<ProductList />
			<BillTitle />
			<BillList />
			<TotalPrice />
			<SubmitOrder />
		</div>
	);
}

export default App;
