import products from './products'

const miPromise = new Promise ( (resolve,reject) => { 
    console.log("Iniciando promesa...")
    setTimeout( () => { resolve("Promise terminada")}, 1000)
    //reject("error!")
     
})   

//fetch
function getData () {
    const PromiseData = new Promise ( (resolve,reject) => { 
    console.log("Solicitando datos a la base de datos")
    //reject("Algo salio mal")
    setTimeout( () => { resolve(products)}, 1500)
    })
    return PromiseData
}

export default getData;