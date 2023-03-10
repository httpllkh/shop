import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Items } from "@/components/items"

const Home = () => {
    
    // const products = [
    //     {id: 1, 
    //     name: "Футболка черная", 
    //     img: "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3139_Tee_DenseBase/31391-800x800.jpg",
    //     description: "Черная базовая футболка Dense Base cделана из плотного натурального хлопка. Модель выполнена в однотонной расцветке и свободном крое, имеет круглый ворот с широкой эластичной резинкой. Футболка подойдет, как практичный базовый элемент гардероба на каждый день.",
    //     price: "2000 ₽"
    // },
    //     {id: 2,
    //     name: "Худи с капюшоном",
    //     img: "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3110_SH_Mono_brown/3110-800x800.jpg",
    //     description: "Толстовка с капюшоном SH Mono, выполненная из мягкого премиального хлопка.",
    //     price: "4200 ₽"
    //     }]

    // const ProductNames = products.map((prod) => { 
    //     <div>
    //     <img src={prod.img}/>
    //         <h2>{prod.name}</h2>
    //         <h3>{prod.description}</h3>
    //         <h2>{prod.price}</h2>
    //         </div>
    // })
    return(
        <div className="wrapper">
            <Header />
            <Items name='Футболка черная' img='https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3139_Tee_DenseBase/31391-800x800.jpg' description='Черная базовая футболка Dense Base cделана из плотного натурального хлопка. Модель выполнена в однотонной расцветке и свободном крое, имеет круглый ворот с широкой эластичной резинкой. Футболка подойдет, как практичный базовый элемент гардероба на каждый день.' price='4200 ₽'></Items>
            <Footer />
        </div>
    )
}

export default Home 