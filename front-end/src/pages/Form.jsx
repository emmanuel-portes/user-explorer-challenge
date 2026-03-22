import { useForm } from 'react-hook-form';
import { saveUser } from "../services/api";
import { useState } from 'react';

export default function Formpage() {
    const [error, setError] = useState('');
    const [operationSuccess, setOperationSuccess] = useState(false)
    const [operationMessage, setOperationMessage] = useState(null)

    const { 
        register,
        formState: {errors, isValid, isSubmitting}, 
        handleSubmit
    } = useForm()

    async function onSubmit(formData) {
        console.log(formData)
        try {
            const response = await saveUser(formData);
            setOperationSuccess(response.success)
            setOperationMessage(response.message)
            setError(null)
            console.log(response)
        } catch(err) {
            setError(err)
            setOperationSuccess(false)
            setOperationMessage("Failed to submit User")
            console.error(error)
        }

    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-xl bg-white border border-gray-200 shadow-sm p-6 grid grid-cols-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6"> Save Users </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label>
                        <input
                            type="text"
                            placeholder="Emmanuel Portes"
                            className="w-full 
                            px-3 py-2 border border-gray-300 text-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("name", { 
                                required: {
                                    value: true,
                                    message: "Name field is required",
                            }, pattern: { 
                                    value: /^[a-zA-Z\s]{3,50}$/, 
                                    message: "Name provided in wrong format"
                                } 
                            })}
                        />
                        {
                            errors.name && <p className='text-red-500 pt-1 text-sm'>{errors.name?.message}</p>
                        }

                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label>
                        <input
                            type="text"
                            placeholder="emmanuel.portes@example.com"
                            className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("email", { 
                                required: {
                                    value: true,
                                    message: "Email field is required",
                            }, pattern: { 
                                    value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm, 
                                    message: "Email provided in wrong format"
                                }
                            })}
                        />
                        {
                            errors.email && <p className='text-red-500 pt-1 text-sm'>{errors.email?.message}</p>
                        }
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1"> Phone </label>
                        <input
                            type="tel"
                            placeholder="809-000-0000"
                            className="w-full px-3 py-2 border border-gray-300
                            text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("phone", { 
                                required: {
                                    value: true,
                                    message: "Phone field is required",
                            }, 
                                maxLength: 10, 
                                pattern: { 
                                    value: /[0-9]{3}[0-9]{3}[0-9]{4}/gm, 
                                    message: "Phone provided in wrong format"
                                }
                            })}
                        />
                        {
                            errors.phone && <p className='text-red-500 pt-1 text-sm'>{errors.phone?.message}</p>
                        }
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1"> Company </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="XYZ SRL"
                            className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("company", { 
                                required: {
                                    value: true,
                                    message: "Company field is required",
                            }, pattern: { 
                                    value: /^[a-zA-Z\s]{3,50}$/, 
                                    message: "Company provided in wrong format"
                                }
                            })}
                        />
                        {
                            errors.company && <p className='text-red-500 pt-1 text-sm'>{errors.company?.message}</p>
                        }
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1"> City </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Santo Domingo"
                            className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("city", { 
                                required: {
                                    value: true,
                                    message: "city field is required",
                            }, pattern: { 
                                    value: /^[a-zA-Z\s]{3,50}$/, 
                                    message: "City provided in wrong format"
                                }
                            })}
                        />
                        {
                            errors.city && <p className='text-red-500 pt-1 text-sm'>{errors.city?.message}</p>
                        }
                    </div>

                    <div className="pt-2">
                        <button
                            disabled={!isValid || isSubmitting }
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700 transition-colors shadow-sm"
                        > {isSubmitting ? "Submitting..." : "Submit"} 
                        </button>
                    </div>
                </form>
            {
                !error && operationSuccess &&
                    ( <div className='py-2 m-2 w-full bg-green-100 border border-green-400 p-6 mx-auto'>
                        <p className="text-green-800 pt-1 pb-1">{operationMessage}</p>
                </div>)
            }

            {
                error && !operationSuccess && 
                (<div className='py-2 m-2 w-full bg-red-200 border border-red-400 p-6 mx-auto'>
                    <p className=" text-red-800 pt-1 pb-1">{operationMessage}</p>
                </div>)
            }
            </div>

        </div>
    );
}