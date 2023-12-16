import "./App.css";
import Logo from "./assets/logo.jpg"
import food1 from "./assets/food1.jpg"
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="img-logo" src={Logo} alt=""  />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const KFC_OBJ= [
  {
    "info": {
        "id": "74453",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "bz9zkh2aqywjhpankb07",
        "locality": "Sheetal Shopping Square",
        "areaName": "Athwa",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
            "restaurantId": "74453",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 2200
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 2200
        },
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-17 01:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-sheetal-shopping-square-athwa-surat-74453",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "514729",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "i0wdxy1pfb7zhyuivtow",
        "locality": "Shanti Nagar",
        "areaName": "Udhna Gam",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
            "restaurantId": "514729",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 2000
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 2000
        },
        "parentId": "4961",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-17 01:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-shanti-nagar-udhna-gam-surat-514729",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "100721",
        "name": "McDonald's",
        "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
        "locality": "Reliance Mall",
        "areaName": "Rustampura",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.4,
        "feeDetails": {
            "restaurantId": "100721",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 1900
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 1900
        },
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-17 01:45:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-reliance-mall-rustampura-surat-100721",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "74644",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "VIP Road",
        "areaName": "Vesu",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.4,
        "feeDetails": {
            "restaurantId": "74644",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4700
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4700
        },
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 6.3,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "6.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-17 03:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-vip-road-vesu-surat-74644",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "236083",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "LP Savani Road",
        "areaName": "Adajan Gam",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
        ],
        "avgRating": 4.1,
        "feeDetails": {
            "restaurantId": "236083",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4900
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4900
        },
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 7.5,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "7.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-17 03:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-lp-savani-road-adajan-gam-surat-236083",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "72605",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Athwa",
        "areaName": "Athwa",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4,
        "veg": true,
        "feeDetails": {
            "restaurantId": "72605",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3500
        },
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 4.3,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "4.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-17 01:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-athwa-surat-72605",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "65028",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Athwa",
        "areaName": "Athwa",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Fast Food",
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
            "restaurantId": "65028",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 2200
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 2200
        },
        "parentId": "2",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-athwa-surat-65028",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "316581",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
        "locality": "Athwa Gate Cirlce",
        "areaName": "Athwa",
        "costForTwo": "₹120 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "feeDetails": {
            "restaurantId": "316581",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 2000
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 2000
        },
        "parentId": "6249",
        "avgRatingString": "4.7",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:30:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹149"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-gate-cirlce-athwa-surat-316581",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "425514",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "hxo7hkveujb8wxlexc1a",
        "locality": "Dumas Road",
        "areaName": "City Light Town",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "feeDetails": {
            "restaurantId": "425514",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3900
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3900
        },
        "parentId": "2093",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 5.9,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "5.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/natural-ice-cream-dumas-road-city-light-town-surat-425514",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "193526",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Nr Navyug College, Rander Road",
        "areaName": "Adajan Patiya",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.3,
        "feeDetails": {
            "restaurantId": "193526",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4500
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4500
        },
        "parentId": "21809",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 6.5,
            "serviceability": "SERVICEABLE",
            "slaString": "27 mins",
            "lastMileTravelString": "6.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-nr-navyug-college-rander-road-adajan-patiya-surat-193526",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "64770",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
        "locality": "Ghod Dod Road",
        "areaName": "City Light Town",
        "costForTwo": "₹270 for two",
        "cuisines": [
            "Waffle",
            "Desserts",
            "Ice Cream",
            "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
            "restaurantId": "64770",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3700
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3700
        },
        "parentId": "2233",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:45:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-ghod-dod-road-city-light-town-surat-64770",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "205488",
        "name": "Jay Jalaram Thali",
        "cloudinaryImageId": "56d5abe62452d827b7480c4f5515460a",
        "locality": "Kaji Maidan",
        "areaName": "Gopipura",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Thalis",
            "Gujarati",
            "North Indian",
            "Punjabi",
            "Chinese",
            "Biryani"
        ],
        "avgRating": 3.9,
        "veg": true,
        "feeDetails": {
            "restaurantId": "205488",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 2000
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 2000
        },
        "parentId": "110113",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 3.7,
            "serviceability": "SERVICEABLE",
            "slaString": "19 mins",
            "lastMileTravelString": "3.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    "description": "OnlyOnSwiggy"
                },
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "OnlyOnSwiggy",
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/jay-jalaram-thali-kaji-maidan-gopipura-surat-205488",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "563098",
        "name": "Urban Egg",
        "cloudinaryImageId": "xqxmcstn754z6elymsuu",
        "locality": "Ghodod Road",
        "areaName": "Athwa",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Chinese",
            "Ice Cream",
            "Pizzas",
            "Biryani"
        ],
        "avgRating": 4.5,
        "feeDetails": {
            "restaurantId": "563098",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 2000
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 2000
        },
        "parentId": "338710",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/urban-egg-ghodod-road-athwa-surat-563098",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "376848",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "ylctjnf75rbydputinkc",
        "locality": "Variyavi Bazar Main Road",
        "areaName": "Katargam",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Indian"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
            "restaurantId": "376848",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3700
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3700
        },
        "parentId": "582",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:45:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "D",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-variyavi-bazar-main-road-katargam-surat-376848",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "416227",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Ghod Dod Road",
        "areaName": "Athwa",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream",
            "Bakery"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
            "restaurantId": "416227",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3700
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3700
        },
        "parentId": "5588",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 4.3,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "4.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-17 05:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-ghod-dod-road-athwa-surat-416227",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "193550",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "f548f6063ffb6f64adddc26875c2aff2",
        "locality": "Nr Navyug College, Rander Road",
        "areaName": "Adajan Patiya",
        "costForTwo": "₹450 for two",
        "cuisines": [
            "Snacks",
            "Bakery",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.4,
        "feeDetails": {
            "restaurantId": "193550",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4700
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4700
        },
        "parentId": "4444",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 6.5,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "6.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-nr-navyug-college-rander-road-adajan-patiya-surat-193550",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "77535",
        "name": "Bhai Bhai Omelette Center",
        "cloudinaryImageId": "twkrcvt0lagle1vn8wyn",
        "locality": "Timaliyawad",
        "areaName": "Nanpura",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Fast Food",
            "Biryani",
            "North Indian",
            "Street Food"
        ],
        "avgRating": 4.4,
        "feeDetails": {
            "restaurantId": "77535",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 1900
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 1900
        },
        "parentId": "44072",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "19 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-17 00:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/bhai-bhai-omelette-center-timaliyawad-nanpura-surat-77535",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "352546",
        "name": "Center Point - Ghandhi Smruti",
        "cloudinaryImageId": "eha3nb1wqvs0p00kdeaw",
        "locality": "Timaliyawad",
        "areaName": "Nanpura",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Pizzas",
            "Burgers",
            "Fast Food",
            "Chinese",
            "Thalis",
            "American"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
            "restaurantId": "352546",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 2200
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 2200
        },
        "parentId": "56320",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 22:45:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/center-point-ghandhi-smruti-timaliyawad-nanpura-surat-352546",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "79606",
        "name": "Shree Sai Restaurant Fancy Dhosa - Salabatpura",
        "cloudinaryImageId": "mhpvqwwhamcz70ptlvm0",
        "locality": "Sahid Chowk",
        "areaName": "Salabatpura",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "South Indian",
            "Chinese",
            "North Indian",
            "Burgers",
            "Fast Food"
        ],
        "avgRating": 4.5,
        "veg": true,
        "feeDetails": {
            "restaurantId": "79606",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 2200
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 2200
        },
        "parentId": "185555",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "19 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-12-16 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/shree-sai-restaurant-fancy-dhosa-salabatpura-sahid-chowk-salabatpura-surat-79606",
        "type": "WEBLINK"
    }
},
]
console.log(KFC_OBJ[0].info.cuisines[0])


const RestaurentCard = (props) =>{
  // console.log(props);
  const {resName, cuisine, rating, time} = props
  return(
    <div className="card" style={{ backgroundColor:"#f0f0f0", }}>
      <img className="res-logo" src={food1} alt=""  />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4></h4>
      <h4>35 minuts</h4>
    </div>
  )
}

const Body =() => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      
        <RestaurentCard resName="Ajay Foods" cuisine="Chicken, North Indian, Asisan"/>
       
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body/>
    </div>
  );
}

export default App;
