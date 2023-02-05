import "./polyfills.mjs";

const millisPerDay = 24 * 60 * 60 * 1000;

export function getTodayPlainString() {
  return Temporal.Now.plainDateISO().toString();
}

export function daysUntilChristmas(dateString) {
  const date = Temporal.PlainDate.from(dateString);

  let christmasDay = new Temporal.PlainDate(date.year, 12, 25);
  if (Temporal.PlainDate.compare(date, christmasDay) > 0) {
    christmasDay = christmasDay.add({ years: 1 });
  }

  const diffDuration = christmasDay.since(date);
  return diffDuration.days;
}
