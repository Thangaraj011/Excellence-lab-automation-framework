export class BasicComponents {

  getTodaysDate() {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      timeZone: 'America/New_York',
    }).format(new Date());
  }
}