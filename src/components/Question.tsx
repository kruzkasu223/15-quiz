import { HandleOptionSelectType, QuestionType } from "../types"
import { Option } from "./Option"

type QuestionProp = {
  question: QuestionType
  handleOptionSelect: HandleOptionSelectType
}

export const Question = ({ question, handleOptionSelect }: QuestionProp) => {
  return (
    <div className="w-full">
      <h3 className="text-3xl">
        {question.id}. {question.question}
      </h3>
      <div className="mt-2 flex flex-col items-start gap-2">
        {question.options.map((option) => (
          <Option
            key={option.id}
            option={option}
            questionId={question.id}
            handleOptionSelect={handleOptionSelect}
          />
        ))}
      </div>
    </div>
  )
}
