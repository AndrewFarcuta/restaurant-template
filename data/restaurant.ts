export type MenuItem = {
    name: string;
    price: string;
    description: string;
  };
  
  export const restaurant = {
    name: "Bella Italia",
    category: "Italian Restaurant",
    headline: "Authentic food, warm atmosphere.",
    description:
      "A premium dining experience built around fresh ingredients, elegant service and memorable evenings.",
  
    phoneDisplay: "+40 775 355 205",
    phoneWhatsApp: "40775355205",
    address: "Strada Exemplu 10, Cluj-Napoca",
    openingHours: "12:00 – 23:00",
  
    heroImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
  
    features: [
      "Online reservations",
      "Mobile-first design",
      "Menu presentation",
      "Google Maps integration",
    ],
  
    menu: [
      {
        name: "Truffle Pasta",
        price: "€18",
        description: "Fresh pasta, parmesan and black truffle.",
      },
      {
        name: "Margherita Pizza",
        price: "€12",
        description: "San Marzano tomatoes, mozzarella and basil.",
      },
      {
        name: "Seafood Risotto",
        price: "€22",
        description: "Arborio rice, shrimp, mussels and white wine.",
      },
      {
        name: "Tiramisu",
        price: "€8",
        description: "Mascarpone, espresso and cocoa.",
      },
    ] satisfies MenuItem[],
  
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    ],
  };