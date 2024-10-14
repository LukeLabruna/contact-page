import CardPrice from "../../components/CardPrice/CardPrice"
import './TablePrice.css'

const TablePrice = () => {
  return (
    <section className='tablePrice'>
        <CardPrice 
          title={"WEBSTART"}
          subtitle={"Emprendedores y Start-ups."}
          price={100000}
          numberSections={5} />
        <CardPrice 
          title={"WEBBOOST"}
          subtitle={"PyMES en crecimiento."}
          price={200000}
          numberSections={7} />
        <CardPrice 
          title={"WEBEXPAND"}
          subtitle={"PyMES con expansión de mercado."}
          price={300000}
          numberSections={10} />
    </section>
  )
}

export default TablePrice