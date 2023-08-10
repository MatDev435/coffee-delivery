import { createContext, ReactNode, useState, useEffect } from 'react'

export interface AdressType {
  bairro: string | undefined
  cep: string | undefined
  complemento: string | undefined
  localidade: string | undefined
  logradouro: string | undefined
  number?: string | undefined
  uf: string | undefined
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
  const [adressData, setAdressData] = useState<object>(() => {
    const storedAdressDataAsJSON = localStorage.getItem(
      '@coffee-delivery:adress-data-1.0.0',
    )

    return storedAdressDataAsJSON
      ? JSON.parse(storedAdressDataAsJSON)
      : ({
          bairro: '',
          cep: '',
          complemento: '',
          localidade: '',
          logradouro: '',
          uf: '',
        } as AdressType)
  })

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:adress-data-1.0.0',
      JSON.stringify(adressData),
    )
  }, [adressData])

  function changeAdressData(newData: AdressType) {
    setAdressData(newData)
  }

  return (
    <deliveryInfoContext.Provider value={{ adressData, changeAdressData }}>
      {children}
    </deliveryInfoContext.Provider>
  )
}
