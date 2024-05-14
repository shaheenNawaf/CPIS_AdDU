import Button from '../Buttons/Buttons';

function Add_product(){
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-black bg-white px-20 py-10 items-center mx-4 rounded-xl">
                <div className='mt-3'>
                        <label className='block text-base mb-2'>Product Name</label>
                        <input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            placeholder="Product Name"
                        />
                        <label className='block text-base mb-2'>Price</label>
                        <input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            placeholder="Price"
                        />
                        <label className='block text-base mb-2'>Product Description</label>
                        <textarea rows={3}
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                        />
                        <Button buttonName="Create Product" buttonState="active2" />
                        <Button buttonName="Cancel" buttonState="decline2" />
                </div>
            </div>
        </div>
    )
}
export default Add_product