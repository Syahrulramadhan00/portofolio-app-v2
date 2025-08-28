
export const PointyFrame = ({ direction = 'left', srcImg = 'https://placehold.co/600x400' }) => {

  const roundedClasses = direction === 'left'
    ? 'rounded-tl-full rounded-bl-full' 
    : 'rounded-tr-full rounded-br-full'; 

  const justifyClass = direction === 'left' ? 'justify-end' : 'justify-start';
  return (
    <div>
      <div className={`w-75 h-35 border border-primary flex items-center ${justifyClass} ${roundedClasses}`}>
        <div className={`w-65 h-35 border border-primary flex items-center ${justifyClass} ${roundedClasses}`}>
          <div className={`w-52 h-35 border border-primary flex items-center ${justifyClass} overflow-hidden ${roundedClasses}`}>
            <img
              src={srcImg}
              alt="Content"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};