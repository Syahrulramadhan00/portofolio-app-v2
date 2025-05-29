const HalfBracketSVG = ({ type = 'left', className = '', strokeWidth = '2' }) => {
  const viewBoxWidth = 10;
  const viewBoxHeight = 40;

  let pathD; 

  if (type === 'left') {
    pathD = `M 0 0 L ${viewBoxWidth} 5 L ${viewBoxWidth} 35 L 0 ${viewBoxHeight}`;
  } else {
    pathD = `M ${viewBoxWidth} 0 L 0 5 L 0 35 L ${viewBoxWidth} ${viewBoxHeight}`;
  }

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-[${strokeWidth}px] ${className}`}
    >
      <path d={pathD} /> 
    </svg>
  );
};

export const FrameCard = () => {

  const bracketColorClass = 'stroke-primary'; 
  const bracketStrokeWidth = '1'; 

  return (
    <div className="flex items-center space-x-10">
      <HalfBracketSVG
        type="right"
        className={`${bracketColorClass} w-5 h-20`}
        strokeWidth={bracketStrokeWidth}
      />
      <HalfBracketSVG
        type="left"
        className={`${bracketColorClass} w-5 h-20`} 
        strokeWidth={bracketStrokeWidth}
      />
    </div>
  );
};