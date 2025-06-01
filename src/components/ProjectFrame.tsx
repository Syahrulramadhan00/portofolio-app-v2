
export const ProjectFrame = ({
  direction = 'left',
  width = 'w-80',
  height = 'h-100',
}) => {
  const borderClasses =
    direction === 'left'
      ? 'rounded-r-full rounded-tl-full'
      : 'rounded-l-full rounded-tr-full';

  return (
    <div
      className={`${width} ${height} ${borderClasses} border border-primary flex items-center justify-center overflow-hidden`}
    >
            <img
              src="https://placehold.co/600x400"
              alt="Content"
              className="w-full h-full object-cover" 
            />
    </div>
  );
};