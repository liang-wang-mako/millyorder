
import React from 'react'
interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  questions: FAQItem[]
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, questions }) => {
  return (
    <section className="max-md:max-w-auto">
      <h2 className="px-2 mt-5 text-left text-2xl font-bold bg-breadorange rounded-xl w-fit xs:text-1xl sm:text-1xl sm:px-5 md:px-5">
        <span>{title}</span>
      </h2>
      {questions.map((item, index) => (
        <React.Fragment key={index}>
          <h3 className="px-2 mt-3 text-left text-xl font-bold bg-breadorange rounded-xl w-fit xs:text-lg sm:text-lg sm:px-5 md:px-5">
            {item.question}
          </h3>
          <p className="px-2 mt-1 text-left text-lg bg-breadorange rounded-xl w-fit xs:base-lg sm:text-base sm:px-5 md:px-5">
            {item.answer}
          </p>
        </React.Fragment>
      ))}
    </section>
  )
}

export default FAQSection
