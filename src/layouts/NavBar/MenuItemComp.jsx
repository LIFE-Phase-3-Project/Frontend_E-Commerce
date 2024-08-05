import React, { useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

const MenuItemComp = ({ details }) => {
  const [openCategory, setOpenCategory] = useState(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="hidden sm:flex space-x-4 ml-5">
      {details?.map((item, key) => (
        <Menu key={key} as="div" className="relative">
          <div>
            <MenuButton 
              onClick={() => setOpenCategory(openCategory === item.name ? null : item.name)} 
              className="text-sm text-cream"
            >
              {item.name}
            </MenuButton>
          </div>
          <MenuItems
            className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none ${
              openCategory === item.name ? 'block' : 'hidden'
            }`}
          >
            {item.subcategories?.map((subItem, subKey) => (
                <MenuItem key={`${key}-${subKey}`}>
                  <a
                    href={`/products/${subItem?.categoryId}/${subItem.subCategoryId}`}
                    className="block px-4 py-2 text-sm text-on-hover-green hover:bg-gray-100"
                  >
                    {subItem?.subCategoryName}
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
