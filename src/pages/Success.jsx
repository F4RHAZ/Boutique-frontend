import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import { Link } from  "react-router-dom";

const Success = () =>{
  const location = useLocation();

  const data = location.state.data;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  console.log(data , cart, currentUser);

  useEffect(() =>{
    const createOrder = async () =>{
      try{
        const res = await userRequest.post("/orders" ,{
          userId: currentUser._id,
          porducts: cart.products.map((item) =>({
            ProductId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      }catch (err){
        console.log(err);
      }
    };
    data && createOrder();
  }, [cart , data, currentUser]);

  return (
   <div
     style={{
       height: "100vh",
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       justifyContent: "center",
     }}
   >
     {orderId
       ? `Order has been created successfully. Your order number is ${orderId}`
       : `Successfull. Your order is being prepared...`}
     <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
   </div>
 );
};

export default Success
