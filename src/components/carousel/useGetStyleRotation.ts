export const useGetStyleRotation = (index: number, total: number) => {

  const middle = (total - 1) / 2;
  const rotate = (index - middle) * 10;

  const distanceFromMiddle = Math.abs(index - middle);
  const translateY = Math.pow(distanceFromMiddle, 2);

  return (
    {
      rotate: -rotate,
      translateY: -translateY
    }
  );
}
