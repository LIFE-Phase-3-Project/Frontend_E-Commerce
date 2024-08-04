import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logos/logoTemporary.png';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { MdOutlineNightlight } from "react-icons/md";
import DarkTheme from "../../components/theme/DarkModeToggle";
import MenuItemComp from './MenuItemComp';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../redux/slices/userSlice';
import Modal from 'react-modal';
import {CartModal } from "../../components/cart-modal/CartModal";
import { CheckOut } from '../../components/cart-modal/CheckOut';
import {useGetAllCategoriesQuery} from "../../redux/api/categoriesApi";


Modal.setAppElement('#root');  // Ensure you set the app element for accessibility

function NavBar() {
  const { data, error, isLoading } = useGetAllCategoriesQuery();



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [darkBackgroundColor, setDarkBackgroundColor] = useState("transparent");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(setLogout());
    navigate('/');
  };

  useEffect(() => {
    const path = location.pathname;

    if (path === '/products') {
      setBackgroundColor("bg-custom-green");
      setDarkBackgroundColor("bg-gray-800");
    } else {
      window.onscroll = () => {
        if (window.scrollY > 300) {
          setBackgroundColor("bg-custom-green");
          setDarkBackgroundColor("bg-gray-800");
        } else {
          setBackgroundColor("transparent");
          setDarkBackgroundColor("transparent");
        }
      };
    }
  }, [location]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories</div>;
  }

  const details = data.map(category => ({
    name: category.name,
    href: `/${category.name.toLowerCase()}`,
    current: false,
    subCategories: category.subCategories,
  }));

  const customStyles = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      backgroundColor: 'white', 
      border: 'none', 
      borderRadius: '8px',
      padding: '20px', 
      maxWidth: '90%', 
      maxHeight: '90%',
      margin: 'auto', 
      display: 'flex', 
      flexDirection: 'row', 
      gap: '20px', 
    }
  };

  return (
    <Disclosure as="nav" className={`fixed top-0 left-0 right-0 z-50 rounded-b-lg ${backgroundColor} dark:${darkBackgroundColor} dark:text-cream`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className={`group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-on-hover-green hover:text-cream focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}>
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <img aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" src={logo} />
              <img aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" src={logo} />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className='w-12' alt="ECOMMERCE" src={logo} />
            </div>

            <MenuItemComp details={details} />

          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-cream hover:text-cream focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={handleShow}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Shopping cart</span>
              <FontAwesomeIcon icon={faTruck} className='bg-transparent' />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={logo}
                    className="h-8 w-12 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link to="/" className="block px-4 py-2 text-sm text-on-hover-green data-[focus]:bg-gray-100">
                    Home
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/products" className="block px-4 py-2 text-sm text-on-hover-green data-[focus]:bg-gray-100">
                    Products
                  </Link>
                </MenuItem>
               {user?.isLoggedIn? 
                 <MenuItem>
                  <Link to="/profile/my-profile" className="block px-4 py-2 text-sm text-on-hover-green data-[focus]:bg-gray-100">
                    Your Profile
                  </Link>
                </MenuItem> : ""}
               
                <MenuItem>
                  <Link to="/wishlist" className="block px-4 py-2 text-sm text-on-hover-green data-[focus]:bg-gray-100">
                    WishList
                  </Link>
                </MenuItem>

                <MenuItem>
                  {user?.isLoggedIn
                    ?
                    <Link onClick={signOut} className="block px-4 py-2 text-sm text-on-hover-green data-[focus]:bg-gray-100">
                      Sign out
                    </Link>
                    :
                    <Link to="/login" className="block px-4 py-2 text-sm text-on-hover-green data-[focus]:bg-gray-100">
                      Log in
                    </Link>
                  }
                </MenuItem>
              </MenuItems>
            </Menu>
            <DarkTheme />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {details.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-on-hover-green text-cream' : 'text-cream hover:bg-on-hover-green hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
      <Modal
        isOpen={show}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <div style={{ flex: 1 }}>
          <div className="dark: bg-custom-blue">
            <h2>Your cart</h2>
          </div>
          <CartModal />
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <h2>Check out</h2>
          </div>
          <CheckOut />
        </div>
        <button onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</button>
      </Modal>
    </Disclosure>
  );
}

export default NavBar;



