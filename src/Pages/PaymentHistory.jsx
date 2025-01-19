import React from 'react'
import usePaymentHistory from "../CustomHooks/usePaymentHistory"
import { useAuth } from '../CustomHooks/useAuth'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import Title from "../Components/Shared/Title"
const PaymentHistory = () => {
  const {payments} = usePaymentHistory()
  const {user} = useAuth()
  

  
  return (
    <div className="block ">


            <Title Heading="Payment History" />
             
              {
                payments?.length ? 
                <div className="overflow-x-auto lg:w-[85vw] md:w-[60vw] lg:max-w-3xl md:max-w-lg mx-auto p-0 md:p-3 lg:p-4">
                <Table className="min-w-full table-auto">
                    <TableHead>
                        <TableHeadCell>Month</TableHeadCell>
                        <TableHeadCell>Amount</TableHeadCell>
                        <TableHeadCell>Date</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {payments.map((payment) => (
                            <TableRow
                                key={payment._id}
                                className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {payment.month}
                                </TableCell>
                                <TableCell className="text-gray-600 dark:text-gray-300">{payment.amount/100}</TableCell>
                                <TableCell className="text-gray-600 dark:text-gray-300">{new Date(payment.date).toLocaleDateString()}</TableCell>

                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            :
            <p className="text-center">No payments Found</p>
            }
        </div>
  )
}

export default PaymentHistory
