

export const NorthStar = () => {
  const lineLength = 'w-10';
  const lineThickness = 'h-[2px]';
  const lineColor = 'bg-primary'; 
  const rotationDegrees = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      <div className={`absolute w-2 h-2 rounded-full ${lineColor} z-10`}></div>
      {rotationDegrees.map((degree, index) => (
        <div
          key={index} 
          className={`absolute ${lineLength} ${lineThickness} ${lineColor}`}
          style={{
            top: '50%',
            left: '50%',
            transform: `rotate(${degree}deg)`,
            transformOrigin: '0% 50%', 
          }}
        ></div>
      ))}
    </div>
  );
};