import { useContext } from 'react'
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

export function Cart() {
  const { cartItems } = useContext(CartItemsContext)
  const { register } = useForm()

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
              <Input type="number" placeholder="CEP" />
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
