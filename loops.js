const stockData = [
  {
    symbol: "GME",
    name: "Stonks go up 🦍.",
    price: 0.01,
    change: -0.05,
    description:
      "The only stock that makes you laugh while crying about your investments.",
  },
  {
    symbol: "MEEP",
    name: "Meep Meep Enterprises",
    price: 42.42,
    change: 0.42,
    description: "Fastest-growing company in the desert. We outrun coyotes!",
  },
  {
    symbol: "YOLO",
    name: "You Only Live Once Corp.",
    price: 69.69,
    change: 6.9,
    description:
      "Invest in our stock and live life to the fullest. Risky, but YOLO!",
  },
];
for (let stock of stockData) {
  console.log(stock.price);
}
