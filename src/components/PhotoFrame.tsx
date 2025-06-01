export const PhotoFrame = () => {
  return (
      <div className="w-65 h-140 rounded-full border border-primary flex items-center justify-center">
        <div className="w-65 h-110 rounded-full border border-primary flex items-center justify-center">
          <div className="w-65 h-82 rounded-full border border-primary">
            <div className="w-65 h-68 rounded-full">
                <div className="relative w-full h-68 rounded-t-full top-6 overflow-hidden">
                    <img src="https://placehold.co/600x400" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};