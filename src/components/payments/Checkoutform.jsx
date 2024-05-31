

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSexure from "../hooks/useAxiosSexure";
import useAuth from "../useAuth";
import useCart from "./useCart";
import { useEffect, useState } from "react";
const Checkoutform = () => {
    const axiosSecure = useAxiosSexure()
    const {users} = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [mobile,refetch] = useCart()
    const [error,setError] = useState('')
    const [clientSecret,setClientSecret] = useState('')
    const [transactionId,setTransectionId] = useState('')
    const totalPrice = mobile.reduce((total,item)=> total + item.price ,0)
    useEffect(()=>{
      if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
           console.log(res.data.clientSecret)
           setClientSecret(res.data.clientSecret)
           
        })
       }
    },[axiosSecure,totalPrice])
   
  
    const handleSubmit =async(event)=>{
           event.preventDefault()
           if (!stripe || !elements) {
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if(error){
             console.log('payment error',error)
             setError(error.message)
          }
          else{
             console.log('paymnet method',paymentMethod)
             setError('')
          }
      

        const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
               card:card,
               billing_details:{
                 email:users?.email || 'anonymous',
                 name: users?.displayName || 'anonymous'
    
               }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
      
           if(paymentIntent.status === 'succeeded'){
              setTransectionId(paymentIntent.id)
              
              // const payment = {
                 
              // }
            //  const res =await axiosSecure.post(`/payments`,payment)
            //  console.log(res.data,'payment save')
             refetch()
            //  if(res.data?.paymentResult?.insertedId){
            //     //  sweet alert
                
            //  }
           }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
       <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-sm btn-primary my-4" disabled={!stripe || !clientSecret} type="submit">
          Pay
        </button>
        
       
    </form>
    );
};

export default Checkoutform;