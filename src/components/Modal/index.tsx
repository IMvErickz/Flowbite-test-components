import * as Dialog from '@radix-ui/react-dialog';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ProductContext } from '../../contexts/ProductContext';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newProductSchema = z.object({
    color: z.string(),
    name: z.string(),
    price: z.number(),
    type: z.string()
})

type newProductSchemaForm = z.infer<typeof newProductSchema>

export function Modal() {

    const { register, handleSubmit, reset } = useForm<newProductSchemaForm>({
        resolver: zodResolver(newProductSchema)
    })
    const { handleRegisterProduct } = useContext(ProductContext)

    async function handleRegisterNewProduct(data: newProductSchemaForm) {

        const { color, name, price, type } = data

        handleRegisterProduct({ color, name, price, type })
        reset()
    }


    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="bg-slate-400 text-black font-semibold px-4 py-2 rounded hover:bg-slate-500 transition-colors">
                    Novo Card
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-600 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-white m-0 text-4xl font-medium">
                        Novo Card
                    </Dialog.Title>
                    <form onSubmit={handleSubmit(handleRegisterNewProduct)} className="mb-[15px] flex flex-col items-center gap-5 mt-5">
                        <input placeholder='Name' {...register('name')} type="text" id="base-input" className=" border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        <input placeholder='Color' {...register('color')} type="text" id="base-input" className=" border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        <input placeholder='Category' {...register('type')} type="text" id="base-input" className=" border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        <input placeholder='Price' {...register('price', { valueAsNumber: true })} type="number" id="base-input" className=" border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        <button type='submit' className='bg-zinc-700 text-white rounded px-4 py-2 hover:bg-zinc-800 transition-colors'>Salvar</button>
                    </form>
                    <Dialog.Close asChild>
                        <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}