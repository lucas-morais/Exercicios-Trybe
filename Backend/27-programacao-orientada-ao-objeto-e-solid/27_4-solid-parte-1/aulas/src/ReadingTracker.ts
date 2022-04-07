class ReadingTracker {
  private readingGoal: number;

  private booksRead: number;

  private goalAchieved: boolean

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.goalAchieved = false;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
  }

  readingGoalAchieved() {
    this.goalAchieved = this.booksRead >= this.readingGoal;
    this.progressNotification();
  }

  progressNotification(): void {
    const message = this.goalAchieved 
      ? 'Congratulations! You\'ve reached your reading goal!' 
      : 'There are still some books to go!'; 
    console.log(message);
  }
}

const readTracker = new ReadingTracker(20);

readTracker.trackReadings(12);
readTracker.trackReadings(9);