import {  Button } from 'flowbite-react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import Title from '../Shared/Title';
import { motion } from 'framer-motion';
import useCoupons from '../../CustomHooks/useCoupons';
function Coupons() {
    const { coupons } = useCoupons()
    const [copiedCoupon, setCopiedCoupon] = useState('');
    const handleCopy = (code) => {
        setCopiedCoupon(code);
        toast.success(`Coupon code "${code}" copied!`);
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-6 lg:px-12">

                <Title
                    Heading="Exclusive Coupons"
                    Subheading=" Grab the best deals and discounts for your next room booking."
                />

                {
                    coupons?.length ? 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coupons.map((coupon, index) => (

                        <motion.div
                            key={index}
                            className="shadow-xl px-8 py-5 w-full rounded-xl dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-2xl"
                            initial={{ opacity: 0, y: 50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1, ease: [1, -0.2, 0.11, -0.6] }}
                        >
                            <div>
                                <h3 className="text-3xl text-center font-semibold text-gray-800 dark:text-white tracking-tight">
                                    {coupon.discount}
                                </h3>
                                <p className="text-gray-600 text-center dark:text-gray-400 text-sm mt-2">
                                    {coupon.description}
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-between mt-4">
                  
                                <p className="text-lg font-medium text-gray-800 dark:text-white">
                                    Code: <span className="font-bold border px-2 py-1 text-primary">{coupon.code}</span>
                                </p>
                                <p className="text-lg mt-5 font-medium text-gray-800 dark:text-white">
                                    <span className="font-extrabold text-primary">{coupon.percentage}% OFF</span>
                                </p>
                                <CopyToClipboard text={coupon.code} onCopy={() => handleCopy(coupon.code)}>
                                    <Button
                                        color="primary"
                                        size="sm"
                                        className="px-4 border py-1 mt-5 font-semibold rounded-lg hover:bg-primary-600 focus:outline-none"
                                    >
                                        Copy
                                    </Button>
                                </CopyToClipboard>
                            </div>
                        </motion.div>

                    ))}
                </div>
                :
                <p className="text-center text-xl font-bold text-gray-500">Currently No Coupons Available</p>
                }
            </div>
        </section>
    );
}

export default Coupons;
