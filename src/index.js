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

			{pizzaData.length ? (
				<ul className="pizzas">
					{pizzaData.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				<p>We're currently updating our menu please come back later :)</p>
			)}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	if (pizzaObj.soldOut) return null;

	return (
		<li className="pizza">
			<img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.price} Ft</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	// if (!isOpen) return <p>CLOSED</p>;

	return (
		<footer className="footer">
			{isOpen ? (
				<Order closeHour={closeHour} openHour={openHour} />
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and {closeHour}:00
				</p>
			)}
		</footer>
	);
}

function Order({ closeHour, openHour }) {
	return (
		<div className="order">
			<p>
				We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
				online.
			</p>
			<button className="btn">Order</button>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
