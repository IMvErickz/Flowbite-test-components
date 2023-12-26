import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";

export function Home() {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-8">
            <Header />
            <Modal />
            <Table />
        </div>

    )
}