/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sidebar } from 'primereact/sidebar';
import { routesNamesApp } from '../../routes/routes';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelect, changeVisible } from '../../redux/mainSlice';



const SideNavCustom = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const visible = useSelector((state: any) => state.main.visible)
    const index = useSelector((state: any) => state.main.select)
    const setVisible = (value: boolean) => {
        dispatch(changeVisible({ visible: value }));
    };


    const selectItem = (value: number) => {
        dispatch(changeSelect({ select: value }));
        switch (value) {
            case 0:
                navigate(routesNamesApp.sendTransaction)
                setVisible(false);
                break;
            case 1:
                navigate(routesNamesApp.reciveTransaction)
                setVisible(false);
                break;
        }

    };

    const sidebar = {
        background: '#1e0234',
        padding: '0px',
        width: '100%',
        zIndex: '10'
    }

    return (
        <div className="sidebar-container w-full">
            <Sidebar style={sidebar} className="p-sidebar-lg color-globalWhite absolute flex-col items-end top-0 h-full w-full sidebar card flex flex-column justify-content-center bg-purple" visible={visible} onHide={() => setVisible(false)} fullScreen>
                <div className={index == 0 ? "item-main-select mt-5" : "item-main  mt-5"} onClick={() => selectItem(0)}>
                    <p>Enviar GHO</p>
                </div>
                <div className={index == 1 ? "item-main-select mt-5" : "item-main  mt-5"} onClick={() => selectItem(1)}>
                    <p>Recibir GHO</p>
                </div>
            </Sidebar>
        </div>



    )
}

export default SideNavCustom;