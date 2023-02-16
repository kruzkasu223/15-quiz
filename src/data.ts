import { QuizDataType } from "./types"

export const QUIZ_DATA: QuizDataType = {
  questions: [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        {
          id: 1,
          option: "Hyper Tag Markup Language",
        },
        {
          id: 2,
          option: "Hyper Text Markup Language",
        },
        {
          id: 3,
          option: "Hyperlinks Text Mark Language",
        },
        {
          id: 4,
          option: "Hyperlinking Text Marking Language",
        },
      ],
    },
    {
      id: 2,
      question: "What symbol indicates a tag?",
      options: [
        {
          id: 1,
          option: "Angle brackets e.g. <,>",
        },
        {
          id: 2,
          option: "Curved brackets e.g. {,}",
        },
        {
          id: 3,
          option: "Commas e.g. ','",
        },
        {
          id: 4,
          option: "Exclamation marks e.g. !",
        },
      ],
    },
    {
      id: 3,
      question: "Which of these is a genuine tag keyword?",
      options: [
        {
          id: 1,
          option: "header",
        },
        {
          id: 2,
          option: "bold",
        },
        {
          id: 3,
          option: "heading",
        },
        {
          id: 4,
          option: "image",
        },
      ],
    },
    {
      id: 4,
      question: "What is the correct tag for creating a hyperlink?",
      options: [
        {
          id: 1,
          option: "<anchor>",
        },
        {
          id: 2,
          option: "<link>",
        },
        {
          id: 3,
          option: "<href>",
        },
        {
          id: 4,
          option: "<a>",
        },
      ],
    },
    {
      id: 5,
      question: "What is the correct tag for a line break?",
      options: [
        {
          id: 1,
          option: "<brk />",
        },
        {
          id: 2,
          option: "<line />",
        },
        {
          id: 3,
          option: "<bk />",
        },
        {
          id: 4,
          option: "<br />",
        },
      ],
    },
    {
      id: 6,
      question: "What does CSS stand for?",
      options: [
        {
          id: 1,
          option: "Computing Style Sheet",
        },
        {
          id: 2,
          option: "Creative Style System",
        },
        {
          id: 3,
          option: "Cascading Style Sheet",
        },
        {
          id: 4,
          option: "Creative Styling Sheet",
        },
      ],
    },
    {
      id: 7,
      question: "Where should a CSS file be referenced in a HTML file?",
      options: [
        {
          id: 1,
          option: "Before any HTML code",
        },
        {
          id: 2,
          option: "After all HTML code",
        },
        {
          id: 3,
          option: "Inside the head section",
        },
        {
          id: 4,
          option: "Inside the body section",
        },
      ],
    },
    {
      id: 8,
      question:
        "What is the correct format for aligning written content to the center of the page in CSS?",
      options: [
        {
          id: 1,
          option: "text-align: center;",
        },
        {
          id: 2,
          option: "font-align: center;",
        },
        {
          id: 3,
          option: "text: align-center;",
        },
        {
          id: 4,
          option: "font: align-center;",
        },
      ],
    },
    {
      id: 9,
      question:
        "What is the correct format for changing the background colour of a div in CSS?",
      options: [
        {
          id: 1,
          option: "bg-color: red;",
        },
        {
          id: 2,
          option: "bg-colour: red;",
        },
        {
          id: 3,
          option: "background-colour: red;",
        },
        {
          id: 4,
          option: "background-color: red;",
        },
      ],
    },
    {
      id: 10,
      question: 'What is the correct format to write a div with id "example" ?',
      options: [
        {
          id: 1,
          option: "<div-id=example>",
        },
        {
          id: 2,
          option: '<div id="example">',
        },
        {
          id: 3,
          option: '<div="example">',
        },
        {
          id: 4,
          option: "<div.example>",
        },
      ],
    },
  ],

  answers: [
    {
      questionId: 1,
      optionId: 2,
    },
    {
      questionId: 2,
      optionId: 1,
    },
    {
      questionId: 3,
      optionId: 1,
    },
    {
      questionId: 4,
      optionId: 4,
    },
    {
      questionId: 5,
      optionId: 4,
    },
    {
      questionId: 6,
      optionId: 3,
    },
    {
      questionId: 7,
      optionId: 3,
    },
    {
      questionId: 8,
      optionId: 1,
    },
    {
      questionId: 9,
      optionId: 4,
    },
    {
      questionId: 10,
      optionId: 2,
    },
  ],
}
