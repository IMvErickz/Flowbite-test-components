import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductContext"

export function Table() {

    const { products } = useContext(ProductContext)
    console.log(products)

    return (
        <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-slate-400 uppercase bg-zinc-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr key={product.name} className="bg-zinc-500 text-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                                    {product.name}
                                </th>
                                <td className="px-6 py-4">
                                    {product.color}
                                </td>
                                <td className="px-6 py-4">
                                    {product.type}
                                </td>
                                <td className="px-6 py-4">
                                    {product.price}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}