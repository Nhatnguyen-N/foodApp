// import { menuItemParams } from "../types/CartTypes";

import {
  menuItemParams,
  menuParams,
  restaurantCategoryParams,
  restaurantParams,
} from "../TypesCheck/typesCheckParams";

export const restuarantCategories: restaurantCategoryParams[] = [
  {
    _id: "6537ece708ff5b7de97d0695",
    name: "Chicken",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028510/chicken-leg_821023_uk6yfe.png",
  },
  {
    _id: "65310f3381e4d98d60b093c5",
    name: "Jollof",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028519/spice_3800322_fam3d9.png",
  },
  {
    _id: "6531206cbbe4998e90af3feb",
    name: "Pasta",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028519/spaguetti_azocci.png",
  },
  {
    _id: "6531209dbbe4998e90af3fef",
    name: "Burger",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028510/burger_smzhmu.png",
  },
  {
    _id: "653120babbe4998e90af3ff1",
    name: "Shawarma",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028519/shawarma_yyxrn9.png",
  },
  {
    _id: "65312084bbe4998e90af3fed",
    name: "Grill",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028508/barbecue_bjxcaj.png",
  },
  {
    _id: "65310efb81e4d98d60b093c3",
    name: "Pizza",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028518/pizza_xhahvv.png",
  },

  {
    _id: "653120e1bbe4998e90af3ff3",
    name: "Breakfast",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028509/breakfast_wcyr1x.png",
  },
];

export const restaurants: restaurantParams[] = [
  {
    _id: "6530ebbcc9e72013e5b65933",
    name: "Chicken Republic",
    description: "",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028512/ChickenRepublicDashboard_ghqcw9.png",
    foodType: "Chicken",
    time: "15 mins",
    deliveryTimeFrom: 15,
    deliveryTimeTo: 35,
    deliveryMethod: "Free",
    rating: 5,
    ratingCount: 6765,
    coords: {
      latitude: 37.78792117665919,
      longitude: -122.41325651079953,
      address: "698 Post St, San Francisco, CA 94109, United States",
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0221,
    },
  },
  {
    _id: "6530ea6bc9e72013e5b6592d",
    name: "Toast Pan",
    description: "",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028510/burgerDisp_tsdq5q.jpg",
    foodType: "Burgers",
    time: "30 mins",
    deliveryTimeFrom: 15,
    deliveryTimeTo: 35,
    deliveryMethod: "Free",
    rating: 60,
    ratingCount: 3278,
    coords: {
      latitude: 37.785925590588505,
      longitude: -122.41007428687641,
      address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0221,
    },
  },

  {
    _id: "6530ea6bc9e72013e5b6580de",
    name: "Tasty Bite",
    description: "",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028520/tastyBitieDisp_gqrzwj.jpg",
    foodType: "Burgers",
    time: "30 mins",
    deliveryTimeFrom: 15,
    deliveryTimeTo: 35,
    deliveryMethod: "Free",
    rating: 60,
    ratingCount: 5666,
    coords: {
      latitude: 37.785925590588505,
      longitude: -122.41007428687641,
      address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0221,
    },
  },
  {
    _id: "6530eb23c9e72013e5b6592f",
    name: "Menum Kitchen",
    description: "",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/MenumKitchenDisp_lkzflh.jpg",
    foodType: "Jollof",
    time: "30 mins",
    deliveryTimeFrom: 15,
    deliveryTimeTo: 35,
    deliveryMethod: "Free",
    rating: 60,
    ratingCount: 5666,
    coords: {
      latitude: 37.785925590588505,
      longitude: -122.41007428687641,
      address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0221,
    },
  },

  {
    _id: "6530eb23c9e72013e5b6351c",
    name: "Drumstix",
    description: "",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028509/drumstix_iqwkjy.jpg",
    foodType: "Chicken",
    time: "30 mins",
    deliveryTimeFrom: 15,
    deliveryTimeTo: 35,
    deliveryMethod: "Free",
    rating: 60,
    ratingCount: 5666,
    coords: {
      latitude: 37.785925590588505,
      longitude: -122.41007428687641,
      address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0221,
    },
  },

  {
    _id: "6530eb23c9e72013e5b6427j",
    name: "T Joint Restaurant",
    description: "",
    imageUrl:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028520/TJointRestDisp_qadwar.png",
    foodType: "Jollof",
    time: "30 mins",
    deliveryTimeFrom: 15,
    deliveryTimeTo: 35,
    deliveryMethod: "Free",
    rating: 60,
    ratingCount: 5666,
    coords: {
      latitude: 37.785925590588505,
      longitude: -122.41007428687641,
      address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0221,
    },
  },
];

