import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Product from "./pages/Product"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import PageNotFound from "./pages/PageNotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
		</BrowserRouter>
	);
}

export default App;
