 
import { useRef, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Components/Payment/CheckOutForm';
import Title from '../Components/Shared/Title';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const MakePayment = () => {
    const [paymentData, setPaymentData] = useState(null);
    const [coupon, setCoupon] = useState("");
    const CouponInput = useRef();

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-8 antialiased md:py-8">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-5xl">
                    <Title Heading="Payment" />
                    <div className="sm:mt-8 lg:flex lg:items-start lg:gap-12">
                        <div className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm coupon={coupon} setPaymentData={setPaymentData} paymentData={paymentData} />
                            </Elements>
                        </div>
                        <div className="mt-6 grow sm:mt-8 lg:mt-0">
                            <div className="space-y-4 rounded-md border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-300">Rent</dt>
                                        <dd className="text-base font-medium text-gray-900 dark:text-gray-100">${paymentData?.agreement?.rent}</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-300">Discount</dt>
                                        <dd className="text-base font-medium text-purple-500">{paymentData?.agreement?.discount || "0"}%</dd>
                                    </dl>
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-300">Saved</dt>
                                        <dd className="text-base font-medium text-purple-500">${paymentData?.agreement?.saved || "0"}</dd>
                                    </dl>
                                </div>

                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-2">
                                    <dt className="text-base font-bold text-gray-900 dark:text-gray-100">Total</dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-gray-100">
                                        ${paymentData?.agreement?.saved ? paymentData?.agreement?.rent - paymentData?.agreement?.saved : paymentData?.agreement?.rent}
                                    </dd>
                                </dl>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-2">
                                <input
                                    type="text"
                                    ref={CouponInput}
                                    className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2.5 text-sm text-gray-900 dark:text-gray-300 focus:border-primary-500 focus:ring-primary-500"
                                    placeholder="Add Coupon Code"
                                />
                                <button
                                    onClick={() => {
                                        setCoupon(CouponInput.current.value);
                                    }}
                                    className="flex w-full items-center justify-center bg-purple-700 hover:bg-purple-900 rounded-md px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
                                >
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakePayment; 