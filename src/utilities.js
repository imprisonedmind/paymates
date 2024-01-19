function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export const timeAgo = (timestamp) => {
  const now = Date.now();
  const diff = now - timestamp;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day; // Assuming 30 days in a month

  if (diff < minute) {
    return `${Math.floor(diff / 1000)}s Ago`;
  } else if (diff < hour) {
    return `${Math.floor(diff / minute)}m Ago`;
  } else if (diff < day) {
    return `${Math.floor(diff / hour)}h Ago`;
  } else if (diff < week) {
    return `${Math.floor(diff / day)}d Ago`;
  } else if (diff < month) {
    return `${Math.floor(diff / week)}w Ago`;
  } else {
    const date = new Date(timestamp);
    return formatDate(date);
  }
};
