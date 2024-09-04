import FAQSection from '@/components/faqsection/FAQSection'

const FAQ: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      {/* <Header /> */}
      <main className="flex flex-col items-start self-center mx-40 mt-10 text-black bg-white w-auto max-sm:mx-5  max-md:mx-20">
        <h1 className="p-5 text-left bg-breadorange rounded-xl max-md:max-w-auto">
          <span className="text-3xl font-bold">
            Frequently Asked Questions:
          </span>
        </h1>
        <FAQSection
          title="Account Questions:"
          questions={[
            {
              question: 'Q1: How do I create an account?',
              answer:
                'A: To create an account, click on the "Sign Up" button on the top-right corner of the homepage. Fill in your details, including your name, email, and password, then click "Submit." A confirmation message will come up.',
            },
            {
              question: 'Q2: Can I update my account information?',
              answer:
                'A: Yes, you can update your account information by navigating to the "Profile" page. Here you can change your personal details, password, and other settings.',
            },
          ]}
        />
        <FAQSection
          title="Ordering and Shipping:"
          questions={[
            {
              question: 'Q3: How do I place an order?',
              answer:
                'A: Browse through the product catalog and click on the items you wish to order. Add them to your cart and click on the cart icon to review your selections. Once ready, click "Proceed to Checkout" and follow the instructions to complete your order.',
            },
            {
              question: 'Q4: How do I view my orders?',
              answer:
                'A: You can click the "Orders" menu button to list your current and past orders.',
            },
            {
              question: 'Q5: Can I change or cancel my order?',
              answer:
                "A: We don't have enough time to implement this feature in the initial version. We will implement it in the next version.",
            },
          ]}
        />
        <FAQSection
          title="Technical Issues:"
          questions={[
            {
              question: "Q6: Why can't I log in?",
              answer:
                "A: If you're having trouble logging in, ensure you have registered, and you are entering the correct email and password. If the issue persists, contact customer support for assistance.",
            },
            {
              question:
                "Q7: What should I do if the site isn't loading properly?",
              answer:
                "A: Try refreshing the page or clearing your browser's cache and cookies. If the problem continues, check your internet connection or try to use a different browser. For further assistance, reach out to our support team.",
            },
            {
              question: 'Q8: How do I report a bug or issue?',
              answer:
                'A: To report any technical issues or bugs, please get in touch with our support team via ringing mobile at 021 2305622 or email to lwang@micro-wang.com. Provide as much detail as possible to help us address the issue promptly.',
            },
          ]}
        />
        <FAQSection
          title="Support:"
          questions={[
            {
              question: 'Q9: How do I contact customer support?',
              answer:
                'A: You can reach our customer support team by ringing mobile 021 2305622 and emailing lwang@wang-wang.com. We offer support through phone and email.',
            },
          ]}
        />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default FAQ
