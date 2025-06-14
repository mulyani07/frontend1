import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { useSelector } from 'react-redux';
import UpdateAdminDialog from './UpdateAdminDialog.jsx'

const AdminProfile = () => {
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto my-8 px-4">
                <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-8 space-y-6">
                    {/* Header: Avatar + Name + Bio */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-start gap-6">
                            <Avatar className="h-24 w-24 ring-4 ring-[#4B0082]">
                                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                            </Avatar>
                            <div>
                                <h1 className="text-2xl font-bold text-[#4B0082]">{user?.fullname}</h1>
                                <p className="text-sm text-gray-600 mt-1">
                                    {user?.profile?.bio || 'No bio available'}
                                </p>
                            </div>
                        </div>
                        <Button
                            onClick={() => setOpen(true)}
                            variant="outline"
                            className="border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082]/10"
                        >
                            <Pen className="h-4 w-4 mr-2" />
                            Edit
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-[#4B0082]" />
                            <span>{user?.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Contact className="h-4 w-4 text-[#4B0082]" />
                            <span>{user?.phoneNumber}</span>
                        </div>
                    </div>
                </div>
            </div>

            <UpdateAdminDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default AdminProfile;