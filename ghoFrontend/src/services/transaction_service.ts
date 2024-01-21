import { AxiosError } from "axios"
import instance, { instanceICP } from "./base"
import { RequestInitialConvertionModel } from "../models/request_initial_convertion_model"

const initialConvertion = async (request: RequestInitialConvertionModel) => {
  try {
    const response = await instance.post(`/initialConvertion/`, request)
    return response.data.Resultado
  } catch (e) {
    if (e instanceof AxiosError) {
      let message = e.toString()
      if (e.response) {
        message = `${e.response.status} ${e.response.statusText}`
      }
      throw new Error(message)
    }
    if (e) {
      throw new Error(`Sucedio algo inesperado ${e.toString()}`);
    }
    throw new Error('Sucedio algo inesperado');
  }
}

const getQrBase64 = async (wallet: string) => {
  try {
    const response = await instance.post(`/qrgenerator/`, { cuenta: wallet })
    return response.data
  } catch (e) {
    if (e instanceof AxiosError) {
      let message = e.toString()
      if (e.response) {
        message = `${e.response.status} ${e.response.statusText}`
      }
      throw new Error(message)
    }
    if (e) {
      throw new Error(`Sucedio algo inesperado ${e.toString()}`);
    }
    throw new Error('Sucedio algo inesperado');
  }
}

const newTransaction = async () => {
  try {
    const response = await instanceICP.get(`/transaccion/`)
    return response
  } catch (e) {
    if (e instanceof AxiosError) {
      let message = e.toString()
      if (e.response) {
        message = `${e.response.status} ${e.response.statusText}`
      }
      throw new Error(message)
    }
    if (e) {
      throw new Error(`Sucedio algo inesperado ${e.toString()}`);
    }
    throw new Error('Sucedio algo inesperado');
  }
}

const getBalance = async ( wallet:string ) => {
  try {
    console.log(wallet)
    const response = await instanceICP.get(`/balance/`)
    return response
  } catch (e) {
    if (e instanceof AxiosError) {
      let message = e.toString()
      if (e.response) {
        message = `${e.response.status} ${e.response.statusText}`
      }
      throw new Error(message)
    }
    if (e) {
      throw new Error(`Sucedio algo inesperado ${e.toString()}`);
    }
    throw new Error('Sucedio algo inesperado');
  }
}
const TransactionService = {
  initialConvertion,
  getQrBase64,
  newTransaction,
  getBalance
}

export default TransactionService