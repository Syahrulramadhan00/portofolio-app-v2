
export const ProjectFrame = ({
  direction = 'left',
  width = 'w-80',
  height = 'h-100',
  imageUrl =""
}) => {
  const borderClasses =
    direction === 'left'
      ? 'rounded-3xl lg:rounded-none lg:rounded-r-full lg:rounded-tl-full'
      : 'rounded-3xl lg:rounded-none lg:rounded-l-full lg:rounded-tr-full';

  return (
    <div
      className={`${width} ${height} ${borderClasses} border border-primary flex items-center justify-center overflow-hidden`}
    >
            <img
              src={imageUrl}
              alt="Content"
              className="w-full h-full object-cover" 
            />
    </div>
  );
};