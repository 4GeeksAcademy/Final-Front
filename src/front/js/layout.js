import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { ServicioCategory } from "./pages/servicio-category";
import { Servicioindividual } from "./pages/servicio-Individual";
import injectContext from "./store/appContext";

import MyNavbar from "./component/navbar";
import { Footer } from "./component/footer";
import Landingpage from "./pages/landingPage";
import { Registro } from "./pages/registro";
import { PasswordRecovery } from "./component/PasswordRecovery";
import { PasswordRecovery2 } from "./component/PasswordRecovery2";
import Register from "./pages/register";
import RegisterService from "./pages/registerService";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<MyNavbar />
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Landingpage />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/category">
							<ServicioCategory />
						</Route>
						<Route exact path="/category/:theid">
							<Servicioindividual />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/passwordrecovery">
							<PasswordRecovery />
						</Route>
						<Route exact path="/passwordrecovery2">
							<PasswordRecovery2 />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/registerservice">
							<RegisterService />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
