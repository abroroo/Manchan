import React, { useState } from 'react';
import {motion } from 'framer-motion';


const MenuPage: React.FC = () => {
  const mealNames = [
    'Spaghetti Bolognese',
    'Chicken Parmesan',
    'Beef Stir Fry',
    'Grilled Salmon',
    'Veggie Pizza',
    'Caesar Salad',
    'Mushroom Risotto',
    'BBQ Ribs',
    'Teriyaki Chicken',
    'Taco Salad',
    'Shrimp Scampi',
    'Eggplant Parmesan',
    'Lemon Herb Chicken',
    'Pesto Pasta',
    'Steak Fajitas',
    'Greek Gyro',
    'Sushi Roll',
    'Vegetable Curry',
    'Fish Tacos',
    'Chicken Pad Thai',
  ];

  const descriptions = [
    'Delicious and flavorful',
    'Served with a side of crispy fries',
    'Perfectly seasoned with herbs and spices',
    'Made with fresh ingredients',
    'A healthy and nutritious choice',
    'Satisfying and filling',
    'Topped with a tangy sauce',
    'Cooked to perfection',
    'A customer favorite',
    'Pairs well with a refreshing beverage',
  ];

  const images = [
    'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const menuItems = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    title: mealNames[index % mealNames.length],
    description: descriptions[index % descriptions.length],
    image: images[index % images.length],
  }));

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="h-screen grid gap-32 grid-cols-1">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className="relative p-4  rounded-md hover:shadow-lg"
          onMouseEnter={() => handleMouseEnter(menuItem.id)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-5xl font-semibold ">{menuItem.title}</h2>
          {hoveredCard === menuItem.id && (
            
            <motion.img
            initial={{ opacity: 0, scale: 0.95}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
              src={menuItem.image}
              alt={menuItem.title}
              className="absolute -top-[70%] left-[-600px] w-full h-80 object-cover rounded-md"
            />
            
          )}
          <p className="text-gray-600 mt-5 ">{menuItem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;


