'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

const Profile = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-white">
              <Image
                src="/profilephoto.png"
                alt="Profile Photo"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-800">John</p>
          </div>


          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
              <p className="text-gray-500">Manage your account information.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">First name</p>
                <p className="text-base font-semibold text-gray-800">John</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last name</p>
                <p className="text-base font-semibold text-gray-800">Brown</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-base font-medium text-blue-600">johnbrown@elevancesystems.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mobile Number</p>
                <p className="text-base font-medium text-gray-800">(972) 432-0000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="text-base font-medium text-gray-800">Admin</p>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Application integration</h3>
              <div className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-3">
                <div className="flex items-center space-x-3">
                  <p className="text-sm text-gray-800">Login into O2.ai</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-200"
              >
                <LogOut size={16} />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
