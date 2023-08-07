import { useContext, FocusEvent, useEffect } from 'react'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CartContainer,
  CartHeader,
  CartItemsContainer,
  CartTitle,
  Input,
  LocationContainer,
  LocationField,
  LocationFieldFull,
  LocationFields,
  OrderInfoContainer,
  PaymentContainer,
  PaymentOptions,
  SelectedItemsContainer,
  Separator,
  SubmitButton,
} from './styled'
import { CartItem } from './components/CartItem'
import { CartItemsContext } from '../../contexts/CartContext'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { adressContext } from '../../contexts/AdressContext'
import { DeliveryInfo } from './components/DeliveryInfo'

export function Cart() {
  const { cartItems } = useContext(CartItemsContext)
  const { adressData, changeAdressData } = useContext(adressContext)

  const { register, setValue } = useForm()

  async function fetchAdressData(cep: string) {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

      changeAdressData({
        bairro: data.bairro,
        cep: data.cep,
        complemento: data.complemento,
        localidade: data.localidade,
        logradouro: data.logradouro,
        uf: data.uf,
      })
    } catch (error) {
      console.log(error)
    }
  }

  function handleAutoInsertAdress(event: FocusEvent<HTMLInputElement>) {
    const cep = event.target.value

    if (cep.length === 8) {
      fetchAdressData(cep)
    }
  }

  useEffect(() => {
    setValue('cep', adressData.cep || '')
    setValue('street', adressData.logradouro || '')
    setValue('number', adressData.number || '')
    setValue('complement', adressData.complemento || '')
    setValue('neighborhood', adressData.bairro || '')
    setValue('city', adressData.localidade || '')
  }, [adressData, setValue])

  const totalItemsPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.amount
  }, 0)

  const deliveryPrice = 3.5
  const totalPrice = totalItemsPrice + deliveryPrice

  const formatedItemsPrice = totalItemsPrice.toFixed(2).replace('.', ',')
  const formatedDeliveryPrice = deliveryPrice.toFixed(2).replace('.', ',')
  const formatedTotalPrice = totalPrice.toFixed(2).replace('.', ',')

  return (
    <CartContainer>
      <div>
        <CartTitle>Complete seu pedido</CartTitle>

        <DeliveryInfo />
      </div>

      <div>
        <CartTitle>Cafés selecionados</CartTitle>

        <CartItemsContainer>
          <SelectedItemsContainer>
            {cartItems.map((cartItem) => (
              <>
                <CartItem key={cartItem.id} cartItem={cartItem} />
                <Separator key={cartItem.name} />
              </>
            ))}
          </SelectedItemsContainer>

          <OrderInfoContainer>
            <h2>
              Total de itens
              <span>R$ {formatedItemsPrice}</span>
            </h2>

            <h2>
              Entrega
              <span>R$ {formatedDeliveryPrice}</span>
            </h2>

            <h1>
              Total
              <span>R$ {formatedTotalPrice}</span>
            </h1>
          </OrderInfoContainer>

          <SubmitButton type="submit">confirmar pedido</SubmitButton>
        </CartItemsContainer>
      </div>
    </CartContainer>
  )
}
