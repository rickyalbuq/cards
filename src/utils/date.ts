export function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function calcMatchDuration(createdAt: string): string {
  const diff = Math.abs(Number(createdAt) - Number(new Date().getTime()));
  const diffHours = Math.trunc((diff / (60000 * 60)) % 24);
  const diffMinutes = Math.trunc((diff / 60000) % 60);
  const diffSeconds = Math.trunc((diff / 1000) % 60);

  const time = [
    padTo2Digits(diffHours),
    padTo2Digits(diffMinutes),
    padTo2Digits(diffSeconds)
  ].join(':');

  return time;
}
