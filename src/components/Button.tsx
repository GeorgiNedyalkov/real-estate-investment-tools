type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            className="border hover:bg-slate-200 cursor-pointer p-2 mr-2 mb-5 font-bold"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
