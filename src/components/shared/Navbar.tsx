import Image from "next/image";
import Link from "next/link";
import {ImCross} from "react-icons/im";
import {AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";
import logo from "../../assets/images/logo.png";
import {Button} from "@/components/ui/button";
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import {useSession, signOut} from "next-auth/react";
import avatar from "../../assets/images/avatar.jpg";
const Navbar = () => {
  const {data: session} = useSession();
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
        <NavigationMenu className="hidden space-x-3 lg:flex">
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
              <Link href={"/pc-builder"} className="flex items-center px-4 py-1 rounded">
                <Button variant="outline" className="border-primary hover:text-background">
                  PC Builder
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuItem className="flex items-center">{session?.user && <Image src={avatar} alt="" className="w-10 h-10 rounded-full" />}</NavigationMenuItem>
          {session?.user ? (
            <button className="flex items-center px-4 ml-2 bg-secondary py-2 rounded" onClick={() => signOut()}>
              Log Out
            </button>
          ) : (
            <Link href="/login" className="flex items-center px-4 ml-2 bg-secondary py-2 rounded">
              Login
            </Link>
          )}
        </NavigationMenu>

        <div className="flex justify-end items-center lg:hidden ml-auto mr-4">
          <AiOutlineMenu className="text-xl font-bold text-primary cursor-pointer" onClick={() => setOpen(true)} />
        </div>
      </div>
      {/* ///mobile menu  */}
      <div className={`${open ? "flex" : "hidden"} justify-between backdrop-blur-sm skillbg border border-gray-700 px-4 rounded-md flex lg:hidden h-full w-9/12 mt-4 py-4`}>
        <NavigationMenu className="flex flex-col space-x-3">
          <NavigationMenuList className="flex flex-col items-start">
            <NavigationMenuItem className="flex">{session?.user && <Image src={avatar} alt="" className="w-10 h-10 rounded-full" />}</NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" className="flex py-1">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="p-0 py-0">Categories</NavigationMenuTrigger>
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
              <Link href={"/pc-builder"} className="flex py-1 rounded">
                <Button variant="outline" className="border-primary hover:text-background">
                  PC Builder
                </Button>
              </Link>
            </NavigationMenuItem>
            {session?.user ? (
              <button className="flex px-2 md:px-4 bg-secondary py-2 rounded" onClick={() => signOut()}>
                Log Out
              </button>
            ) : (
              <Link href="/login" className="flex px-4 bg-secondary py-2 rounded">
                Login
              </Link>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="mt-4">
          <ImCross onClick={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
