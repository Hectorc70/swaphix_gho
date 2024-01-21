/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WalletUser } from "../../models/wallet_model";
import { ChangeIsBack } from "../../redux/mainSlice";
import { useDispatch } from "react-redux";
import TransactionService from "../../services/transaction_service";
import { GHOAddress, walletFrom } from "../../common/constants/constants";
import toast from "react-hot-toast";
import coin from "../../assets/images/gho_coin.svg";
import { routesNamesApp } from "../../routes/routes";
import { getNativeBalance } from "../../services/ghoUtils";



const Balance = () => {
  const [walletsData, setWallet] = useState<Array<WalletUser>>([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    initData();
  }, []);
  const initData = async () => {
    dispatch(ChangeIsBack({ isBack: false }))
    await getBalance()
  }
  const getBalance = async () =>{
    try{
      const response = await getNativeBalance(GHOAddress)
      console.log(response)
      if(response.status === 200 ){
        const responseBalance = await getNativeBalance(walletFrom)
        const amount = parseFloat(responseBalance.data.Balance);
        const balance = amount.toFixed(4);
        const wallet = new WalletUser('GHO',walletFrom, balance, 'Ethereum Mainet')
        const newData = [];
        newData.push(wallet);
        setWallet(newData);
  
      }
    }catch(e:any){
      toast.error(e.toString())
    }
    
  }
  return (
      <>

          <div>

              <div className="my-0">
                  <h4 className="titleTxt text-lg">
                      Hola,{'user'}
                  </h4>
                  <h1 className="titleTxt">
                      Balance
                  </h1>
              </div>
              <div className="mt-10 flex flex-col items-center justify-center w-full">
                <div className="account flex-col justify-start w-full items-center">
                  <div className="flex flex-row justify-between w-full items-center">
                    <div className="flex flex-row items-center justify-start">
                      <img src={coin} alt=""  className="h-5"/>
                      <span className="text-grayHigh ml-3">{walletsData[0]?.kripto}</span>

                    </div>
                    <div className="flex flex-row items-start">
                      <span className="text-grayHigh">{walletsData[0]?.balance}</span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-full items-center">
                    <div className="flex flex-row items-center justify-start">
                      <span className="text-grayHigh ml-8 text-sm">{walletsData[0]?.network}</span>

                    </div>
                    <div className="flex flex-row items-start">
                      <span className="text-grayHigh text-sm">{'0 MXN'}</span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end w-full items-center">
                      <span className="textButton underline mr-5" onClick={()=>navigate(routesNamesApp.sendTransaction)}>Enviar</span>
                      <span className="textButton underline">Cambiar</span>
                  </div>
                  <div className="divider"></div>
                </div>

                  {/* <table className="w-full mx-10 flex flex-col px-5 mt-5">
                      <body>
                          <tr className="flex flex-row justify-between w-full items-center">
                              <td className="w-1/4">
                                  <div className="flex flex-row items-center justify-start">
                                      <p className="noteTxt  ml-2 text-sm">X </p>
                                      <p className="noteTxt  ml-2 text-grayHigh text-sm">{walletsData[0]?.kripto}</p>
                                  </div>
                              </td>
                              <td className="w-1/4">
                                  <div className="flex flex-row  items-center justify-start">
                                      <p className=" noteTxt  ml-2 text-grayHigh text-sm">{walletsData[0]?.balance}</p>
                                  </div>
                              </td>
                              <td className="w-2/4 flex flex-row justify-end">
                                  <div className="buttonConvert">
                                      <p className="text-globalWhite font-bold">Convertir</p>
                                  </div></td>

                          </tr>
                      </body> 
                  </table>*/}
              </div>
          </div>

      </>
  )
}


export default Balance;