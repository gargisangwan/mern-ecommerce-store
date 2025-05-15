import { motion } from "framer-motion";
import { Mail, User, MessageSquare, SendHorizonal } from "lucide-react";

const ContactPage = () => {
	return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
			<motion.div
				className="sm:mx-auto sm:w-full sm:max-w-md"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-400">
					Contact Us
				</h2>
				<p className="mt-2 text-center text-sm text-gray-400">
					We h’d love to hear from you. Fill out the form and we’ll get back to you shortly.
				</p>
			</motion.div>

			<motion.div
				className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className="bg-gray-800 py-10 px-6 shadow sm:rounded-lg sm:px-10">
					<form
						action="https://formspree.io/f/xqkryarr"
						method="POST"
						className="space-y-6"
					>
						{/* Name */}
						<div>
							<label htmlFor="username" className="block text-sm font-medium text-gray-300">
								Name
							</label>
							<div className="mt-1 relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<User className="h-5 w-5 text-gray-400" />
								</div>
								<input
									type="text"
									id="username"
									name="username"
									required
									autoComplete="off"
									placeholder="Enter your name"
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-white"
								/>
							</div>
						</div>

						{/* Email */}
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-300">
								Email
							</label>
							<div className="mt-1 relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Mail className="h-5 w-5 text-gray-400" />
								</div>
								<input
									type="email"
									id="email"
									name="Email"
									required
									autoComplete="off"
									placeholder="abc@example.com"
									onInput={(e) => {
		                             e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, "");
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-white"
								/>
							</div>
						</div>

						{/* Message */}
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-300">
								Message
							</label>
							<div className="mt-1 relative">
								<div className="absolute top-3 left-3 flex items-start pointer-events-none">
									<MessageSquare className="h-5 w-5 text-gray-400" />
								</div>
								<textarea
									id="message"
									name="Message"
									required
									autoComplete="off"
									placeholder="Write your message here"
									className="block w-full px-3 py-2 pl-10 pt-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-white resize-none h-36"
								/>
							</div>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full flex justify-center items-center py-2 px-4 bg-emerald-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
						>
							<SendHorizonal className="mr-2 h-5 w-5" />
							Send Message
						</button>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default ContactPage;









