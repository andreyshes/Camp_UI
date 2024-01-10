import Image from "next/image";

const Work = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full overflow-hidden ">
			<Image
				src="/img-2.png"
				alt="Full Screen Image"
				className="w-full h-full object-cover"
				width={1920}
				height={1080}
			/>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
				<p className=" font-bold leading-10 text-2xl text-white ">
					Welcome to our camp&apos;s innovative application designed to enhance
					your camping experience! Our user-friendly app provides a seamless and
					interactive platform for campers to access a plethora of features.
					Navigate through the campgrounds effortlessly using the built-in map
					feature, discover exciting activities and events with our event
					calendar, and stay connected with fellow campers through our community
					forums. Need to request assistance or report an issue? Our integrated
					helpdesk is just a tap away. Explore the rich offerings of the camp,
					from hiking trails to recreational facilities, and receive real-time
					updates on weather conditions. With personalized profiles, campers can
					keep track of their favorite spots, share memorable moments, and even
					plan meet-ups with newfound friends. Embrace the future of camping
					with our app, ensuring you make the most of your time in nature,
					creating lasting memories at every turn. Happy camping!
				</p>
			</div>
		</div>
	);
};

export default Work;
