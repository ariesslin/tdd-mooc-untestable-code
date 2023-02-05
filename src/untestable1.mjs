const millisPerDay = 24 * 60 * 60 * 1000;

export function daysUntilChristmas(date) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  //date = today;
  date = new Date(date);

  const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
  if (date.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(new Date().getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - date.getTime();
  return Math.ceil(diffMillis / millisPerDay);
}
