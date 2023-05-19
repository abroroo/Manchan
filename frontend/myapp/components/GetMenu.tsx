import { useEffect, useState } from 'react';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const GetMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Fetch menu data from backend API
    fetch('http://localhost:3000/public/images/menu')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className="p-4 bg-white rounded-md shadow-md hover:shadow-lg"
        >
          <img
            src={menuItem.image}
            alt={menuItem.title}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold">{menuItem.title}</h3>
          <p className="text-gray-600">{menuItem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GetMenu;
