import fondo from "../img/fondo.jpg"

function Presentation(productos) {

    const styleContainer = {
        backgroundImage: `url(${fondo})`
    }

  return (
    <div className="hero min-h-screen" style={styleContainer}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Bienvenidos</h1>
            </div>
        </div>
    </div>
  )
}
export default Presentation