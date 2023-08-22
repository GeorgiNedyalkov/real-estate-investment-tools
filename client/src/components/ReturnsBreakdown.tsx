export default function ReturnsBreakdown() {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <p className="font-semibold">Mothly Cash Flow</p>
                <h3 className="text-xl font-bold">-$85 / month</h3>
            </div>
            <div className="flex gap-5">
                <div>
                    <p className="font-semibold">Income</p>
                    <h4 className="text-xl font-bold text-green-500">
                        $450 /month
                    </h4>
                </div>
                <div>
                    <p className="font-semibold">Expenses</p>
                    <h4 className="text-xl font-bold text-red-500">
                        $535 /month{" "}
                    </h4>
                </div>
            </div>
            <div>
                <p className="font-semibold">CoC ROI</p>
                <h4 className="text-xl font-bold">$-3.35% </h4>
            </div>
        </div>
    );
}
