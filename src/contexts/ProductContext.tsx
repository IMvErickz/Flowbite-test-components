import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProductsProps {
    name: string
    color: string
    type: string
    price: number
}


interface ProductContextProps {
    products: ProductsProps[]
    handleRegisterProduct: (data: ProductsProps) => void

}

interface ProviderProps {
    children: ReactNode
}

export const ProductContext = createContext({} as ProductContextProps)

export function ProductContextProvider({ children }: ProviderProps) {

    const [products, setProducts] = useState<ProductsProps[]>([])

    async function handleRegisterProduct(data: ProductsProps) {
        const { color, name, price, type } = data

        const response = await api.post('/products', {
            color, name, price, type
        })

        setProducts((state) => [...state, response.data])
    }

    async function getProducts() {
        await api.get('/products')
            .then(response => setProducts(response.data))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ products, handleRegisterProduct }}>
            {children}
        </ProductContext.Provider>
    )
}