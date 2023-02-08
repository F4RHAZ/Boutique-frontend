import axios from "axios";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { BASE_URL } from "../requestMethods";


const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #394040;
  color: white;
  font-weight: 600;
`;

const PayButton = ({cart}) =>{

    const user = useSelector(state=>state.user.currentUser);
    
    



    const handleCheckout =() =>{
        let cart1 = cart.products;
        let userId = user._id
        axios.post(`https://a-zboutiquefrontend.onrender.com/api/checkout/webhook`, {
            userId,
            cart1, 
        // axios.post(`http://127.0.0.1:5000/api/checkout/create-checkout-session`, {
        //     userId,
        //     cart1, 
        }).then((res) =>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err)=> console.log(err.message));
    };

    return(
        <>
            <Button onClick={()=> handleCheckout()}>Check Out</Button>
        </>
    )
}

export default PayButton;