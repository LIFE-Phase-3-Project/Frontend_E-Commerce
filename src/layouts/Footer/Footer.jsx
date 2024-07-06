export default function Footer() {
    return (
      <footer className=" mx-auto mb-0 bg-custom-green rounded-t-lg shadow m-4 dark:bg-gray-800">
        <div className="p-3 mx-7 md:flex md:items-center md:justify-between">
          <span className="text-sm text-cream sm:text-center dark:text-gray-400 text-xs">
            © 2024 <a href="" className="hover:underline">Ecommerce</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-cream dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  