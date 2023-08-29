import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* left links in above medium */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      {/* logo */}

      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>Massimo</Link>
      </div>

      {/* mobile view */}

      <div>
        <Menu />
      </div>

      {/* right links above medium */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1" >
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md" >
            <Image src={'/phone.png'} alt="" width={20} height={20}/>
            <span>+91-123-123</span>
        </div>
        {!user ? <Link href={"/"}>Login</Link> : <Link href={"/"}>Order</Link>}


        
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
