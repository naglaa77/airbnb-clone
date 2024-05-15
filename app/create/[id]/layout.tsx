
interface LayoutCreationProps {
    children: React.ReactNode;
}

export default function LayoutCreation({children}: LayoutCreationProps) {
    return (
        <div className="mt-10">
        {children}
        </div>
    );
}