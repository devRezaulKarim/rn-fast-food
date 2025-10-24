const dummyData = {
  categories: [
    { name: "Burgers", description: "Juicy grilled burgers" },
    { name: "Pizzas", description: "Oven-baked cheesy pizzas" },
    { name: "Burritos", description: "Rolled Mexican delights" },
    { name: "Sandwiches", description: "Stacked and stuffed sandwiches" },
    { name: "Wraps", description: "Rolled up wraps packed with flavor" },
    { name: "Bowls", description: "Balanced rice and protein bowls" },
  ],

  customizations: [
    // Toppings
    {
      name: "Cheese",
      price: 25,
      type: "topping",
      image: "https://i.ibb.co.com/wrd7tqq9/cheese.webp",
    },
    {
      name: "Jalapeños",
      price: 20,
      type: "topping",
      image: "https://i.ibb.co.com/RpBKLtWb/Jalapeno.webp",
    },
    {
      name: "Onions",
      price: 10,
      type: "topping",
      image: "https://i.ibb.co.com/cKmSnrJZ/onions.webp",
    },
    {
      name: "Olives",
      price: 15,
      type: "topping",
      image: "https://i.ibb.co.com/wN5cC94p/olives.webp",
    },
    {
      name: "Mushrooms",
      price: 18,
      type: "topping",
      image: "https://i.ibb.co.com/W4VJWpQs/mushrooms.webp",
    },
    {
      name: "Tomatoes",
      price: 10,
      type: "topping",
      image: "https://i.ibb.co.com/LfwZ1JP/tomatoes.webp",
    },
    {
      name: "Bacon",
      price: 30,
      type: "topping",
      image: "https://i.ibb.co.com/JFgrqYfF/bacon.webp",
    },
    {
      name: "Avocado",
      price: 35,
      type: "topping",
      image: "https://i.ibb.co.com/x8Cs36jR/avocado.webp",
    },

    // Sides
    {
      name: "Coke",
      price: 30,
      type: "side",
      image: "https://i.ibb.co.com/6RhXZGX9/coke.webp",
    },
    {
      name: "Fries",
      price: 35,
      type: "side",
      image: "https://i.ibb.co.com/sxJJJs0/fries.webp",
    },
    {
      name: "Garlic Bread",
      price: 40,
      type: "side",
      image: "https://i.ibb.co.com/JRnf5LtS/garlic-bread.webp",
    },
    {
      name: "Chicken Nuggets",
      price: 50,
      type: "side",
      image: "https://i.ibb.co.com/RpdMwWmB/chicken-nuggets.webp",
    },
    {
      name: "Iced Tea",
      price: 28,
      type: "side",
      image: "https://i.ibb.co.com/Ld7HJFt7/iced-tea.webp",
    },
    {
      name: "Salad",
      price: 33,
      type: "side",
      image: "https://i.ibb.co.com/1J9HXj7j/salad.webp",
    },
    {
      name: "Potato Wedges",
      price: 38,
      type: "side",
      image: "https://i.ibb.co.com/4ZNF0rBL/potato-wedges.webp",
    },
    {
      name: "Mozzarella Sticks",
      price: 45,
      type: "side",
      image: "https://i.ibb.co.com/5xYjGCmH/mozarella-sticks.webp",
    },
    {
      name: "Sweet Corn",
      price: 25,
      type: "side",
      image: "https://i.ibb.co.com/Y7Rrw1Nc/sweet-corn.webp",
    },
    {
      name: "Choco Lava Cake",
      price: 42,
      type: "side",
      image: "https://i.ibb.co.com/k6zct78F/chocolate-lava-cake.webp",
    },
  ],

  menu: [
    {
      name: "Classic Cheeseburger",
      description:
        "A juicy grilled beef patty topped with melted cheese, lettuce, and tomato, all stacked in a soft, toasted bun. Perfectly balanced flavors and textures make this a timeless favorite. Enjoy it with fries or a chilled Coke for a complete and satisfying meal.",
      image_url:
        "https://i.ibb.co.com/tMJWm5p3/big-beef-double-cheese-burger-ai-generated-free-png.webp",
      price: 25.99,
      rating: 4.5,
      calories: 550,
      protein: 25,
      category_name: "Burgers",
      customizations: ["Extra Cheese", "Coke", "Fries", "Onions", "Bacon"],
    },
    {
      name: "Pepperoni Pizza",
      description:
        "Loaded with gooey mozzarella and spicy pepperoni on a crispy hand-tossed crust. Each slice bursts with rich tomato sauce and smoky flavor, baked to golden perfection. A must-try classic for pizza lovers craving bold, cheesy indulgence with every bite.",
      image_url:
        "https://i.ibb.co.com/HDfYT4wB/pepperoni-pizza-isolated-illustration-ai-generative-free-png.webp",
      price: 30.99,
      rating: 4.7,
      calories: 700,
      protein: 30,
      category_name: "Pizzas",
      customizations: [
        "Extra Cheese",
        "Jalapeños",
        "Garlic Bread",
        "Coke",
        "Olives",
      ],
    },
    {
      name: "Bean Burrito",
      description:
        "A hearty wrap filled with seasoned beans, rice, and zesty salsa. Soft, warm tortilla and bold spices make every bite satisfying. Perfect for vegetarians or anyone who loves comforting flavors with a touch of freshness and spice.",
      image_url:
        "https://i.ibb.co.com/MyfV5C3s/deliciously-grilled-burritos-filled-with-beans-corn-and-fresh-vegetables-served-with-lime-wedge-and.webp",
      price: 20.99,
      rating: 4.2,
      calories: 480,
      protein: 18,
      category_name: "Burritos",
      customizations: ["Jalapeños", "Iced Tea", "Fries", "Salad"],
    },
    {
      name: "BBQ Bacon Burger",
      description:
        "Smoky BBQ sauce, crispy bacon, and melted cheddar top a juicy beef patty in this crowd favorite. Every bite is rich, tangy, and perfectly balanced. Ideal with fries and a cold Coke for the ultimate burger experience.",
      image_url:
        "https://i.ibb.co.com/bMQW9VGs/a-large-hamburger-with-cheese-onions-and-lettuce-free-png.webp",
      price: 27.5,
      rating: 4.8,
      calories: 650,
      protein: 29,
      category_name: "Burgers",
      customizations: ["Onions", "Fries", "Coke", "Bacon", "Avocado"],
    },
    {
      name: "Chicken Caesar Wrap",
      description:
        "Grilled chicken, fresh lettuce, parmesan, and creamy Caesar dressing wrapped in a soft tortilla. It’s light, crisp, and full of flavor—perfect for a healthy lunch or a quick bite on the go.",
      image_url:
        "https://i.ibb.co.com/dJcRNGRs/caesar-wrap-grilled-chicken-isolated-on-transparent-background-free-png.webp",
      price: 21.5,
      rating: 4.4,
      calories: 490,
      protein: 28,
      category_name: "Wraps",
      customizations: ["Extra Cheese", "Coke", "Potato Wedges", "Tomatoes"],
    },
    {
      name: "Grilled Veggie Sandwich",
      description:
        "Roasted bell peppers, zucchini, and onions with melted cheese and pesto on toasted bread. A light yet flavorful sandwich packed with fresh veggies and smoky aroma, ideal for a quick and healthy meal.",
      image_url:
        "https://i.ibb.co.com/vCY5B6xV/grilled-sesame-seed-bread-veggie-sandwich-with-tomato-and-onion-free-png.webp",
      price: 19.99,
      rating: 4.1,
      calories: 420,
      protein: 19,
      category_name: "Sandwiches",
      customizations: ["Mushrooms", "Olives", "Mozzarella Sticks", "Iced Tea"],
    },
    {
      name: "Double Patty Burger",
      description:
        "Two juicy beef patties stacked with cheese, lettuce, and tomato for double the flavor. Big, bold, and incredibly satisfying—this burger is made for serious appetites and true burger lovers.",
      image_url:
        "https://i.ibb.co.com/jPppxSqL/double-cheeseburger-with-lettuce-tomatoes-cheese-and-sesame-bun-free-png.webp",
      price: 32.99,
      rating: 4.9,
      calories: 720,
      protein: 35,
      category_name: "Burgers",
      customizations: [
        "Extra Cheese",
        "Onions",
        "Fries",
        "Coke",
        "Chicken Nuggets",
      ],
    },
    {
      name: "Paneer Tikka Wrap",
      description:
        "Grilled paneer cubes marinated in tikka spices, wrapped with veggies and mint chutney in a soft tortilla. A spicy, flavorful vegetarian favorite with bold Indian-inspired taste and a satisfying bite.",
      image_url:
        "https://i.ibb.co.com/DH8rstsn/delicious-wraps-a-tantalizing-array-of-wraps-filled-with-vibrant-vegetables-succulent-fillings-and-f.webp",
      price: 23.99,
      rating: 4.6,
      calories: 470,
      protein: 20,
      category_name: "Wraps",
      customizations: ["Jalapeños", "Tomatoes", "Salad", "Fries", "Iced Tea"],
    },
    {
      name: "Mexican Burrito Bowl",
      description:
        "A colorful mix of rice, beans, corn, guacamole, and salsa served fresh in a bowl. Each bite delivers bold Mexican flavors and wholesome ingredients, making it a refreshing yet filling choice.",
      image_url:
        "https://i.ibb.co.com/DHhSkM5q/healthy-quinoa-bowl-with-avocado-tomato-and-black-beans-ingredients-free-png.webp",
      price: 26.49,
      rating: 4.7,
      calories: 610,
      protein: 24,
      category_name: "Bowls",
      customizations: ["Avocado", "Sweet Corn", "Salad", "Iced Tea"],
    },
    {
      name: "Spicy Chicken Sandwich",
      description:
        "Crispy chicken fillet coated in spicy sauce with lettuce and pickles inside a toasted bun. Crunchy, juicy, and full of heat—this sandwich is perfect for those who love bold flavors.",
      image_url:
        "https://i.ibb.co.com/zWQbXw0w/a-grilled-chicken-sandwich-with-lettuce-and-tomatoes-free-png.webp",
      price: 24.99,
      rating: 4.3,
      calories: 540,
      protein: 26,
      category_name: "Sandwiches",
      customizations: [
        "Jalapeños",
        "Onions",
        "Fries",
        "Coke",
        "Choco Lava Cake",
      ],
    },
    {
      name: "Classic Margherita Pizza",
      description:
        "A simple yet flavorful pizza topped with tomato sauce, mozzarella, and fresh basil. Crispy crust and creamy cheese make it a true Italian classic loved for its freshness and balance.",
      image_url:
        "https://i.ibb.co.com/Vp9whSyN/free-isolated-on-transparent-background-delicious-pizza-topped-with-fresh-tomatoes-basil-and-melted.webp",
      price: 26.99,
      rating: 4.1,
      calories: 590,
      protein: 21,
      category_name: "Pizzas",
      customizations: ["Extra Cheese", "Olives", "Coke", "Garlic Bread"],
    },
    {
      name: "Protein Power Bowl",
      description:
        "Packed with grilled chicken, quinoa, avocado, and veggies, this bowl offers a perfect balance of protein and freshness. A healthy, flavorful choice to keep you full and energized throughout the day.",
      image_url:
        "https://i.ibb.co.com/Kc4mKcQ9/top-view-salad-with-chicken-avocado-tomatoes-and-lettuce-free-png.webp",
      price: 29.99,
      rating: 4.8,
      calories: 580,
      protein: 38,
      category_name: "Bowls",
      customizations: ["Avocado", "Salad", "Sweet Corn", "Iced Tea"],
    },
    {
      name: "Paneer Burrito",
      description:
        "Soft paneer cubes cooked in spicy masala, wrapped with rice, beans, and tangy sauce inside a tortilla. A flavorful fusion of Indian and Mexican taste that’s filling and delicious.",
      image_url:
        "https://i.ibb.co.com/d0rqtmBm/burrito-with-cauliflower-and-vegetables-free-png.webp",
      price: 24.99,
      rating: 4.2,
      calories: 510,
      protein: 22,
      category_name: "Burritos",
      customizations: ["Jalapeños", "Fries", "Garlic Bread", "Coke"],
    },
    {
      name: "Chicken Club Sandwich",
      description:
        "Grilled chicken, crispy bacon, lettuce, tomato, and cheese layered between toasted bread. A hearty, flavorful sandwich that combines freshness with smoky, savory goodness in every bite.",
      image_url:
        "https://i.ibb.co.com/k2z5qgKB/a-flavorful-club-sandwich-with-turkey-bacon-and-fresh-vegetables-sliced-and-isolated-on-a-transparen.webp",
      price: 27.49,
      rating: 4.5,
      calories: 610,
      protein: 31,
      category_name: "Sandwiches",
      customizations: ["Bacon", "Tomatoes", "Mozzarella Sticks", "Iced Tea"],
    },
  ],
};

export default dummyData;
