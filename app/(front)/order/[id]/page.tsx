import OrderDetails from "./OrderDetails"

export function generateMetadata({params} : {params: {id: string}}){
  return {
    title: 'Order $(params.id}'
  }
}

function OrderDetailsPage({params} : {params: {id: string}}) {
  return (
    <>
     
      <OrderDetails orderId={params.id} />
    </>
  )
}

export default OrderDetailsPage