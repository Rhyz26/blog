// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link for in-app navigation

// const Dropdown = ({ items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown">
//       <button className="dropdown-button" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//         Menu
//       </button>
//       {isOpen && (
//         <div className="dropdown-content">
//           {items.map((item) => (
//             <Link key={item.value} to={item.value}>
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
