import Awards from "./Awards";
import Affordable from "./Components/HomeCompo/Affordable";
import BrandLogo from "./Components/HomeCompo/BrandLogo";
import Discover from "./Components/HomeCompo/Discover";
import Homecompo from "./Components/HomeCompo/Homecompo";
import Injoy from "./Components/HomeCompo/Injoy";
import InjoyText from "./Components/HomeCompo/InjoyText";
import Lovly from "./Components/HomeCompo/Lovly";


export default function Home() {
  return (
    <>
    <Homecompo/>
    <BrandLogo/>
    <Injoy/>
    <InjoyText/>
    <Awards/>
    <Discover/>
    {/* I showed laziness */}
    <Lovly/> 
    <Affordable/>
    {/* I showed laziness */}

    

    </>
  );
}
