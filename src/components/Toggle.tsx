
interface ToggleProps {
  isSelected: boolean
  handleClick: () => void
}


// Toggle switch
// Indicates whether the toggle switch is selected or not
// handle the click event on the toggle switch
const Toggle: React.FC<ToggleProps> = ({ isSelected, handleClick }) => {
  const text = isSelected ? 'Yes' : 'No'

  return (
    <div className="flex flex-row items-center justify-center">
      <p className="text-sm">{text}</p>
      <div
        onClick={handleClick}
        className={`flex w-14 h-7 bg-cetaceanblue m-2 rounded-full transition-all duration-500 outline outline-outerspace
          ${isSelected ? 'bg-fuzzywuzzy' : ''
          }`}
      >
        <span
          className={`h-7 w-7 bg-intensewhite rounded-full transition-all duration-500 shadow-lg 
            ${isSelected ? 'ml-7' : ''
            }`}
        />
      </div>

    </div>
  )
}

export default Toggle