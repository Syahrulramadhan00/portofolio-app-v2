
export const PointyFrame = ({ direction = 'left' }) => {

  const roundedClasses = direction === 'left'
    ? 'rounded-tl-full rounded-bl-full' 
    : 'rounded-tr-full rounded-br-full'; 

  const justifyClass = direction === 'left' ? 'justify-end' : 'justify-start';
  return (
    <div>
      <div className={`w-70 h-25 border border-primary flex items-center ${justifyClass} ${roundedClasses}`}>
        <div className={`w-60 h-25 border border-primary flex items-center ${justifyClass} ${roundedClasses}`}>
          <div className={`w-52 h-25 border border-primary flex items-center ${justifyClass} overflow-hidden ${roundedClasses}`}>
            <img
              src="https://placehold.co/600x400"
              alt="Content"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};