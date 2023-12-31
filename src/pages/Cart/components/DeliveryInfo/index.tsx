import { useContext, FocusEvent } from 'react'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  CartHeader,
  Input,
  LocationContainer,
  LocationField,
  LocationFieldFull,
  LocationFields,
  PaymentContainer,
  PaymentOptions,
} from './styles'
import { deliveryInfoContext } from '../../../../contexts/DeliveryInfoContext'
import axios from 'axios'

export function DeliveryInfo() {
  const { changeAdressData } = useContext(deliveryInfoContext)

  const { register } = useFormContext()

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

  return (
    <>
      <LocationContainer>
        <CartHeader iconColor="yellowDark">
          <MapPin size={22} />
          <p>
            Endereço de Entrega <br />
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </p>
        </CartHeader>

        <LocationFields>
          <LocationField>
            <Input
              type="text"
              placeholder="CEP"
              {...register('cep', { onBlur: handleAutoInsertAdress })}
            />
          </LocationField>

          <LocationFieldFull>
            <Input type="text" placeholder="Rua" {...register('street')} />
          </LocationFieldFull>

          <LocationField>
            <Input type="text" placeholder="Número" {...register('number')} />
            <Input
              type="text"
              placeholder="Complemento (Opcional)"
              {...register('complement')}
            />
          </LocationField>

          <LocationField>
            <Input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <Input type="text" placeholder="Cidade" {...register('city')} />
          </LocationField>
        </LocationFields>
      </LocationContainer>

      <PaymentContainer>
        <CartHeader iconColor="purple">
          <CurrencyDollar size={22} />
          <p>
            Pagamento <br />
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </p>
        </CartHeader>

        <PaymentOptions>
          <button type="button">
            <CreditCard size={16} />
            Cartão de crédito
          </button>

          <button type="button">
            <Bank size={16} />
            Cartão de débito
          </button>

          <button type="button">
            <Money size={16} />
            Dinheiro
          </button>
        </PaymentOptions>
      </PaymentContainer>
    </>
  )
}
