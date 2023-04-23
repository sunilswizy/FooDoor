const MENU_ITEMS = [
	{
		id: 1,
		title: "juice",
		routeName: "juice",
		items: [
			{
				id: 1,
				name: "Butter Fruit",
				imageUrl: "https://i.ibb.co/tKw3jG6/IMG-20220126-210045.jpg",
				price: 60,
				priceUrl: "price_1KQYBOSAvfC2s2ZaOTdhZMuS",
				stock: 12,
			},
			{
				id: 2,
				name: "Straw Berry",
				imageUrl: "https://i.ibb.co/WyhPDLK/image-downloader-1643202005928.jpg",
				price: 50,
				priceUrl: "price_1KQXwlSAvfC2s2ZaOhcW10J7",
				stock: 14,
			},
			{
				id: 3,
				name: "pomegranate",
				imageUrl: "https://i.ibb.co/yq6Kh6x/image-downloader-1643202022063.jpg",
				price: 40,
				priceUrl: "price_1KQXySSAvfC2s2Za4M7pWXBJ",
				stock: 13,
			},
			{
				id: 4,
				name: "Blackberry",
				imageUrl: "https://i.ibb.co/gz9n9K7/image-downloader-1643202085252.jpg",
				price: 40,
				priceUrl: "price_1KQY8kSAvfC2s2ZaDku82Zt2",
				stock: 13,
			},
			{
				id: 5,
				name: "Mango",
				imageUrl: "https://i.ibb.co/ZYBwrVk/image-downloader-1643202000196.jpg",
				price: 30,
				priceUrl: "price_1KQXtYSAvfC2s2ZaextJR5uP",
				stock: 12,
			},
			{
				id: 6,
				name: "Orange Carrot",
				imageUrl: "https://i.ibb.co/SvVQ6rB/image-downloader-1643202011656.jpg",
				price: 30,
				priceUrl: "price_1KQY0MSAvfC2s2Zae2VN4Qhr",
				stock: 18,
			},
			{
				id: 7,
				name: "Green Apple",
				imageUrl: "https://i.ibb.co/bNGHTFC/image-downloader-1643202032310.jpg",
				price: 50,
				priceUrl: "price_1KQY3DSAvfC2s2Za5yHdPt5D",
				stock: 17,
			},
			{
				id: 8,
				name: "Orange",
				imageUrl: "https://i.ibb.co/vqLNyBw/image-downloader-1643202052391.jpg",
				price: 35,
				priceUrl: "price_1KQY1rSAvfC2s2ZaQf9Nhmsu",
				stock: 12,
			},
			{
				id: 9,
				name: "Carrot",
				imageUrl: "https://i.ibb.co/JynY6sP/image-downloader-1643202074755.jpg",
				price: 30,
				priceUrl: "price_1KQY42SAvfC2s2ZaIlvyFLUf",
				stock: 10,
			},
			{
				id: 10,
				name: "Fruit Mix",
				imageUrl: "https://i.ibb.co/QFCPtN1/image-downloader-1643202145059.jpg",
				price: 60,
				priceUrl: "price_1KQY62SAvfC2s2ZaInZwlYh3",
				stock: 12,
			},
			{
				id: 11,
				name: "Mint",
				imageUrl: "https://i.ibb.co/Lpd7RJG/image-downloader-1643202180129.jpg",
				price: 25,
				priceUrl: "price_1KQY9sSAvfC2s2ZacTn2LsPd",
				stock: 15,
			},
			{
				id: 12,
				name: "Kiwi",
				imageUrl: "https://i.ibb.co/CmtGhwm/image-downloader-1643202199066.jpg",
				price: 40,
				priceUrl: "price_1KQYCqSAvfC2s2ZaMIu5d5pj",
				stock: 12,
			},
			{
				id: 13,
				name: "Apple",
				imageUrl: "https://i.ibb.co/YtSWNvd/Apple-Juice-Square.jpg",
				price: 50,
				priceUrl: "price_1KQYDpSAvfC2s2ZaYOq5XeDs",
				stock: 14,
			},
			{
				id: 14,
				name: "coriander",
				imageUrl: "https://i.ibb.co/w44bH7V/image-downloader-1643202133817.jpg",
				price: 30,
				priceUrl: "price_1KQYF0SAvfC2s2ZasOD3F4t9",
				stock: 13,
			},
		],
	},
	{
		id: 2,
		title: "Biriyani",
		routeName: "biriyani",
		items: [
			{
				id: 15,
				name: "Chicken Biriyani",
				imageUrl: "https://i.ibb.co/kKd9FTH/image-downloader-1643206449291.jpg",
				price: 220,
				priceUrl: "price_1KmzOqSAvfC2s2ZaSofscrLW",
				stock: 13,
			},
			{
				id: 16,
				name: "Kerala Biriyani",
				imageUrl: "https://i.ibb.co/PzDpPrJ/image-downloader-1643206473624.jpg",
				price: 190,
				priceUrl: "price_1KmzQNSAvfC2s2ZakLnkxq39",
				stock: 13,
			},
			{
				id: 17,
				name: "Ambur Biriyani",
				imageUrl: "https://i.ibb.co/y4xBnMG/image-downloader-1643206467576.jpg",
				price: 110,
				priceUrl: "price_1KmzROSAvfC2s2ZaqB4xwQwu",
				stock: 13,
			},
			{
				id: 18,
				name: "Hyderbad Biriyani",
				imageUrl: "https://i.ibb.co/n8SjcgC/image-downloader-1643206492164.jpg",
				price: 160,
				priceUrl: "price_1KmzSKSAvfC2s2ZaqE6Vwptr",
				stock: 13,
			},
			{
				id: 19,
				name: "Thallapakattu Biriyani",
				imageUrl: "https://i.ibb.co/jb0fJRg/image-downloader-1643206518861.jpg",
				price: 160,
				priceUrl: "price_1KmzTHSAvfC2s2ZalWcPeA5Z",
				stock: 13,
			},
			{
				id: 20,
				name: "South Indian Biriyani",
				imageUrl: "https://i.ibb.co/gP610Kk/image-downloader-1643206460319.jpg",
				price: 280,
				priceUrl: "price_1KmzULSAvfC2s2ZaAgWcD4Pf",
				stock: 13,
			},
			{
				id: 21,
				name: "South egg Biriyani",
				imageUrl: "https://i.ibb.co/x87yLHh/image-downloader-1643206544818.jpg",
				price: 200,
				priceUrl: "price_1KmzVkSAvfC2s2ZaRzqjvA2T",
				stock: 13,
			},
			{
				id: 22,
				name: "Egg Biriyani",
				imageUrl: "https://i.ibb.co/2YD9WDc/image-downloader-1643206568128.jpg",
				price: 160,
				priceUrl: "price_1KmzWcSAvfC2s2ZafXgIncai",
				stock: 13,
			},
			{
				id: 23,
				name: "Chettinadu Biriyani",
				imageUrl: "https://i.ibb.co/yVsp9zY/image-downloader-1643206618999.jpg",
				price: 190,
				priceUrl: "price_1KmzXpSAvfC2s2ZaR5gay5GL",
				stock: 13,
			},
			{
				id: 24,
				name: "Pakistani Biriyani",
				imageUrl: "https://i.ibb.co/q7bHXjG/image-downloader-1643206627771.jpg",
				price: 200,
				priceUrl: "price_1KmzYpSAvfC2s2ZaZzNvtD18",
				stock: 13,
			},
			{
				id: 25,
				name: "Lucknowi Biriyani",
				imageUrl: "https://i.ibb.co/fFj4B51/image-downloader-1643206670524.jpg",
				price: 160,
				priceUrl: "price_1KmzZcSAvfC2s2Za9F2y0wG2",
				stock: 13,
			},
			{
				id: 26,
				name: "Pot Biriyani",
				imageUrl:
					"https://i.ibb.co/Gs9mnFt/image-downloader-1643206638726-jpg.webp",
				price: 190,
				priceUrl: "price_1KmzakSAvfC2s2ZaIlUDvvdm",
				stock: 13,
			},
			{
				id: 27,
				name: "Pepper Biriyani",
				imageUrl: "https://i.ibb.co/4MnwM4D/image-downloader-1643206686943.jpg",
				price: 200,
				priceUrl: "price_1KmzbcSAvfC2s2Zat4yzrGnM",
				stock: 13,
			},
		],
	},
	{
		id: 3,
		title: "noodles",
		routeName: "noodles",
		items: [
			{
				id: 28,
				name: "Chicken noodles",
				imageUrl: "https://i.ibb.co/5j1nJW6/image-downloader-1643205687775.jpg",
				price: 125,
				priceUrl: "price_1KmsUeSAvfC2s2ZaoEMvd3lP",
				stock: 13,
			},
			{
				id: 29,
				name: "Egg noodles",
				imageUrl: "https://i.ibb.co/rZqbGrP/image-downloader-1643205692234.jpg",
				price: 90,
				priceUrl: "price_1KmsW3SAvfC2s2ZaeDrBzkuo",
				stock: 13,
			},
			{
				id: 30,
				name: "Masaledar noodles",
				imageUrl: "https://i.ibb.co/wYdb5Nd/image-downloader-1643205770419.jpg",
				price: 90,
				priceUrl: "price_1KmsXdSAvfC2s2ZaFCAnVhEC",
				stock: 13,
			},
			{
				id: 31,
				name: "Curry noodles",
				imageUrl: "https://i.ibb.co/B4GKTZ8/image-downloader-1643205709421.jpg",
				price: 80,
				priceUrl: "price_1KmsYxSAvfC2s2Za1i3vlA2Y",
				stock: 13,
			},
			{
				id: 32,
				name: "Schezwan noodles",
				imageUrl: "https://i.ibb.co/LggVMrB/image-downloader-1643205793979.jpg",
				price: 90,
				priceUrl: "price_1KmsaPSAvfC2s2ZaBYXpPq0M",
				stock: 13,
			},
			{
				id: 33,
				name: "Hongkong noodles",
				imageUrl: "https://i.ibb.co/RYcRV24/image-downloader-1643205828586.jpg",
				price: 165,
				priceUrl: "price_1KmtEsSAvfC2s2ZaUyGuo4qN",
				stock: 13,
			},
			{
				id: 34,
				name: "Tripple noodles",
				imageUrl: "https://i.ibb.co/nQHDL7s/image-downloader-1643205838139.jpg",
				price: 185,
				priceUrl: "price_1KmtG2SAvfC2s2ZavagavPiC",
				stock: 13,
			},
			{
				id: 35,
				name: "chinese noodles",
				imageUrl: "https://i.ibb.co/cvpJXMF/image-downloader-1643205896388.jpg",
				price: 100,
				priceUrl: "price_1KmtHPSAvfC2s2ZaPGawdCGE",
				stock: 13,
			},
			{
				id: 36,
				name: "Sehezwaan veg noodles",
				imageUrl: "https://i.ibb.co/2Zb0rdz/image-downloader-1643205919742.jpg",
				price: 90,
				priceUrl: "price_1KmtJOSAvfC2s2ZaFcJCencX",
				stock: 13,
			},
			{
				id: 37,
				name: "mushroom noodles",
				imageUrl: "https://i.ibb.co/SJtjmxt/image-downloader-1643205702033.jpg",
				price: 185,
				priceUrl: "price_1KmtKaSAvfC2s2Za30KvQCdb",
				stock: 13,
			},
		],
	},
	{
		id: 4,
		title: "icecream",
		routeName: "icecream",
		items: [
			{
				id: 38,
				name: "Green Pistha",
				imageUrl: "https://i.ibb.co/MBRFsXR/image-downloader-1643203530085.jpg",
				price: 25,
				priceUrl: "price_1KltC5SAvfC2s2Za2izEaMou",
				stock: 13,
			},
			{
				id: 39,
				name: "Sweet pista kulfi",
				imageUrl:
					"https://i.ibb.co/fn4CmcL/rajwari-or-rajwadi-sweet-kesar-badam-pista-kulfi-or-ice-cream-candy.jpg",
				price: 20,
				priceUrl: "price_1KltHASAvfC2s2ZaW2hWS9h6",
				stock: 13,
			},
			{
				id: 40,
				name: "Vanilla stick",
				imageUrl: "https://i.ibb.co/6shjL2s/image-downloader-1643203678064.jpg",
				price: 80,
				priceUrl: "price_1KltJWSAvfC2s2ZadvyH0En9",
				stock: 13,
			},
			{
				id: 41,
				name: "Milk chocolate chip",
				imageUrl: "https://i.ibb.co/JdrXsCj/image-downloader-1643203654840.jpg",
				price: 80,
				priceUrl: "price_1KltMNSAvfC2s2ZawdtOmZsT",
				stock: 10,
			},
			{
				id: 42,
				name: "Starwbery",
				imageUrl:
					"https://i.ibb.co/fv1n27W/Homemade-yogurt-ice-cream-with-cherry-mint-leaves-in-bowl-with-spoon-on-wooden-table-top-view.jpg",
				price: 45,
				priceUrl: "price_1KmfEPSAvfC2s2ZaWykQJk0B",
				stock: 13,
			},
			{
				id: 43,
				name: "Butterscotch",
				imageUrl: "https://i.ibb.co/0rxCTs6/image-downloader-1643203671315.jpg",
				price: 35,
				priceUrl: "price_1KmfGZSAvfC2s2ZacUNM5oNy",
				stock: 13,
			},
			{
				id: 44,
				name: "Vannila",
				imageUrl: "https://i.ibb.co/2KcZ452/image-downloader-1643203590503.jpg",
				price: 20,
				priceUrl: "price_1KmfIXSAvfC2s2ZaW7FGQc0S",
				stock: 13,
			},
			{
				id: 45,
				name: "Choco bar",
				imageUrl: "https://i.ibb.co/31wdFRT/image-downloader-1643203584186.jpg",
				price: 25,
				priceUrl: "price_1KmfKDSAvfC2s2Za0VpqSuTJ",
				stock: 13,
			},
			{
				id: 46,
				name: "Blackberry",
				imageUrl: "https://i.ibb.co/phDFvKp/image-downloader-1643203560027.jpg",
				price: 20,
				priceUrl: "price_1KmfLbSAvfC2s2Za3OSCnD55",
				stock: 13,
			},
			{
				id: 47,
				name: "Chocolate falooda",
				imageUrl: "https://i.ibb.co/qWjD96d/image-downloader-1643203542588.jpg",
				price: 30,
				priceUrl: "price_1KmfNwSAvfC2s2ZaZ1Eb7NKy",
				stock: 13,
			},
			{
				id: 48,
				name: "Mixed flover ice cream",
				imageUrl: "https://i.ibb.co/QH74GKT/image-downloader-1643203521862.jpg",
				price: 50,
				priceUrl: "price_1KmfPgSAvfC2s2ZaPeTdl2oP",
				stock: 13,
			},
			{
				id: 49,
				name: "Chocolate Oreo",
				imageUrl: "https://i.ibb.co/dtCShJ3/image-downloader-1643203490459.jpg",
				price: 35,
				priceUrl: "price_1KmfRUSAvfC2s2ZaRbXuLHIS",
				stock: 13,
			},
			{
				id: 50,
				name: "Chocolate",
				imageUrl: "https://i.ibb.co/CB4XRHC/image-downloader-1643203460589.jpg",
				price: 20,
				priceUrl: "price_1KmfTBSAvfC2s2ZaUbupir8g",
				stock: 13,
			},
			{
				id: 51,
				name: "Badam",
				imageUrl: "https://i.ibb.co/pw5vdRK/image-downloader-1643203375437.jpg",
				price: 50,
				priceUrl: "price_1KmfUfSAvfC2s2ZafOSdciu7",
				stock: 13,
			},
			{
				id: 52,
				name: "Kulfi",
				imageUrl: "https://i.ibb.co/c6k7pQ6/image-downloader-1643212155983.jpg",
				price: 40,
				priceUrl: "price_1KmfWYSAvfC2s2Zaib6iIWje",
				stock: 13,
			},
		],
	},
	{
		id: 5,
		title: "pizza",
		routeName: "pizza",
		items: [
			{
				id: 53,
				name: "Prosciutto funghi pizza",
				imageUrl: "https://i.ibb.co/4VCCNPL/image-downloader-1643204493207.jpg",
				price: 325,
				priceUrl: "price_1KmhGJSAvfC2s2ZaMxVNBqJW",
				stock: 13,
			},
			{
				id: 54,
				name: "Pizza Bufalina",
				imageUrl:
					"https://i.ibb.co/HBJj4rz/Tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-concrete-background-Top-view-o.jpg",
				price: 300,
				priceUrl: "price_1KmhIBSAvfC2s2ZacSoN8fir",
				stock: 13,
			},
			{
				id: 55,
				name: "Pizza Margherita",
				imageUrl:
					"https://i.ibb.co/z7qnmzC/Pepperoni-Pizza-with-Mozzarella-cheese-salami-Tomato-sauce-pepper-Spices-and-Fresh-arugula-Italian-p.jpg",
				price: 200,
				priceUrl: "price_1KmhJOSAvfC2s2ZaFTahhRX9",
				stock: 13,
			},
			{
				id: 56,
				name: "Calzon pizza",
				imageUrl: "https://i.ibb.co/LzLpwjk/image-downloader-1643204533948.jpg",
				price: 250,
				priceUrl: "price_1KmhL5SAvfC2s2ZaXWApuYjG",
				stock: 13,
			},
			{
				id: 57,
				name: "Caprese pizza",
				imageUrl: "https://i.ibb.co/rmkCywG/image-downloader-1643204540262.jpg",
				price: 280,
				priceUrl: "price_1KmhM0SAvfC2s2ZaNmEfHCTU",
				stock: 13,
			},
			{
				id: 58,
				name: "Pizza marinara",
				imageUrl: "https://i.ibb.co/sR3jcjg/image-downloader-1643204568944.jpg",
				price: 180,
				priceUrl: "price_1KmhNWSAvfC2s2ZaHyySCtqv",
				stock: 13,
			},
			{
				id: 59,
				name: "Pepperoni pizza",
				imageUrl: "https://i.ibb.co/Fmz0w9b/image-downloader-1643204618224.jpg",
				price: 350,
				priceUrl: "price_1KmhOfSAvfC2s2ZahjTOv5ID",
				stock: 13,
			},
			{
				id: 60,
				name: "Pizza Bianca",
				imageUrl: "https://i.ibb.co/StLW07g/image-downloader-1643204510695.jpg",
				price: 200,
				priceUrl: "price_1KmhQ1SAvfC2s2ZaCld1gp0b",
				stock: 13,
			},
			{
				id: 61,
				name: "Pizza grandiosa",
				imageUrl: "https://i.ibb.co/wJGpvfd/image-downloader-1643204673562.jpg",
				price: 150,
				priceUrl: "price_1KmhR1SAvfC2s2ZasgSvw1LK",
				stock: 13,
			},
			{
				id: 62,
				name: "Tomato pie",
				imageUrl: "https://i.ibb.co/Sw05N8m/image-downloader-1643204925581.jpg",
				price: 300,
				priceUrl: "price_1KmhS3SAvfC2s2ZaiRTfZGYs",
				stock: 13,
			},
		],
	},
	{
		id: 6,
		title: "cake",
		routeName: "cake",
		items: [
			{
				id: 63,
				name: "Straw berry cake",
				imageUrl: "https://i.ibb.co/4FKQYKc/image-downloader-1649567078159.jpg",
				price: 350,
				priceUrl: "price_1Kn1rDSAvfC2s2ZaptxXKJLY",
				stock: 13,
			},
			{
				id: 64,
				name: "Straw berry forest",
				imageUrl: "https://i.ibb.co/0B9Tjv5/image-downloader-1649567153401.jpg",
				price: 300,
				priceUrl: "price_1Kn1sJSAvfC2s2Za4OwFNA3U",
				stock: 13,
			},
			{
				id: 65,
				name: "Chocolate cake",
				imageUrl: "https://i.ibb.co/X8knjVQ/image-downloader-1649567139095.jpg",
				price: 200,
				priceUrl: "price_1Kn1t5SAvfC2s2ZaJxsR3ATT",
				stock: 13,
			},
			{
				id: 66,
				name: "Brownie",
				imageUrl: "https://i.ibb.co/7J8kYkC/image-downloader-1649567130683.jpg",
				price: 250,
				priceUrl: "price_1Kn1trSAvfC2s2Zahtsi2F9h",
				stock: 13,
			},
			{
				id: 68,
				name: "Vanilla jelly",
				imageUrl: "https://i.ibb.co/vHKW7xx/image-downloader-1649567315182.jpg",
				price: 380,
				priceUrl: "price_1Kn1wISAvfC2s2ZaDJuIz3v2",
				stock: 13,
			},
			{
				id: 69,
				name: "Birthday special",
				imageUrl: "https://i.ibb.co/pPvMvHR/image-downloader-1649567328932.jpg",
				price: 350,
				priceUrl: "price_1Kn1xFSAvfC2s2Za99qLnOa4",
				stock: 13,
			},
			{
				id: 70,
				name: "Vanilla piece",
				imageUrl: "https://i.ibb.co/sgCRv7r/image-downloader-1649567354767.jpg",
				price: 100,
				priceUrl: "price_1Kn1y6SAvfC2s2Za4m3wfBJQ",
				stock: 13,
			},
			{
				id: 71,
				name: "Strawberry cup cake",
				imageUrl: "https://i.ibb.co/4FCNZ2w/image-downloader-1649567425491.jpg",
				price: 150,
				priceUrl: "price_1Kn1yzSAvfC2s2Zamb4aD6LW",
				stock: 13,
			},

			{
				id: 72,
				name: "Vanilla forest",
				imageUrl: "https://i.ibb.co/5MkkhXD/image-downloader-1649567507702.jpg",
				price: 50,
				priceUrl: "price_1Kn20kSAvfC2s2ZamZi6No2v",
				stock: 13,
			},
			{
				id: 73,
				name: "Bianca cake",
				imageUrl: "https://i.ibb.co/TMMLqyW/image-downloader-1649567631660.jpg",
				price: 200,
				priceUrl: "price_1Kn21VSAvfC2s2ZacTyHneYG",
				stock: 13,
			},
			{
				id: 74,
				name: "Choco cupcake",
				imageUrl: "https://i.ibb.co/4WHpDPB/image-downloader-1649567764435.jpg",
				price: 150,
				priceUrl: "price_1Kn22fSAvfC2s2ZaJCA0lQCQ",
				stock: 13,
			},
			{
				id: 75,
				name: "Brownie cupcake",
				imageUrl: "https://i.ibb.co/CzMjPk5/image-downloader-1649567838134.jpg",
				price: 150,
				priceUrl: "price_1Kn23YSAvfC2s2Za5JP6lMz3",
				stock: 13,
			},
			{
				id: 76,
				name: "Cupcakes",
				imageUrl:
					"https://i.ibb.co/2qLw61z/image-downloader-1649567931006-jpg.webp",
				price: 200,
				priceUrl: "price_1Kn257SAvfC2s2ZacqVNDCBz",
				stock: 13,
			},
		],
	},
];

export default MENU_ITEMS;