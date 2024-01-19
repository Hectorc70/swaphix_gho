/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
// import toast from 'react-hot-toast'

// import { ApiError, ConnectionError } from '../erros/errors'

const useErrorHandling = () => {
  const [errorMessage, setErrorMessage] = useState('')

  const handleErrors = (error: any ) => {
    setErrorMessage(error.message.toString())
  }
  const clearErrorMessage = () => {
    setErrorMessage('')
  }

  return {
    errorMessage,
    handleErrors,
    clearErrorMessage
  }
}

export default useErrorHandling
