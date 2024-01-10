import Footer from "@/components/Footer";

export default function MarketingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="relative overflow-hidden flex flex-col">
			{children}
			<Footer />
		</main>
	);
}
