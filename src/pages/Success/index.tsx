import { MapPin, Money, Timer } from 'phosphor-react'
import {
  DeliveryDetail,
  DeliveryDetails,
  DetailIcon,
  SuccessContainer,
  SuccessHeader,
} from './styled'
import successImage from '../../assets/success-image.png'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <SuccessHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SuccessHeader>

        <DeliveryDetails>
          <DeliveryDetail>
            <DetailIcon detailIconColor="purple">
              <MapPin size={16} />
            </DetailIcon>
            <h1>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
            </h1>
          </DeliveryDetail>

          <DeliveryDetail>
            <DetailIcon detailIconColor="yellow">
              <Timer size={16} />
            </DetailIcon>
            <h1>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </h1>
          </DeliveryDetail>

          <DeliveryDetail>
            <DetailIcon detailIconColor="yellowDark">
              <Money size={16} />
            </DetailIcon>
            <h1>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </h1>
          </DeliveryDetail>
        </DeliveryDetails>
      </div>

      <div>
        <img src={successImage} alt="" />
      </div>
    </SuccessContainer>
  )
}
