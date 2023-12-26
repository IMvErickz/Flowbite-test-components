import { Form } from "../../components/Form";

export function NewCard() {
    return (
        <main className="flex flex-col items-center justify-center gap-y-12">
            <header>
                <h1 className="text-slate-400 text-6xl font-mono leading-relaxed">Registre Aqui um Novo Card</h1>
            </header>

            <Form />
        </main>
    )
}