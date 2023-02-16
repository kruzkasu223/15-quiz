export type QuizDataType = {
  questions: QuestionType[]
  answers: AnswerType[]
}

export type QuestionType = {
  id: number
  question: string
  options: OptionType[]
}

export type AnswerType = {
  questionId: number
  optionId: number
}

export type OptionType = {
  id: number
  option: string
}

export type HandleOptionSelectType = (
  questionId: number,
  optionId: number
) => void
