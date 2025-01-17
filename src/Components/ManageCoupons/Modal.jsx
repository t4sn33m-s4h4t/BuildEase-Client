import { Button, Checkbox, Label, Modal as ML, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

export default function Modal({
    titleInput,
    descriptionInput,
    percentageInput,
    codeInput,
    openModal,
    setOpenModal,
    handleSubmit
}) {


    return (
        <>
            <ML show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={titleInput}>
                <ML.Header />
                <ML.Body>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="coupon-title" value="Coupon Title" />
                            </div>
                            <TextInput id="coupon-title" ref={titleInput} required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="coupon-description" value="Coupon Description" />
                            </div>
                            <TextInput id="coupon-description" ref={descriptionInput} required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="coupon-percentage" value="Coupon Percentage" />
                            </div>
                            <TextInput id="coupon-percentage" ref={percentageInput} required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="coupon-code" value="Coupon Code" />
                            </div>
                            <TextInput id="coupon-code" ref={codeInput} required />
                        </div>

                        <div className="w-full">
                            <Button type="submit" className="bg-purple-700">Add Coupon</Button>
                        </div>
                    </form>
                </ML.Body>
            </ML>
        </>
    );
}
