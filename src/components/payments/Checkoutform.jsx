

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSexure from "../hooks/useAxiosSexure";
import useAuth from "../useAuth";
import useCart from "./useCart";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
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
         
           if(!users?.email){
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: `please login first`,
              showConfirmButton: false,
              timer: 3500
            });
            return
           }

           
    
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
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${confirmError.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        }
        else{
           if(paymentIntent.status === 'succeeded'){
              setTransectionId(paymentIntent.id)
              axiosSecure.patch(`/users/pro/${users?.email}`)
              .then(res=>{
                refetch()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${users.email} is an surveyor Now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
              })
          
           }
        }
    }
    return (
       <>
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
       </>

    );
};

export default Checkoutform;