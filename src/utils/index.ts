export const formatCurrency = (
  amount: number | string,
  currency: string,
  minDigits = 0,
  maxDigits = 0
) => {
  if (typeof amount === "string") return amount;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  });
  return formatter.format(amount);
};

export const formatCash = (n, fixNo = 0) => {
  if (n < 1e3) return n;
  if (n >= 1e3) return +(n / 1e3).toFixed(fixNo) + "K";
};

export const getTimeFromDate = (timestamp) => {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var time = new Date();
  return time.setHours(hours, minutes, seconds);
}
