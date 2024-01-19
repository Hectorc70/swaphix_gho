

import axios from 'axios'
import { baseApi, baseApiICP } from '../common/constants/constants'


export const instance = axios.create({
  baseURL: baseApi
})

export const instanceICP = axios.create({
  baseURL: baseApiICP
})

export default instance
