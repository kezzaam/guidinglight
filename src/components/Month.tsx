import months from '../data/months.json'

export default function Month({ selectedDate, onDateSelect }: { selectedDate: Date; onDateSelect: (date: Date) => void }) {
  // Get the current date and time
  const currentDate = new Date()

  // Function to format the date with prefix and ordinal suffix
  function formatDate(date: Date) {
    const options: any = { weekday: 'long', day: 'numeric', month: 'long' }
    const formatter = new Intl.DateTimeFormat('en-GB', options)

    if (date.toDateString() === currentDate.toDateString()) {
      return `Today: ${formatter.format(date)}`
    } else if (date.toDateString() === getPreviousDate().toDateString()) {
      return `Yesterday: ${formatter.format(date)}`
    } else if (date.toDateString() === getNextDate().toDateString()) {
      return `Tomorrow: ${formatter.format(date)}`
    } else {
      return `${formatter.format(date)}`
    }
  }

  // Function to get the previous date
  function getPreviousDate() {
    const previousDate = new Date(currentDate)
    previousDate.setDate(previousDate.getDate() - 1)
    return previousDate
  }

  // Function to get the next date
  function getNextDate() {
    const nextDate = new Date(currentDate)
    nextDate.setDate(nextDate.getDate() + 1)
    return nextDate
  }

    // Format the selected date
    const formattedDate = formatDate(selectedDate)
    // console.log('Selected date:', formattedDate)

  // Function to get the Māori month based on the English month
  function getMaoriMonth(englishMonth: string) {
    const month = months.find((m) => m.englishMonth === englishMonth)
    return month ? month.maoriName : ''
  }


  // Get the Māori month for the current English month
  const englishMonth = currentDate.toLocaleString('en-GB', { month: 'long' })
  const maoriMonth = getMaoriMonth(englishMonth)
  // console.log('Māori month:', maoriMonth)

  return (
    <div>
      <h4>{formattedDate}</h4>
      <h2>{maoriMonth}</h2>
    </div>
  )
}
