import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2, Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-[#4B0082] font-semibold'
      : 'text-black hover:text-[#4B0082] transition-colors duration-300 ease-in-out';

  return (
    <div className='bg-white shadow-md'>
      <div className='flex items-center mx-auto max-w-7xl h-16 px-4'>
        {/* Logo di kiri */}
        <div>
          <h1 className='text-[#4B0082] font-bold text-2xl'>
            Hire<span className='text-[#32CD32]'>Quest</span>
          </h1>
        </div>

        {/* Spacer dorong menu dan avatar ke kanan */}
        <div className="flex-grow"></div>

        {/* Menu Desktop sebelah kiri avatar */}
        <ul className='hidden md:flex font-medium items-center gap-5'>
          {user && user.role === 'recruiter' ? (
            <>
              <li>
                <NavLink to="/admin/companies" className={linkClass}>
                  Companies
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/jobs" className={linkClass}>
                  Jobs
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/" className={linkClass} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink to="/browse" className={linkClass}>
                  Browse
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Avatar / user menu di paling kanan */}
        <div className='hidden md:flex items-center gap-4 ml-6'>
          {!user ? (
            <>
              <NavLink to="/login">
                <Button variant="outline">Login</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
              </NavLink>
            </>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className='flex gap-2 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>{user?.fullname}</h4>
                      <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                    </div>
                  </div>
                  <div className='flex flex-col my-2 text-gray-600'>
                    {user?.role === 'student' && (
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2 />
                        <Button variant="link">
                          <NavLink to="/profile">View Profile</NavLink>
                        </Button>
                      </div>
                    )}
                    {user?.role === 'recruiter' && (
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2 />
                        <Button variant="link">
                          <NavLink to="/admin/profile">View Profile</NavLink>
                        </Button>
                      </div>
                    )}
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut />
                      <Button className='cursor-pointer' onClick={logoutHandler} variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 border-t border-gray-200">
          <ul className='flex flex-col font-medium gap-3'>
            {user && user.role === 'recruiter' ? (
              <>
                <li>
                  <NavLink
                    to="/admin/companies"
                    className={linkClass}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Companies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/jobs"
                    className={linkClass}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Jobs
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={linkClass}
                    end
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/jobs"
                    className={linkClass}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/browse"
                    className={linkClass}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Browse
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex flex-col gap-2 mt-3">
              <NavLink to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </NavLink>
              <NavLink to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] w-full">Signup</Button>
              </NavLink>
            </div>
          ) : (
            <div className="border-t border-gray-200 pt-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                </Avatar>
                <div>
                  <h4 className="font-semibold">{user?.fullname}</h4>
                  <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                </div>
              </div>
              <div className="flex flex-col mt-3 gap-3 text-gray-600">
                {user?.role === 'student' && (
                  <Button
                    variant="link"
                    className="flex items-center gap-2 justify-start cursor-pointer"
                    onClick={() => {
                      navigate('/profile');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <User2 />
                    View Profile
                  </Button >
                )}
                {user?.role === 'recruiter' && (
                  <Button
                    variant="link"
                    className="flex items-center gap-2 justify-start cursor-pointer"
                    onClick={() => {
                      navigate('/admin/profile');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <User2 />
                    View Profile
                  </Button>
                )}
                <Button
                  variant="link"
                  className="flex items-center gap-2 justify-start text-red-600 hover:text-red-700 cursor-pointer"
                  onClick={() => {
                    logoutHandler();
                    setMobileMenuOpen(false);
                  }}
                >
                  <LogOut />
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
