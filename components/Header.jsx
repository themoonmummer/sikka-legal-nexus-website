import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Practice Areas', path: '/practice' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-between items-center h-20">

          <Link to="/" className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-amber-600"/>

            <div>
              <h1 className="font-bold text-xl text-slate-900">
                Sikka Legal Nexus
              </h1>

              <p className="text-xs text-amber-600 font-semibold">
                Advocates & Legal Consultants
              </p>
            </div>

          </Link>


          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((item)=>(
              <Link
              key={item.path}
              to={item.path}
              className={`font-semibold text-sm ${
                location.pathname===item.path
                ?"text-amber-600"
                :"text-slate-600 hover:text-amber-600"
              }`}
              >
                {item.name}
              </Link>
            ))}


            <Link
            to="/contact"
            className="bg-slate-900 text-white px-5 py-3 rounded-lg font-bold flex items-center gap-2"
            >

              <Phone className="w-4 h-4"/>
              Consultation

            </Link>

          </nav>


          <button
          className="md:hidden"
          onClick={()=>setIsOpen(!isOpen)}
          >

            {isOpen?
            <X/>:
            <Menu/>
            }

          </button>


        </div>

      </div>


      {isOpen && (

        <div className="md:hidden bg-white border-t p-4">

          {navLinks.map(item=>(

            <Link
            key={item.path}
            to={item.path}
            onClick={()=>setIsOpen(false)}
            className="block py-3 font-semibold"
            >

              {item.name}

            </Link>

          ))}

        </div>

      )}

    </header>
  );
};


export default Header;