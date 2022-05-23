import { Link } from "react-router-dom"

function PagoFinalizado() {


  return (
    <>
            <section className="flex text-gray-600 body-font justify-center">
                <div className="px-auto py-24 mx-auto">
                    <div className="flex   -mb-10 text-center">
                        <div className="mb-10 px-4">
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                                Gracias por tu compra!
                            </h2>
                            <p className="leading-relaxed text-base mb-10">
                                Tu envío será enviado al domicilio que indicaste dentro de las próxmas 24 horas.
                            </p>
                            <Link to="/">
                                <button className="btn btn-outline  m-1">
                                    Volver al inicio
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}
export default PagoFinalizado