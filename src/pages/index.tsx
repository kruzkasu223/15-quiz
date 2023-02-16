import { type NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import { Question } from "../components"
import { QUIZ_DATA } from "../data"
import { AnswerType, HandleOptionSelectType } from "../types"
import ConfettiExplosion from "react-confetti-explosion"

const Home: NextPage = () => {
  const [userAnswers, setUserAnswers] = useState<AnswerType[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleOptionSelect: HandleOptionSelectType = (questionId, optionId) => {
    setUserAnswers((answers) => {
      const answerIndex = answers.findIndex(
        (answer) => answer.questionId === questionId
      )
      if (answerIndex !== -1) {
        const updatedAnswers = [...answers]
        updatedAnswers[answerIndex] = {
          questionId,
          optionId,
        }
        return updatedAnswers
      }
      return [
        ...answers,
        {
          questionId,
          optionId,
        },
      ]
    })
  }

  const handleSubmit = () => {
    const correctAnswers = QUIZ_DATA.answers.filter((answer) => {
      const userAnswer = userAnswers.find(
        (userAnswer) => userAnswer.questionId === answer.questionId
      )
      if (userAnswer) {
        return userAnswer.optionId === answer.optionId
      }
      return false
    })

    setScore(correctAnswers.length)
    setIsSubmitted(true)
  }

  const handleStartAgain = () => {
    setIsSubmitted(false)
    setUserAnswers([])
    setScore(0)
  }

  return (
    <>
      <Head>
        <title>15/27 - Quiz</title>
      </Head>
      <main
        data-theme="aqua"
        className="flex min-h-screen flex-col gap-4 text-center"
      >
        <h1 className="m-6 text-4xl font-extrabold tracking-tight">
          15/27 - Quiz
        </h1>
        {isSubmitted ? (
          <div className="flex flex-col items-center">
            {score === QUIZ_DATA.questions.length && (
              <ConfettiExplosion
                force={0.8}
                duration={5000}
                width={1500}
                particleCount={500}
              />
            )}
            <h1 className="m-6 text-4xl font-extrabold tracking-tight">
              Score: {score}/{QUIZ_DATA.questions.length}
            </h1>
            <div className="mt-10">
              <button
                className="btn-primary btn-lg btn"
                onClick={handleStartAgain}
              >
                Start Again
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-40 mb-10 text-left">
            <div className="flex flex-col gap-10">
              {QUIZ_DATA.questions.map((question) => (
                <Question
                  key={question.id}
                  question={question}
                  handleOptionSelect={handleOptionSelect}
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <button className="btn-primary btn-lg btn" onClick={handleSubmit}>
                Submit Quiz
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default Home
