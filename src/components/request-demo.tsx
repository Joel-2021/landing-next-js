export default function RequestDemo() {
    return (
        <div className="relative h-12 w-full min-w-[200px]">
            <div
                className="absolute inset-0 rounded-full p-[3px] button-gradient">
                <div className="flex justify-between items-center h-full w-full bg-background rounded-full">
                    <input
                        type="email"
                        className="flex-1 bg-transparent px-2 text-sm font-medium text-white outline-0 font-secondary"
                        placeholder="Enter your email"
                        required
                    />
                    <button
                        className="bg-[#000D12] h-full rounded-full uppercase px-3 md:px-5 font-secondary font-medium text-xs md:text-xs "
                        type="button"
                    >
                        Request Demo
                    </button>
                </div>
            </div>
        </div>
    )
}
