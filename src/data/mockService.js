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


export function getItemData (itemID) {
    const promiseData = new Promise ( (resolve,reject) => {
        const itemRequested = products.find( (item) => item.id ===  Number (itemID))
        setTimeout( () => resolve(itemRequested), 1000)
})
return promiseData
}


export function getCategoryData (categoryID) {
    return new Promise ( (resolve) => {
        const itemsCategory = products.filter(item => item.category === categoryID)
        setTimeout( () => {resolve(itemsCategory)}, 1000)
    })
    }

export default getData;