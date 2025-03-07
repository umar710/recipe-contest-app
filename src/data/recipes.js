const recipes = [
  {
    name: "Spaghetti Carbonara",
    chef: "Chef Mario",
    totalRatings: 500,
    avgRating: 4.8,
    uploadedOn: "2024-01-15",
    mealType: "Dinner",
    dishType: "Pasta",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description:
      "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
    imgUrl:
      "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
  },
  {
    name: "Chicken Tikka Masala",
    chef: "Chef Raj",
    totalRatings: 450,
    avgRating: 4.7,
    uploadedOn: "2024-02-10",
    mealType: "Lunch",
    dishType: "Curry",
    testKitchenApproved: true,
    contestWinner: true,
    featured: true,
    description:
      "A creamy and flavorful Indian curry dish with grilled chicken.",
    imgUrl:
      "https://shibaskitchen.de/wp-content/uploads/2021/06/P1110181-1153x1536.jpg",
  },
  {
    name: "Sushi Platter",
    chef: "Chef Sato",
    totalRatings: 380,
    avgRating: 4.9,
    uploadedOn: "2024-02-05",
    mealType: "Dinner",
    dishType: "Seafood",
    testKitchenApproved: true,
    contestWinner: false,
    featured: true,
    description:
      "An assortment of fresh sushi, including nigiri, sashimi, and rolls.",
    imgUrl:
      "https://www.sushiatwork.com.au/wp-content/uploads/2020/01/Mixed-Nigiri-Sushi-Platter-1-scaled.jpg",
  },
  {
    name: "Avocado Toast",
    chef: "Chef Emma",
    totalRatings: 600,
    avgRating: 4.6,
    uploadedOn: "2024-03-01",
    mealType: "Breakfast",
    dishType: "Toast",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description:
      "Crispy toast topped with mashed avocado, poached eggs, and chili flakes.",
    imgUrl:
      "https://www.jessicagavin.com/wp-content/uploads/2020/07/avocado-toast-9-600x900.jpg",
  },
  {
    name: "BBQ Ribs",
    chef: "Chef Mike",
    totalRatings: 320,
    avgRating: 4.8,
    uploadedOn: "2024-01-20",
    mealType: "Dinner",
    dishType: "Grill",
    testKitchenApproved: true,
    contestWinner: true,
    featured: true,
    description:
      "Slow-cooked BBQ ribs with a smoky glaze, served with coleslaw.",
    imgUrl:
      "https://www.theblackpeppercorn.com/wp-content/uploads/2015/05/Kalbi-Korean-BBQ-Short-Ribs-square.jpg",
  },
  {
    name: "Greek Salad",
    chef: "Chef Sofia",
    totalRatings: 280,
    avgRating: 4.5,
    uploadedOn: "2024-02-28",
    mealType: "Lunch",
    dishType: "Salad",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description:
      "A refreshing salad with cucumbers, tomatoes, olives, and feta cheese.",
    imgUrl:
      "https://img.taste.com.au/rLfCKvm4/taste/2016/11/super-easy-greek-salad-81664-1.jpeg",
  },
  {
    name: "Margherita Pizza",
    chef: "Chef Antonio",
    totalRatings: 700,
    avgRating: 4.9,
    uploadedOn: "2024-03-05",
    mealType: "Dinner",
    dishType: "Pizza",
    testKitchenApproved: true,
    contestWinner: true,
    featured: true,
    description:
      "A classic Neapolitan pizza with fresh tomatoes, basil, and mozzarella.",
    imgUrl:
      "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-1080x1080.jpg",
  },
  {
    name: "Chocolate Lava Cake",
    chef: "Chef Pierre",
    totalRatings: 450,
    avgRating: 4.8,
    uploadedOn: "2024-02-14",
    mealType: "Dessert",
    dishType: "Cake",
    testKitchenApproved: true,
    contestWinner: true,
    featured: true,
    description: "A rich chocolate cake with a gooey molten center.",
    imgUrl:
      "https://gimmedelicious.com/wp-content/uploads/2020/01/Chocolate-Molten-Lava-Cakes-2-3.jpg",
  },
  {
    name: "Ramen Bowl",
    chef: "Chef Takashi",
    totalRatings: 500,
    avgRating: 4.7,
    uploadedOn: "2024-02-22",
    mealType: "Dinner",
    dishType: "Soup",
    testKitchenApproved: true,
    contestWinner: false,
    featured: true,
    description:
      "A flavorful bowl of ramen with broth, noodles, pork, and egg.",
    imgUrl:
      "https://peasandcrayons.com/wp-content/uploads/2020/06/spicy-shrimp-ramen-bowls-recipe-2.jpg",
  },
  {
    name: "Pancakes with Maple Syrup",
    chef: "Chef Lisa",
    totalRatings: 350,
    avgRating: 4.6,
    uploadedOn: "2024-03-10",
    mealType: "Breakfast",
    dishType: "Pancake",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description:
      "Fluffy pancakes drizzled with pure maple syrup and fresh berries.",
    imgUrl:
      "https://familystylefood.com/wp-content/uploads/2023/01/Buckwheat-Blueberry-Pancakes.jpg",
  },
  {
    name: "Tacos al Pastor",
    chef: "Chef Juan",
    totalRatings: 480,
    avgRating: 4.9,
    uploadedOn: "2024-02-18",
    mealType: "Lunch",
    dishType: "Tacos",
    testKitchenApproved: true,
    contestWinner: true,
    featured: true,
    description:
      "Traditional Mexican tacos with marinated pork, pineapple, and cilantro.",
    imgUrl:
      "https://www.jocooks.com/wp-content/uploads/2022/04/tacos-al-pastor-feature-1.jpg",
  },
  {
    name: "Butter Chicken",
    chef: "Chef Aisha",
    totalRatings: 600,
    avgRating: 4.8,
    uploadedOn: "2024-02-05",
    mealType: "Dinner",
    dishType: "Curry",
    testKitchenApproved: true,
    contestWinner: false,
    featured: true,
    description:
      "A rich and creamy Indian butter chicken dish served with naan.",
    imgUrl:
      "https://easychickenrecipes.com/wp-content/uploads/2019/11/butter-chicken-reshoot-6-of-8.jpg",
  },
  {
    name: "French Onion Soup",
    chef: "Chef Francois",
    totalRatings: 200,
    avgRating: 4.5,
    uploadedOn: "2024-03-02",
    mealType: "Dinner",
    dishType: "Soup",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description:
      "A classic French soup with caramelized onions and melted cheese.",
    imgUrl:
      "https://www.oliviascuisine.com/wp-content/uploads/2022/02/french-onion-soup-pin.jpg",
  },
];

console.log(recipes.length);

export default recipes;