export const menus: menuParams[] = [
  {
    _id: "6530ebbcc9e72013e5b658dm",
    menuName: "Burgers & Sandwiches",
    description: "",
    restaurantId: "6530ebbcc9e72013e5b65933", // restaurant objectId //chicken republic
  },

  {
    _id: "6530ebbcc9e72013e5b65841",
    menuName: "Chicken Special",
    description: "",
    restaurantId: "6530ebbcc9e72013e5b65933", // restaurant objectId //chicken republic
  },

  {
    _id: "6530ebbcc9e72013e5b65102",
    menuName: "Rice",
    description: "",
    restaurantId: "6530ebbcc9e72013e5b65933", // restaurant objectId //chicken republic
  },

  {
    _id: "6530ebbcc9e72013e5b55102a",
    menuName: "Fries",
    description: "",
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530ebbcc9e72013e5b55113b",
    menuName: "Shawarma",
    description: "",
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530ebbcc9e72013e5b5511ba",
    menuName: "Pepper Soup",
    description: "",
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530ebbcc0e72013e5b55312f",
    menuName: "Sandwiches",
    description: "",
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530ebbcc0e72013e5b55511c",
    menuName: "Burger",
    description: "",
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530ebbcc0e72013e5b5561cd",
    menuName: "Wraps",
    description: "",
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },
];

