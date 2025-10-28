"use client";
import React, { useState } from "react";

interface FAQItem {
	question: string;
	answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
	{
		question: "How does MELP protect my business data?",
		answer: (
			<>
				We follow industry-standard data protection practices to keep your
				business data encrypted and secure. MELP will not use your data to train
				our models unless you explicitly opt in to a request to share your data.
				<br />
				<br />
				Any information used to power MELP features is processed securely with
				strict contractual agreements in place. We specifically have data
				processing agreements that prohibit the use of customer data for
				unauthorized purposes.
			</>
		),
	},
	{
		question: "Where can I find my invoices?",
		answer:
			"You can find all your invoices in your account settings under the 'Billing' section. Navigate to Settings → Billing → Invoice History to view and download past invoices.",
	},
	{
		question: "What are your accepted payment methods?",
		answer:
			"We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and bank transfers for enterprise plans. You can also use digital payment methods like Apple Pay and Google Pay.",
	},
	{
		question: "What is a workspace?",
		answer:
			"A workspace is a shared environment where your team can collaborate on projects, manage tasks, and track progress. Each workspace can have multiple members with different permission levels.",
	},
	{
		question: "What happens when I go over the storage limit on a Free Plan?",
		answer:
			"When you exceed the storage limit on a Free Plan, you'll receive notifications to upgrade. You won't lose any data, but you'll need to either delete some content or upgrade to a paid plan to continue adding new data.",
	},
	{
		question: "Do you offer student discounts?",
		answer:
			"Yes! We offer special pricing for students and educators. Students with valid .edu email addresses can get up to 50% off on our Pro plans. Contact our support team with your student ID for verification.",
	},
	{
		question: "What do the different analytics tiers mean?",
		answer:
			"Analytics tiers determine the depth of insights you receive. Basic tier includes essential metrics, Pro tier adds advanced reports and custom dashboards, and Enterprise tier includes AI-powered predictive analytics and custom integrations.",
	},
	{
		question: "How is pricing calculated for the paid plans?",
		answer:
			"Pricing is calculated per user per month. You pay only for active team members. Annual plans receive a 20% discount compared to monthly billing. Enterprise plans are custom-priced based on your specific needs.",
	},
	{
		question: "How do I get charged when I add members to my workspace?",
		answer:
			"When you add new members, you'll be charged a prorated amount for the remainder of your billing cycle. The charge will reflect on your next invoice and subsequent bills will include the full amount for all members.",
	},
	{
		question: "How does adding and removing members work?",
		answer:
			"You can add or remove members anytime from your workspace settings. Added members gain immediate access, while removed members lose access instantly. Billing adjusts automatically with prorated credits for removed members.",
	},
	{
		question: "How are paid seats counted?",
		answer:
			"Paid seats are counted based on active workspace members. Guests and viewers don't count toward your seat limit. Deactivated members are automatically removed from your seat count after their session expires.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-12 text-center">
					Questions & answers
				</h2>

				<div className="space-y-0 border-t border-neutral-200">
					{faqData.map((faq, index) => (
						<div key={index} className="border-b border-neutral-200">
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full flex items-center justify-between py-5 text-left hover:bg-neutral-50 transition-all duration-200 px-4 sm:px-6 cursor-pointer group"
								aria-expanded={openIndex === index}
							>
								<span className="text-base sm:text-lg font-semibold text-neutral-900 pr-4 transition-colors group-hover:text-brand-600">
									{faq.question}
								</span>
								<span
									className="flex-shrink-0 text-neutral-900 text-2xl transition-transform duration-300 group-hover:text-brand-600"
									style={{
										transform:
											openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
									}}
								>
									+
								</span>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									openIndex === index
										? "max-h-96 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="px-4 sm:px-6 pb-5 text-neutral-700 text-sm sm:text-base leading-relaxed animate-fadeIn">
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
