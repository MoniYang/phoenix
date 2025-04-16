import { useState } from "react";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import { Footer } from "./components/layouts/footer";
import { Header } from "./components/layouts/header";
import { SideMenu } from "./components/layouts/side-menu";
import {
	HotGames,
	NewGames,
	PopularGames,
	RecentlyPlayed,
} from "./components/page/games"; // 根據你實際放的位置修改
import Home from "./components/page/home";

export default function App() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const toggleSideMenu = () => {
		setIsSideMenuOpen(!isSideMenuOpen);
	};

	return (
		<>
			<Header />

			<SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
			<Footer onMenuClick={toggleSideMenu} />

			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/popular" element={<PopularGames />} />
				<Route path="/new-games" element={<NewGames />} />
				<Route path="/recently-played" element={<RecentlyPlayed />} />
				<Route path="/hot-games" element={<HotGames />} />
				{/* 其他路由 */}
			</Routes>
		</>
	);
}