export const menuItems: menuItemParams[] = [
  {
    _id: "6530addcc9e72013e5b6190b",
    name: "Big Boyz Combo",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028510/ChickenRep-BurgerSandwich--bigBoysCombo_uiy3oy.jpg",
    description:
      "Enjoy a Chief Burger with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 400,
    quantity: 10,
    menuId: "6530ebbcc9e72013e5b658dm", // Burgers & Sandwiches
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
    additives: [
      {
        _id: "6780ebbcc9e72013e5b687bd",
        additiveType: "Select Your Size",
        additiveInfo: [
          {
            _id: "6780ebbcc9e72013e5b672dc",
            name: "Single chicken patty",
            parentId: "6780ebbcc9e72013e5b687bd",
          },

          {
            _id: "6780ebbcc9e72013e5b132df",
            name: "Double chicken patty",
            price: 2200,
            parentId: "6780ebbcc9e72013e5b687bd",
          },
        ],
      },

      {
        _id: "6780ebbcc9e72013e5b688ad",
        additiveType: "Select Your Side",
        additiveInfo: [
          {
            _id: "6780ebbcc9e72013e5b699ba",
            name: "Spaghetti",
            parentId: "6780ebbcc9e72013e5b688ad",
          },

          {
            _id: "6780ebbcc9e72013e5b498cb",
            name: "Fried rice jumbo",
            price: 500,
            parentId: "6780ebbcc9e72013e5b688ad",
          },
        ],
      },

      {
        _id: "6780ebbcc9e72013m5b102dg",
        additiveType: "Add Takeaway Pack",
        additiveInfo: [
          {
            _id: "",
            name: "Add a Take-Away Pack (1,000ml with Lid)",
            price: 300,
            parentId: "6780ebbcc9e72013m5b102dg",
          },
        ],
      },
    ],
  },

  {
    _id: "6530addcc9e72013e5b6192c",
    name: "Chief Burger",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028511/ChickenRep-BurgerSandwich--ChiefBurger_e4m0nk.jpg",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 1300,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b658dm", // Burgers & Sandwiches
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
  },

  {
    _id: "6530addcc9e72013e5b6193d",
    name: "ChickWizz Meal",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028511/ChickenRep-BurgerSandwich--Chickwizz_nkii8k.jpg",
    description:
      "Enjoy a Chief Burger with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 400,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b658dm", // Burgers & Sandwiches
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
  },

  {
    _id: "6530addcc9e72013e5b7191a",
    name: "Full Chicken",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028511/ChickenRep-Chicken--FullChicken_ee5s1h.jpg",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 13500,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b65841", // chicken special
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
  },

  {
    _id: "6530addcc9e72013e5b7192b",
    name: "Half Chicken",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028511/ChickenRep-Chicken--chickenLap_ot3x5w.jpg",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 7000,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b65841", // chicken special
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
  },

  {
    _id: "6530addcc9e72013e5b81901a",
    name: "Fried Rice",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028512/Chicken-Republic-Fried-Rice_aev3kf.jpg",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 1300,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b65102", // rice
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
  },

  {
    _id: "6530addcc9e72013e5b81902b",
    name: "Jollof Rice",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--plantainnEggSauce_nwjc78.jpg",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 1200,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b65102", // rice
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
  },

  {
    _id: "6530addcc9e72013e5b81903c",
    name: "White Rice + Sauce",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028509/CHICKEN-REPUBLIC-WHITE-RICE-SAUCE_tlt5ys.jpg",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 1300,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b65102", // rice
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
  },

  {
    _id: "6530addcc9e72013e5b81904d",
    name: "Rice & Beans With Sauce",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028509/Chicken-Republic-Rice-Beans-with-sauce_gqkx9b.jpg",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 1300,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b65102", // rice
    restaurantId: "6530ebbcc9e72013e5b65933", // chicken republic
  },

  {
    _id: "6530addcc9e72013e5b81905e",
    name: "Plantain and Egg Sauce",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--plantainnEggSauce_nwjc78.jpg",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3500,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b55102a", //fries
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b21906f",
    name: "Chips and Chicken Wings",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3500,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b55102a", // Fries
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b21907g",
    name: "GizzDodo",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3500,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b55102a", //Fries
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b2107ab",
    name: "Beef Shawarma",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 2800,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b55113b", // shawarma
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b2106ac",
    name: "Small Chops Combo",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 11500,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b55113b", // shawarma
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b2105ad",
    name: "Chicken Shawarma",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3500,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b55113b", // shawarma
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b2111ab",
    name: "Turkey Pepper Soup",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 7500,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b5511ba", // pepper soup
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b2112ac",
    name: "Catfish Pepper Soup",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3500,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b5511ba", // pepper soup
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b2123ad",
    name: "Beef Pepper Soup",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3000,
    quantity: 0,
    menuId: "6530ebbcc9e72013e5b5511ba", // pepper soup
    restaurantId: "6530eb23c9e72013e5b6592f", // restaurant objectId // menum
  },

  {
    _id: "6530addcc9e72013e5b4423ba",
    name: "Sausage Sandwich",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 7500,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b55312f", // Sandwiches
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530addcc9e72013e5b4432bc",
    name: "Steak Sandwich",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3500,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b55312f", // Sandwiches
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530addcc9e72013e5b4436cb",
    name: "Chicken Sandwich",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3000,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b55312f", // Sandwiches
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530addcc9e72013e5b7112bd",
    name: "Beef Burger",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 7500,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b55511c", // Burger
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530addcc9e72013e5b7113be",
    name: "Chicken Burger",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3500,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b55511c", // Burger
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530addcc9e72013e5b7123de",
    name: "Seafood Burger",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3000,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b55511c", // Burger
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530addcc9e72013e5b7813ea",
    name: "Smoked Turkey Wraps",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 7500,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b5561cd", // wraps
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530addcc9e72013e5b7821eb",
    name: "Beef Wraps",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3500,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b5561cd", //wraps
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },

  {
    _id: "6530addcc9e72013e5b7814ec",
    name: "Chicken Wraps",
    image:
      "https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028513/Menum-Fries--Chips-Chicken-Wings_llvoqs.png",
    description:
      "Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
    price: 3000,
    quantity: 0,
    menuId: "6530ebbcc0e72013e5b5561cd", // wraps
    restaurantId: "6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
  },
];
