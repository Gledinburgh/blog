
import Card from '../components/Card'
import UpdateCard1 from '../components/UpdateCard1'


export default function Updates() {
  return (
    <>

      <UpdateCard1 x={1} />
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => < Card key={'Card' + x} x={x} />)
      }

    </>








  )
}
