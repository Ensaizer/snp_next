'use client'
import React, {useState} from 'react';
import './registration.scss'
import type {IUser} from "@/types/types";
import {redirect, useRouter} from "next/navigation";


const Registration = () => {
    const [isYr, setIsYr] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as unknown as IUser;

        const response = await fetch('/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        if(response.ok) router.push('/')
    }
    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Ваше имя
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Ваше имя"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Ваша почта
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="email"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="address"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Введите ваш адрес:
                        </label>
                        <input
                            type="text"
                            name="deliveryAddress"
                            id="address"
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="phone"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Телефон
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="password"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Вы физическое или юридическое лицо
                        </label>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    id="radioButton1"
                                    className="h-5 w-5"
                                    defaultChecked
                                    value="физическое лицо"
                                    onChange={() => setIsYr(false)}
                                />
                                <label
                                    htmlFor="radioButton1"
                                    className="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Физическое лицо
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    id="userType"
                                    value="юридическое лицо"
                                    onChange={() => setIsYr(true)}
                                    className="h-5 w-5"
                                />
                                <label
                                    htmlFor="userType"
                                    className="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Юридическое лицо
                                </label>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="customers"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an
                        option</label>
                    <select id="role" name="role"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1" defaultChecked>Покупатель</option>
                        <option value="2">Партнер</option>
                    </select>
                    { isYr && (
                        <>
                            <div className="mb-5">
                                <label
                                    htmlFor="orgName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    orgName:
                                </label>
                                <input
                                    type="text"
                                    name="orgName"
                                    id="orgName"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="INN"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    INN:
                                </label>
                                <input
                                    type="number"
                                    name="INN"
                                    id="INN"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="KPP"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    KPP:
                                </label>
                                <input
                                    type="text"
                                    name="KPP"
                                    id="KPP"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="OGRN"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    KPP:
                                </label>
                                <input
                                    type="text"
                                    name="OGRN"
                                    id="OGRN"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="legalAddress"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    legalAddress:
                                </label>
                                <input
                                    type="text"
                                    name="legalAddress"
                                    id="legalAddress"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="legalAddress"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    currAccount:
                                </label>
                                <input
                                    type="text"
                                    name="currAccount"
                                    id="currAccount"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="corrAccount"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    corrAccount:
                                </label>
                                <input
                                    type="text"
                                    name="corrAccount"
                                    id="corrAccount"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </>
                    )}

                    <div>
                        <button
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>



    )
};

export default Registration;



