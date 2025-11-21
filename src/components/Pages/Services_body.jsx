'use client';

import React from 'react';
import Link from 'next/link';

export default function Body() {
    return (
        <>
            <main className="w-full px-6 md:px-16 py-30 space-y-20 text-gray-800 min-h-screen bg-[url('/bkg7.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="max-w-7xl mx-auto">
                    <h2 className="flex justify-center items-center text-3xl font-bold mb-4">EXPLORE OUR ROOMS</h2>
                    <div className="h-1 w-20 mx-auto bg-yellow-900 mb-12" aria-hidden="true"></div>

                    {/* Deluxe Section */}
                    <div className="mb-34">
                        <h3 className="text-2xl font-semibold mb-8 text-start">DELUXE MAY</h3>
                        <div className="space-y-8">
                            {[1, 2, 3].map((item) => (
                                <div key={`deluxe-${item}`} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="md:w-1/3">
                                        <img src={`/deluxe-${item}.jpg`} alt={`Deluxe Room ${item}`} className="w-full h-64 object-cover" />
                                    </div>
                                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">Deluxe Suite {item}</h4>
                                            <p className="text-gray-600 mb-4">Luxurious room with king-size bed, private balcony, and stunning city views.</p>
                                            <ul className="text-sm text-gray-500 mb-4">
                                                <li>• 45 sq.m of luxury</li>
                                                <li>• Complimentary breakfast</li>
                                                <li>• Free Wi-Fi</li>
                                            </ul>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-yellow-900">$1400/night</span>
                                            <button className="bg-yellow-900 text-white px-6 py-2 rounded ml-90 hover:bg-yellow-800 cursor-pointer">Gallery</button>
                                            <button className="bg-yellow-900 text-white px-6 py-2 rounded hover:bg-yellow-800 cursor-pointer">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vintage Section */}
                    <div className="mb-34">
                        <h3 className="text-2xl font-semibold mb-8 text-start">VINTAGE MAY</h3>
                        <div className="space-y-8">
                            {[1, 2, 3].map((item) => (
                                <div key={`vintage-${item}`} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="md:w-1/3">
                                        <img src={`/vintage-${item}.jpg`} alt={`Vintage Room ${item}`} className="w-full h-64 object-cover" />
                                    </div>
                                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">Vintage Suite {item}</h4>
                                            <p className="text-gray-600 mb-4">Premium suite with exclusive amenities and personalized service.</p>
                                            <ul className="text-sm text-gray-500 mb-4">
                                                <li>• 60 sq.m of elegance</li>
                                                <li>• 24/7 butler service</li>
                                                <li>• Private jacuzzi</li>
                                            </ul>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-yellow-900">$987/night</span>
                                            <button className="bg-yellow-900 text-white px-6 py-2 rounded ml-90 hover:bg-yellow-800 cursor-pointer">Gallery</button>
                                            <button className="bg-yellow-900 text-white px-6 py-2 rounded hover:bg-yellow-800 cursor-pointer">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Le Petite Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-8 text-start">LE PETITE MAY</h3>
                        <div className="space-y-8">
                            {[1, 2, 3].map((item) => (
                                <div key={`petite-${item}`} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="md:w-1/3">
                                        <img src={`/petite-${item}.jpg`} alt={`Petite Room ${item}`} className="w-full h-64 object-cover" />
                                    </div>
                                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">Le Petite Suite {item}</h4>
                                            <p className="text-gray-600 mb-4">Classic-styled room with traditional decor and modern amenities.</p>
                                            <ul className="text-sm text-gray-500 mb-4">
                                                <li>• 40 sq.m of classic charm</li>
                                                <li>• Antique furnishings</li>
                                                <li>• Heritage view</li>
                                            </ul>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-yellow-900">$599/night</span>
                                            <button className="bg-yellow-900 text-white px-6 py-2 rounded ml-90 hover:bg-yellow-800 cursor-pointer">Gallery</button>
                                            <button className="bg-yellow-900 text-white px-6 py-2 rounded hover:bg-yellow-800 cursor-pointer">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}