import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
	return (
        <>
        <Navbar/>
		<section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">
			<div className="overflow-hidden rounded-2xl shadow-lg">
				<img
					src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
					alt="Fresh ingredients arranged on a table"
					className="h-80 w-full object-cover md:h-full"
				/>
			</div>
			<div className="space-y-5">
				<p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
					About us
				</p>
				<h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
					Good food brings us together
				</h1>
				<p className="leading-relaxed text-gray-600">
					We make it easy to discover delicious recipes for every occasion. From
					quick weeknight meals to dishes worth sharing, find inspiration and
					make cooking a little more joyful.
				</p>
				<p className="leading-relaxed text-gray-600">
					Our goal is to help home cooks feel confident in the kitchen with
					simple ideas, fresh ingredients, and recipes everyone can enjoy.
				</p>
			</div>
		</section>
        <Footer/>
        </>
	);
}
