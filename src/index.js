import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 1590,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato sauce, fresh basil and mozarella",
		price: 2990,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato sauce, mozarella, spinach, and ricotta cheese",
		price: 3150,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato sauce, mozarella, mushrooms, and onion",
		price: 3350,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato sauce, mozarella, and pepperoni",
		price: 3570,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato sauce, mozarella, ham, aragula, and burrata cheese",
		price: 3420,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	return (
		<main className="menu">
			<h2>Our menu</h2>
			<ul className="pizzas">
				{pizzaData.map((pizza) => (
					<Pizza pizzaObj={pizza} key={pizza.name} />
				))}
			</ul>
		</main>
	);
}

function Pizza(props) {
	return (
		<li className="pizza">
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
			<div>
				<h3>{props.pizzaObj.name}</h3>
				<p>{props.pizzaObj.ingredients}</p>
				<span>{props.pizzaObj.price} Ft</span>
			</div>
		</li>
	);
}

function Footer() {
	return (
		<footer className="footer">
			{new Date().toLocaleTimeString()} We're currently open!
		</footer>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
