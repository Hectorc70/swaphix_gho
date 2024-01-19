/* eslint-disable @typescript-eslint/no-explicit-any */


import { useEffect, useState } from "react";
import ButtonPrimary from "../../components/buttonPrimary";
import StatusButton from "../../models/button_status_enum.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ChangeIsBack } from "../../redux/mainSlice.ts";
import coinIcon from "../../assets/images/gho_coin.svg";
import { ConvertModel } from "../../models/convert_model.ts";
import useErrorHandling from "../../hooks/useError.ts";
import { useForm } from "react-hook-form";
import TransactionService from "../../services/transaction_service.ts";
import { walletFrom, walletTo } from "../../common/constants/constants.ts";
import { routesNames } from "../../routes/routes.ts";
import toast from "react-hot-toast";
import formatCryptoOptionLabel, { colourStyles } from "../../components/CryptoSelect/index.tsx";
import Select from "react-select";

const RecieveTransactionPage = () => {

 //=============  REACT FORM ============= 
  type FormValues = {
  amount: number,
  wallet: string,

}
const { errorMessage, handleErrors, clearErrorMessage } = useErrorHandling()

const { register, handleSubmit, formState: { errors }, watch, setError, setValue } = useForm<FormValues>()
const amountWatched = watch('amount');


//=============  REACT FORM ============= 
const [statusbutton, setStatusButton] = useState(StatusButton.Enabled);
const dispatch = useDispatch();
const navigate = useNavigate()
const [execute, setExecute] = useState(false);

const [cryptos, setCryptos] = useState(new Map());
const [qr, setQR] = useState('');
const [transaccionData, setTransaccionData] = useState(new ConvertModel('GHO', 'Ethereum Mainet', '0.0', '', ''));
const options = [
  { value: "GHO", label: "GHO", iconUrl: coinIcon },
];
//=============  INIT ============= 
const init = async () => {
  dispatch(ChangeIsBack({
    isBack: false,
  }))
  const items = new Map();
  items.set('GHO', [{ crypto: 'GHO', network: 'Ethereum Mainet' }])
  const response = await TransactionService.getQrBase64(walletFrom)
  const fullImage = 'data:image/png;base64,'
  setQR(fullImage + response.imgBase64?.toString());
  setCryptos(items)
  setValue('wallet', walletTo)
  getBalance();
}
useEffect(() => {
  init();
  // repeat();
}, []);

useEffect(() => {
  console.log('Valor del campo cambiado:', amountWatched);
  if (amountWatched != undefined) {
    if (amountWatched <= 0) {
      console.log('Amount')
      setError('amount', { type: 'manual', message: 'El monto debe ser mayor a 0' })
      return
    }
    return
  }
  setError('amount', { type: 'manual', message: '' })
  setStatusButton(StatusButton.Enabled)

}, [amountWatched]);
//=============  INIT ============= 

const getBalance = async () => {
  if (execute === false) {
    const response = await TransactionService.getBalance(walletFrom)
    setExecute(true)
    console.log(response)
    if (response.status === 200) {
      setValue('amount', response.data.Balance)
    }
  }
}

const onSubmit = async () => {
  try {
    setStatusButton(StatusButton.Loading)
    console.log('============== START TRANSACTION ============== ')
    const response = await TransactionService.newTransaction();
    console.log('============== START TRANSACTION RESPONSE ==============: ' + response.status)
    if (response.status === 200) {
      navigate(routesNames.messageRecieveSuccess)
    }
    setStatusButton(StatusButton.Enabled)

  }
  catch (e) {
    setStatusButton(StatusButton.Enabled)
    handleErrors(e)
    console.error(e)
  }
}

useEffect(() => {
  if (errorMessage !== '') {
    toast.error(errorMessage)
    clearErrorMessage()
  }
}, [errorMessage])


const handleCripto = (event: any) => {
  const select = cryptos.get(event.value)[0]
  const model = new ConvertModel(select, 'Ethereum Mainet', '0.0', '', '');
  setTransaccionData(model)
  return;
};

const copy = () => {
  toast.success('Texto copiado')
}


return (
  <>
    <div className="my-0 mb-8">
      <h4 className="titleTxt text-lg">
        Hola,{'user'}
      </h4>
      <h1 className="titleTxt">
        Recibir
      </h1>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="w-full flex flex-row justify-between mt-4 items-center">
          <p className="font-bold text-onGlobal">Recibirás:</p>
          <div className=" flex flex-row p-2 rounded-lg gap-2">
            <Select
              isSearchable={false}
              onChange={handleCripto}
              defaultValue={options[0]}
              value={options.find(option => option.value === transaccionData.from_currency)}
              options={options}
              formatOptionLabel={formatCryptoOptionLabel}
              required
              styles={colourStyles}
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between mt-4 mb-4 items-center" >
          <p className="font-bold text-onGlobal">De la red: </p>
          <div className="bg-grayLow flex flex-row p-2 rounded-lg gap-2">
            <p className="font-bold text-onGlobal">{transaccionData.network}</p>
          </div>
        </div>
        <div className="min-w-16 min-h-16 flex justify-center mb-3 mt-3">
          <img src={qr} className="w-[255px] h-[255px] mt-5" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full  flex flex-col items-start">
            <p className="font-bold text-onGlobal">Dirección de depósito personal de cripto:</p>
            <div className="relative w-full">
              <textarea className="inputTextArea text-start" disabled placeholder='' {...register('wallet',
                {
                  required: {
                    value: true,
                    message: "Ingresa un clabe valida"
                  },
                })} />
              {errors.wallet && <span className="errorTxt">{errors.wallet.message}</span>}
              <div className="flex absolute right-3 top-10" onClick={copy}>
                <i className="pi pi-copy ml-5" style={{ fontSize: '1.2rem', color: '#2cfec4' }}></i>
                <span className="text-purple text-1xl ">copiar</span>
              </div>
            </div>
          </div>
        
          <div className="w-full flex flex-row justify-between mt-6 mb-4 items-center" >
            <p className="font-bold text-onGlobal">Deposito minimo: </p>
          </div>
          <ButtonPrimary type="submit" name="Listo" status={statusbutton} onClick={() => { }} />
        </form>
      </div>
    </div>
  </>

)
}

export default RecieveTransactionPage