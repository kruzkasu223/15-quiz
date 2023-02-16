import { type NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>15/27 - Quiz</title>
      </Head>
      <main
        data-theme="aqua"
        className="flex min-h-screen flex-col items-center gap-4"
      >
        <h1 className="m-6 text-4xl font-extrabold tracking-tight">
          15/27 - Quiz
        </h1>
      </main>
    </>
  )
}

export default Home
