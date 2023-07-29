import Image from "next/image";
import Link from "next/link";
import {ImCross} from "react-icons/im";
import {AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";
import logo from "../../assets/images/logo.png";
import {Button} from "@/components/ui/button";
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const components: {title: string; href: string}[] = [
    {
      title: "CPU/Processor",
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      href: "/categories/ram",
    },
    {
      title: "Power Supply Unit",
      href: "/categories/powersupply",
    },
    {
      title: "Storage Device",
      href: "/categories/storagedevice",
    },
    {
      title: "Monitor",
      href: "/categories/monitor",
    },
    {
      title: "Others",
      href: "/categories/others",
    },
  ];
  return (
    <header className="md:mx-8 md:rounded-b md:rounded-r p-2 text-textColor sticky top-0 z-50 font-mono bg-background shadow-lg">
      <div className="lg:container flex justify-between items-center h-12 ">
        <Link className="" href="/">
          <Image src={logo} className="w-16 ml-2" alt="Logo" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="flex items-center px-4 py-1">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:bg-background">
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[150px] gap-3 p-4 md:w-[500px] grid-cols-1 lg:w-[200px] ">
                  {components.map((component) => (
                    <li key={component.title} className="font-medium">
                      <Link href={component.href}>{component.title}</Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pc-builder" className="flex items-center px-4 py-1 rounded">
                <Button variant="outline" className="border-primary hover:text-background">
                  PC Builder
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* <li className="flex items-center">{user?.token && <img src={avatar} alt="" className="w-6 h-6 rounded-full" />}</li>

          {user?.token ? (
            <button className="flex items-center px-4 ml-2 bg-gray-500/30 py-1 rounded" onClick={logout}>
              Log Out
            </button>
          ) : (
            <Link to="/login" className="flex items-center px-4 ml-2 bg-gray-500/30 py-1 rounded">
              Login
            </Link>
          )} */}

        <div className="flex justify-end items-center lg:hidden ml-auto mr-4">
          <AiOutlineMenu className="text-xl font-bold text-white cursor-pointer" onClick={() => setOpen(true)} />
        </div>
      </div>
      {/* ///mobile menu  */}
      <div className={`${open ? "flex" : "hidden"} justify-between backdrop-blur-sm skillbg border border-gray-700 px-4 rounded-md lg:hidden h-full w-9/12 mt-4`}>
        <NavigationMenu className="items-stretch flex flex-col space-x-3">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="flex items-center px-4 py-1">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <li key={component.title}>
                      <Link href={component.href}>{component.title}</Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pc-builder" className="flex items-center px-4 py-1 rounded">
                <Button variant="outline" className="border-primary hover:text-background">
                  PC Builder
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* <li className="flex items-center">{user?.token && <img src={avatar} alt="" className="w-6 h-6 rounded-full" />}</li>
            {user?.token ? (
              <button className="flex items-center px-4 ml-2 bg-gray-500/30 py-1 rounded" onClick={logout}>
                Log Out
              </button>
            ) : (
              <Link to="/login" className="flex items-center px-4 ml-2 bg-gray-500/30 py-1 rounded">
                Login
              </Link>
            )} */}

        <div className="mt-4">
          <ImCross onClick={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
