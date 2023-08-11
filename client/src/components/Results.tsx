import Returns from "./Returns";

export default function Results({ rentalIncome }: { rentalIncome: number }) {
    return (
        <>
            <h2>Results</h2>
            <Returns rentalIncome={rentalIncome} />
        </>
    );
}
