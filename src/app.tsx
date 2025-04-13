import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/layouts/footer";
import { Header } from "./components/layouts/header";
import Home from "./components/layouts/home";
import { SideMenu } from "./components/layouts/side-menu";
import PopularGames from "./components/page/popular"; // 根據你實際放的位置修改

export default function App() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const toggleSideMenu = () => {
		setIsSideMenuOpen(!isSideMenuOpen);
	};

	return (
		<>
			<Header />
			<Home />

			<SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
			<Footer onMenuClick={toggleSideMenu} />

			<Routes>
				<Route path="/popular" element={<PopularGames />} />
				{/* 其他路由 */}
			</Routes>
		</>
	);
}
