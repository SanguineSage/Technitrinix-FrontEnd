import { createContext, useEffect, useState } from "react";
import useAlert from "../hooks/useAlert";

const EcomContext = createContext()

export const EcomProvider = ({ children }) => {
  const [product, setProduct] = useState([])
  const [slide, setSlide] = useState([])
  const [cartItems, setCartItems] = useState([])
  const { showAndHide, alertInfo } = useAlert();

  useEffect(() => {
    fetchProduct()    
    fetchCarousel()
  }, [])


  const featured = product.filter((item => item.featured === true));
  const topSelling = product.filter((item => item.topSelling === true));

  const fetchProduct = async () => {
    const response = await fetch("http://localhost:5000/api/product")
    const data = await response.json()
    setProduct(data)
  }

  const fetchCarousel = async () => {
    const response = await fetch("http://localhost:5000/")
    const data = await response.json()
    setSlide(data)
  }


  const addToCart = (prod) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === prod.id);
    if (existingItemIndex !== -1) {
      const updatedCartItem = [...cartItems];
      const itemToUpdate = updatedCartItem[existingItemIndex]
      itemToUpdate.quantity += prod.quantity;
      itemToUpdate.amount = itemToUpdate.price * itemToUpdate.quantity
      showAndHide("error", "Item already exist in cart")
    } else {
      setCartItems([...cartItems, { ...prod, amount: prod.price * prod.quantity }]);
      showAndHide("success", "Item added to cart")
    }
  };

  const updateQuantity = (id, newQuantity) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);
    const updatedCartItem = [...cartItems];
    const itemToUpdate = updatedCartItem[existingItemIndex];
    itemToUpdate.quantity = newQuantity;
    itemToUpdate.amount = itemToUpdate.price * itemToUpdate.quantity;
    setCartItems(updatedCartItem)
  };

  const deleteItems = (id) => {
    const updatedCartItem = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCartItem)
    showAndHide("error", "Item deleted from cart")
  }

  const totalAmount = () => {
    return cartItems.reduce((total, item) => total + item.amount, 0);
  };
  

  return (
    <EcomContext.Provider value={{ featured, topSelling, product, slide, addToCart, cartItems, updateQuantity, deleteItems, totalAmount, alertInfo, showAndHide}}>
      {children}
    </EcomContext.Provider>
  )
};

export default EcomContext
export const EcomProvider = ({children}=>)

const data = await resizeBy.json();
console.log(data);
showAndHide ("success", "item added to cart");

catc (error) {
  console.log(error.message);
  showAndHide ("error", "Faied to add item to cart");
}