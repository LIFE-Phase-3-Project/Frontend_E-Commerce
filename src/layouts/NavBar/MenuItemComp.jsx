import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const MenuItemComp = ({ details }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="hidden sm:flex space-x-4 ml-5">
      {details.map((item, key) => (
        <Menu key={key} as="div" className="relative ">
          <MenuButton className="text-sm text-cream">
            {item.name}
          </MenuButton>
          <MenuItems
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
          >
            {item.subCategories.map((subItem, subKey) => (
              <MenuItem key={`${key}-${subKey}`}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-on-hover-green focus:bg-gray-100"
                >
                  {subItem}
                </a>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      ))}
    </div>
  );
};

export default MenuItemComp;

