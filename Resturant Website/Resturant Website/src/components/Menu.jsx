import React from 'react'
import '../css/Menu.css'
import Card from './Card.jsx'

const Menu = () => {


  const m = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
      name: "Margherita Pizza"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
      name: "Classic Cheeseburger"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=80",
      name: "White Sauce Pasta"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=80",
      name: "Chicken Biryani"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
      name: "Pepperoni Pizza"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80",
      name: "Double Beef Burger"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      name: "Caesar Salad"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
      name: "Grilled Chicken"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
      name: "French Fries"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop&q=80",
      name: "Cold Coffee"
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
      name: "Margherita Pizza"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
      name: "Classic Cheeseburger"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=80",
      name: "White Sauce Pasta"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=80",
      name: "Chicken Biryani"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
      name: "Pepperoni Pizza"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80",
      name: "Double Beef Burger"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      name: "Caesar Salad"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
      name: "Grilled Chicken"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
      name: "French Fries"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop&q=80",
      name: "Cold Coffee"
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
      name: "Margherita Pizza"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
      name: "Classic Cheeseburger"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=80",
      name: "White Sauce Pasta"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=80",
      name: "Chicken Biryani"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
      name: "Pepperoni Pizza"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80",
      name: "Double Beef Burger"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      name: "Caesar Salad"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
      name: "Grilled Chicken"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
      name: "French Fries"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop&q=80",
      name: "Cold Coffee"
    }
  ];

  return (
    <>
      <div className="w">
        <h1>Our Menu</h1>

        <div className="grid">
          {
            m.map((x) => {
              return <Card imagee={x.image} name={x.name} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Menu