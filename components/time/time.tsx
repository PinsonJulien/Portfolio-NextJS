export default function Time({ 
  dateString,
  formatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }
}: { 
  dateString?: string; 
  formatOptions?: Intl.DateTimeFormatOptions; 
}) {
  
  let date: Date | any = new Date(dateString);
  if (isNaN(date)) { 
    date = new Date();
    dateString = date.toISOString();
  }

  return (
    <time 
      dateTime={dateString}
    >
      { date.toLocaleString(undefined, formatOptions) }
    </time>
  );
}