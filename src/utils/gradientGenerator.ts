export function generateGradient(id: string, title: string) {
  const str = `${id}-${title}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue1 = Math.abs(hash) % 360;
  const hue2 = Math.abs(hash * 7) % 360;
  return {
    background: `linear-gradient(135deg, hsl(${hue1}, 40%, 22%), hsl(${hue2}, 35%, 18%))`,
    hue1,
    hue2,
  };
}
