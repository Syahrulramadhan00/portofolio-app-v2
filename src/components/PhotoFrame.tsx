export const PhotoFrame = () => {
  return (
      <div className="w-75 h-160 rounded-full border border-primary flex items-center justify-center">
        <div className="w-75 h-128 rounded-full border border-primary flex items-center justify-center">
          <div className="w-75 h-96 rounded-full border border-primary">
            <div className="w-75 h-80 rounded-full">
                <div className="relative w-full h-82 rounded-t-full top-6 overflow-hidden">
                    <img src="https://placehold.co/600x400" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};