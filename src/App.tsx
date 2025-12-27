import OrderTitle from "./components/home/order-title";
import PageLogo from "./components/home/page-logo";
import ProductList from "./components/home/product-list";

function App() {
	return (
		<div className="w-full h-dvh flex flex-col items-center gap-4 bg-[#ececec] p-4">
			<PageLogo />
			<OrderTitle />
			<ProductList />
		</div>
	);
}

export default App;
