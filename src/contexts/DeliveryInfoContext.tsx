import { createContext, ReactNode, useState } from 'react'

export interface AdressType {
  bairro: string
  cep: string
  complemento: string
  localidade: string
  logradouro: string
  number?: string
  uf: string
}

interface DeliveryInfoContextProps {
  adressData: AdressType
  changeAdressData: (newDAta: AdressType) => void
}

export const deliveryInfoContext = createContext({} as DeliveryInfoContextProps)

interface DeliveryInfoContextProviderProps {
  children: ReactNode
}

export function DeliveryInfoContextProvider({
  children,
}: DeliveryInfoContextProviderProps) {
  const [adressData, setAdressData] = useState<object>({} as AdressType)

  function changeAdressData(newData: AdressType) {
    setAdressData(newData)
  }

  return (
    <deliveryInfoContext.Provider value={{ adressData, changeAdressData }}>
      {children}
    </deliveryInfoContext.Provider>
  )
}
