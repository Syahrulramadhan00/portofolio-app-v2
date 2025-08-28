export const PhotoFrame = () => {
  return (
      <div className="w-65 h-140 rounded-full border border-primary flex items-center justify-center">
        <div className="w-65 h-110 rounded-full border border-primary flex items-center justify-center">
          <div className="w-65 h-82 rounded-full border border-primary">
            <div className="w-65 h-68 rounded-full">
                <div className="flex w-full h-full rounded-t-full bg-gradient-to-br from-gray-800 via-gray-400 to-white">
                    <img src="/img/profile2.png" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};