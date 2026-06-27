import Logo from "../../assets/images/logo.png";

function PageLogo() {
	return (
		<div className="flex justify-center items-center gap-4">
			<img src={Logo} className="w-14 h-14" />
			<p className="font-extrabold text-4xl">Starbucks</p>
		</div>
	);
}

export default PageLogo;
