import { Button, Label, Modal as ML, TextInput } from "flowbite-react";

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
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Coupon</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="coupon-title" value="Coupon Title" className="text-gray-900 dark:text-white" />
                            </div>
                            <TextInput
                                id="coupon-title"
                                ref={titleInput}
                                required
                                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="coupon-description" value="Coupon Description" className="text-gray-900 dark:text-white" />
                            </div>
                            <TextInput
                                id="coupon-description"
                                ref={descriptionInput}
                                required
                                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="coupon-percentage" value="Coupon Percentage" className="text-gray-900 dark:text-white" />
                            </div>
                            <TextInput
                                type="number"
                                id="coupon-percentage"
                                ref={percentageInput}
                                required
                                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="coupon-code" value="Coupon Code" className="text-gray-900 dark:text-white" />
                            </div>
                            <TextInput
                                id="coupon-code"
                                ref={codeInput}
                                required
                                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>

                        <div className="w-full">
                            <Button type="submit" className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700">
                                Add Coupon
                            </Button>
                        </div>
                    </form>
                </ML.Body>
            </ML>
        </>
    );
}