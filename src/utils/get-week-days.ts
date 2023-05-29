interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays(params: GetWeekDaysParams) {
  const { short = false } = params

  const formatter = new Intl.DateTimeFormat('pt-br', { weekday: 'long' })

  const newEmptyArrayWithIndexes = Array.from(Array(7).keys())
  const arrayConvetedIndexesToWeekDayNames = newEmptyArrayWithIndexes.map(
    (day) => {
      return formatter.format(new Date(Date.UTC(2021, 5, day)))
    },
  )

  const weekDaysArrayCapitalize = arrayConvetedIndexesToWeekDayNames.map(
    (weekDay) => {
      if (short) {
        return weekDay.slice(0, 3).toUpperCase()
      }
      const firstLetter = weekDay.split('')
      firstLetter[0] = firstLetter[0].toUpperCase()

      return firstLetter.join('')
    },
  )

  return weekDaysArrayCapitalize
}
