function formatDate(dateTOFormat, useMonthAbbreviation = false) {
  const dateString = dateTOFormat;
  const date = new Date(dateString);

  const year = date.getFullYear();
  let month;
  if (useMonthAbbreviation) {
    const monthAbbreviations = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    month = monthAbbreviations[date.getMonth()];
  } else {
    month = (date.getMonth() + 1).toString().padStart(2, '0');
  }
  const day = date.getDate().toString().padStart(2, '0');

  return `${day}-${month}-${year}`;
}

export default formatDate;
