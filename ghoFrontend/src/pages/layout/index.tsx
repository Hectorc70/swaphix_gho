
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import BackArrow from "../../components/backArrow/index.tsx";
import { useSelector } from "react-redux";
import { MainState } from '../../redux/mainSlice.ts';
import Navbar from "../../components/navbar/index.tsx";
import SideNavCustom from "../../components/sideNav/index.tsx";


const LayoutApp = () => {
  const main = useSelector((state: { main: MainState }) => state.main);

  return (
    
    <div className=" flex flex-col sm:overflow-auto w-screen h-screen items-center justify-start sm:justify-center">
      <SideNavCustom></SideNavCustom>
      <Navbar></Navbar>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      
      <div className="relative h-auto sm:h-3/4 sm:mt-5 flex w-full flex-row items-center justify-center">
        <div className="bg-globalWhite flex flex-col justify-between items-center h-full  m-0 p-0 sm:mt-20 w-full sm:my-5 md:w-2/4 lg:w-3/6  sm:rounded-xl  sm:mb-10 ">
          {main.isBack?<BackArrow />:<></>}
          <div className="md:overflow-auto h-full m-0 w-full px-5">
            {/* CONTENT ALL */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>

  );
};

export default  LayoutApp;