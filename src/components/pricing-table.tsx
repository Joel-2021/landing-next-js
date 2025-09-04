import { TableModel } from "@/models/table-model";

export default function PricingTable({ data }: { data: TableModel }) {
    return (
        <table className="w-full border-[6px] border-[#000D12] text-center mt-8 md:mt-12 font-secondary">
            <thead className="bg-[#000D12]">
            <tr>
                { data.headers?.map((header, index) => (
                    <th className="p-2 md:p-4 font-bold text-sm md:text-lg" key={ index }>{ header }</th>)) }
            </tr>
            </thead>
            <tbody>
            { data.rows.map((row, index) => (
                <tr key={ index }>

                    { row.map((item, index) => (
                        <td className="p-2 md:p-4" key={ index }>{ item }</td>
                    )) }
                </tr>
            )) }
            </tbody>
        </table>
    );
}
