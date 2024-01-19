// import { MainState } from "../../redux/mainSlice";
// import { useSelector } from "react-redux";
import logo from "../../assets/images/SwaphixLogo.png";
import { useNavigate } from "react-router-dom";
import { routesNamesApp } from "../../routes/routes";
import { useDispatch } from "react-redux";
import { changeVisible } from "../../redux/mainSlice";
import iconMain from "../../assets/images/main.webp";
const Navbar = () => {
  // const main = useSelector((state: { main: MainState }) => state.main);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateOption = (index: number) => {

    switch (index) {
      case 0:
        navigate(routesNamesApp.sendTransaction)
        break;
      case 1:
          navigate(routesNamesApp.reciveTransaction)
          break;
      case 2:
        navigate(routesNamesApp.balance)
        break;
    }
  }
  const setVisible = (value: boolean) => {
    dispatch(changeVisible({ visible: value }));
  };

  return (
    <div className="bg-globalWhite py-3 sm:py-4 px-3 shadow-md w-full">
      <div className="sm:w-5/6 m-auto flex  flex-row items-center justify-between">
        <div className="">
          <img src={logo} className="h-7" onClick={() => navigate(routesNamesApp.sendTransaction)}></img>
        </div>
        <div className="sm:flex  hidden flex-row justify-between" >
          <span className="desktop-option-side-bar" onClick={() => navigateOption(0)}>
            <i className="">Enviar GHO</i>
          </span>
          <span className="desktop-option-side-bar" onClick={() => navigateOption(1)}>
            <i className="">Recibir GHO</i>
          </span>
          <span className="desktop-option-side-bar" onClick={() => navigateOption(2)}>
            <i className="">Balance</i>
          </span>
        </div>
        <div className="sm:hidden">
          <img src={iconMain} className="h-5"  onClick={() => setVisible(true)}></img>
          {/* <i className="pi pi-align-justify" style={{ fontSize: '2rem' }} onClick={() => setVisible(true)}  ></i> */}
        </div>
      </div>
    </div>
  )

}
export default Navbar;