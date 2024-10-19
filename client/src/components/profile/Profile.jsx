import React, { useState } from 'react';
import { IoMdLogOut } from "react-icons/io";

const Profile = ({ user }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Handle file upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <div>
            {user && (
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="bg-green-600 p-4 text-white text-center">
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-l">{user.role}</p>
                        </div>
                        <div className="p-6 text-center flex flex-col justify-center items-center">
                            {/* Avatar Section */}
                            <div className="relative mb-4">
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="avatar"
                                        className="w-16 h-16 mx-auto rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-4xl text-gray-400">
                                        <span>Do</span>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute left-0 bottom-0 w-full opacity-0 cursor-pointer"
                                    title="Upload Avatar"
                                />
                            </div>
                            <p className="text-gray-700 font-semibold">{user.email}</p>
                            <p className="text-gray-500 text-sm">Joined on June 1, 2023</p>
                            <button class="bg-white flex items-center justify-center gap-3 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
                            <IoMdLogOut />LogOut
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
