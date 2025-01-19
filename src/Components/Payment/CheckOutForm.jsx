
import Loading from '../../Pages/Loading'
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { useAuth } from '../../CustomHooks/useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const CheckoutForm = ({coupon, paymentData, setPaymentData }) => {
    const [btnText, setBtntext] = useState("Pay Now")
    const [month, setMonth] = useState("")
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setBtntext("Paying...")
        if (!stripe || !elements) { return }
        const card = elements.getElement(CardElement);
        if (card == null) { return }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.error('[error]', error);
        }

        const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: paymentData?.agreement?.userName,
                    email: paymentData?.agreement?.userEmail
                },
            },
        })

        if (paymentIntent?.status === "succeeded") {
            const paymentDetails = {
                email: user?.email, 
                amount: paymentIntent.amount,
                paymentId: paymentIntent.id,
                date: new Date().toISOString(), 
                status: "succeeded"
            };
        
            try {
                const res = await axiosSecure.post('/payment-history', {...paymentDetails, month});
                toast.success("Payment Success!");
                navigate('/dashboard/payment-history');
            } catch (error) {
                console.error("Error saving payment details:", error);
                toast.error("Failed to save payment details. Please try again.");
            }
        } else {
            toast.error("Payment Failed");
        }
        setBtntext("Pay Now")
    };

    const fetchPaymentData = async (coupon) => {
        try {
            const response = await axiosSecure.post('/make-payment', { email: user.email, coupon });
            setPaymentData(response.data);
            setClientSecret(response.data.clientSecret)
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {

        if (user.email) {
            fetchPaymentData(coupon);
        }
    }, [user.email, coupon]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="col-span-2 sm:col-span-1 mb-10">
                <label htmlFor="month" className="mb-2 block text-sm font-medium text-gray-900">Month*</label>
                <select onChange={(e)=>setMonth(e.target.value)} id="month" required className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                    <option value="">Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
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

            <button type="submit" disabled={!stripe} className="mt-5 flex w-full items-center justify-center bg-purple-700 hover:bg-purple-900 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 ">
                {
                    btnText
                }
            </button>

        </form>
    );
};

export default CheckoutForm