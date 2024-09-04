
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
      <h2 className="px-5 mt-5 text-left text-2xl font-bold bg-breadorange rounded-xl w-fit">
        <span>{title}</span>
      </h2>
      {questions.map((item, index) => (
        <React.Fragment key={index}>
          <h3 className="px-5 mt-3 text-left text-xl font-bold bg-breadorange rounded-xl w-fit">
            {item.question}
          </h3>
          <p className="px-5 mt-1 text-left text-lg bg-breadorange rounded-xl w-fit">
            {item.answer}
          </p>
        </React.Fragment>
      ))}
    </section>
  )
}

export default FAQSection
