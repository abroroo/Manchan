import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Menu2: React.FC = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/get_foods/');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="h-screen grid gap-32 grid-cols-1">
      {menuItems.map((menuItem: any) => (
        <div
          key={menuItem.id}
          className="relative p-4  rounded-md hover:shadow-lg"
          onMouseEnter={() => handleMouseEnter(menuItem.id)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-5xl font-semibold ">{menuItem.name}</h2>
          {hoveredCard === menuItem.id && (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              src={`${menuItem.image_location}`}
              alt={menuItem.name}
              className="absolute -top-[70%] left-[-600px] w-full h-80 object-cover rounded-md"
            />
          )}
          <p className="text-gray-600 mt-5 ">{menuItem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu2;
