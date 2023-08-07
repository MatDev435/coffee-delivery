import { createContext, ReactNode, useState } from 'react'

export interface AdressType {
  bairro: string | undefined
  cep: string
  complemento: string | undefined
  localidade: string | undefined
  logradouro: string | undefined
  number?: string
  uf: string | undefined
}

interface AdressContextProps {
  adressData: AdressType
  changeAdressData: (newDAta: AdressType) => void
}

export const adressContext = createContext({} as AdressContextProps)

interface AdressContextProviderProps {
  children: ReactNode
}

export function AdressContextProvider({
  children,
}: AdressContextProviderProps) {
  const [adressData, setAdressData] = useState<object>({} as AdressType)

  function changeAdressData(newData: AdressType) {
    setAdressData(newData)
  }

  return (
    <adressContext.Provider value={{ adressData, changeAdressData }}>
      {children}
    </adressContext.Provider>
  )
}
