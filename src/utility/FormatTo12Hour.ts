function formatTo12Hour(timeStr: string | null | undefined): string {
  if (!timeStr) return "--";
  
  // Create a dummy date using the time string to easily parse it
  const [hours, minutes] = timeStr.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));

  // Formats to "3:24 PM"
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export default formatTo12Hour