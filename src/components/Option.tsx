import { HandleOptionSelectType, OptionType } from "../types"

type OptionProps = {
  option: OptionType
  questionId: number
  handleOptionSelect: HandleOptionSelectType
}

export const Option = ({
  option,
  questionId,
  handleOptionSelect,
}: OptionProps) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-4">
        <input
          type="radio"
          name={String(questionId)}
          className="radio-primary radio"
          value={option.id}
          onChange={(e) => {
            handleOptionSelect(questionId, Number(e.target.value))
          }}
        />
        <span className="label-text text-lg font-semibold">
          {option.option}
        </span>
      </label>
    </div>
  )
}
