import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CartContainer,
  CartHeader,
  CartTitle,
  Input,
  LocationContainer,
  LocationField,
  LocationFieldFull,
  LocationFields,
  PaymentContainer,
  PaymentOptions,
} from './styled'

export function Cart() {
  return (
    <CartContainer>
      <div>
        <CartTitle>Complete seu pedido</CartTitle>

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
              <Input placeholder="CEP" />
            </LocationField>

            <LocationFieldFull>
              <Input placeholder="Rua" />
            </LocationFieldFull>

            <LocationField>
              <Input placeholder="Número" />
              <Input placeholder="Complemento (Opcional)" />
            </LocationField>

            <LocationField>
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
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
      </div>

      <div>
        <CartTitle>Cafés selecionados</CartTitle>
      </div>
    </CartContainer>
  )
}
