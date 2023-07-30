import Image from "next/image";
import logo from "../assets/images/logo.png";
import {FaGithub} from "react-icons/fa";
import {signIn} from "next-auth/react";
const Login = () => {
  return (
    <div className="lg:w-2/6 w-5/6 mx-auto bg-primary py-8 px-6 mt-20 rounded">
      <Image src={logo} width={70} height={30} alt="logo" className="mx-auto" />
      <p className="text-center text-background text-xl">Please Login!</p>
      <div className="text-center text-background mt-2 text-3xl">
        <FaGithub
          className="mx-auto cursor-pointer"
          onClick={() =>
            signIn("github", {
              callbackUrl: "https://pc-builder-ecru.vercel.app",
            })
          }
        />
      </div>
    </div>
  );
};

export default Login;
