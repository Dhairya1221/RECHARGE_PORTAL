import { PayPalButton } from "react-paypal-button-v2";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const PayPal = (props) =>
{
  const navigate = useNavigate();
  const { Product } = props;
  const number=Product.phone;
  const sim = Product.company;
  const details=Product.description;
  const cost = Product.price;
  const [paidFor, setPaidFor]  = useState(false)
  const [error ,setError] = useState(null);
  const handleApprove = (orderId) =>
  {
    setPaidFor(true);
  }

  if(paidFor)
  {
    alert("THANKS FOR RECHARGING");

    
  
  }

  if(error)
  {
    alert(error);
  }

  return(<div><PayPalButton
          style={{
            color:"silver",
            layout: "horizontal",
            height: 25,
            tagline: false,
            shape: "pill"          
        }}
        createOrder={(data,actions)=>{
          return actions.order.create({
            purchase_units: [
              {
                description: details,
                amount: {
                  currency_code: "CAD",
                  value: Product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          
          const order = await actions.order.capture(); 
          console.log("order", order);
          console.log(number)
          const res = fetch("/users/sms", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                number,details,cost,sim
            })
            
        });

          handleApprove(data.orderId);
          navigate('/thanks');
        }}
       
        onError={(err)=>{
          setError(err);
          console.error("PAYPAL CHECKOUT ONERROR",err);
        }}
        
        /></div>
        );
};
export default PayPal;