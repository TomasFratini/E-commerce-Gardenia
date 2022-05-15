import jabones from "../img/jabones.png"
import aromatizadores from "../img/aromatizadores.jpeg"
import box from "../img/box.jpeg"
import difusores from "../img/difusorescolgantes.jpeg"
import kit from "../img/kitrealajante.jpeg"
import velas from "../img/velassoja.jpeg"

export const productList = [
    {id:"1", 
    name: "Jabones", 
    description:"Jabones vegetales", 
    precio:"400", 
    img: jabones, 
    categoria:"Jabones" },

    {id:"2",
    name: "Velas de soja",
    description:"Velas a base de cera de soja y aceites esenciales",
    precio:"950",
    img: velas,
    categoria:"Velas"},

    {id:"3",
    name: "Aromatizadores de tela y ambiente",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    precio:"800",
    img: aromatizadores,
    categoria:"Difusor"},

    {id:"4",
    name: "Aromatizadores colgantes",
    description:"Difusores de aceites esenciales para espacios pequeños",
    precio:"600",
    img: difusores,
    categoria:"Difusor"},

    {id:"5",
    name: "Box para regalar",
    description:"Box para regalar (Vela de soja XL, aromatizador de 250ml, dos jabones vegetales)",
    precio:"2700",
    img: box,
    categoria:"Jabones"},

    {id:"6",
    name: "Kit Ralajacion",
    description:"Vela de soja mas aromatizador de lavanda",
    precio:"1700",
    img: kit,
    categoria:"Velas"}
]

const promise = new Promise ((resp) => {
    resp(productList)
}, 2000)

export const getItem = () => {
    return promise
}