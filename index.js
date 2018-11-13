// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter((i) => i.revenue > revenue)
}

const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers,revenue).map((i) => i.name)
}

const exactMatch = (drivers, object) => {
  const key = Object.keys(object)[0];
  return drivers.filter((i) => i[key] === object[key]);
}

const exactMatchToList = (drivers, object) => {
  return exactMatch(drivers,object).map((i) => i.name)
}
