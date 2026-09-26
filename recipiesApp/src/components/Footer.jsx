function Footer() {
	return (
		<footer className="fixed w-[80%] mx-auto my-2 rounded-xl inset-x-0 bottom-0 z-10 border-t border-gray-200 bg-white/95 px-4 py-5 text-center text-sm text-gray-600 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] backdrop-blur">
			<p>&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
