import months from '../app/api/moon/months.json'

export default function CalendarRow({ selectedDate, onDateSelect }: { selectedDate: Date; onDateSelect: (date: Date) => void }) {
  // Get the current date and time
  const currentDate = new Date()

  // Function to format the date as "Thursday 13th July"
  function formatDate(date: Date) {
    const options: any = { weekday: 'long', day: 'numeric', month: 'long' }
    const formattedDate = date.toLocaleDateString('en-GB', options)

    // Add the ordinal suffix to the day
    const day = date.getDate()
    const suffix = getOrdinalSuffix(day)
    return formattedDate.replace(`${day}`, `${day}${suffix}`)
  }

  // Function to get the ordinal suffix for a number (e.g., 1st, 2nd, 3rd)
  function getOrdinalSuffix(number: number) {
    if (number === 11 || number === 12 || number === 13) {
      return 'th'
    }
    const lastDigit = number % 10
    switch (lastDigit) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  // Function to get the Māori month based on the English month
  function getMaoriMonth(englishMonth: string) {
    const month = months.find((m) => m.englishMonth === englishMonth)
    return month ? month.maoriName : ''
  }

  // Format the current date
  const formattedDate = formatDate(currentDate)
  console.log('Current date:', formattedDate)

  // Get the Māori month for the current English month
  const englishMonth = currentDate.toLocaleString('en-GB', { month: 'long' })
  const maoriMonth = getMaoriMonth(englishMonth)
  console.log('Māori month:', maoriMonth)

  return (
    <div>
      <h3>{formattedDate}</h3>
      <h2>{maoriMonth}</h2>
    </div>
  )
}
