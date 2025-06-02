

export const Services = () => {
  return (
    <div className='relative min-h-[800px] overflow-hidden bg-primary justify-center items-center flex flex-col'> 
      <div className="absolute right-[22rem] top-[68%] transform -translate-y-1/2 -translate-x-3/4 z-10 opacity-50">
        <h1 className='text-[19rem] font-anton'
            style={{
              WebkitTextStroke: '1px var(--color-light)',
              color: 'transparent',
              lineHeight: "0.9",
              userSelect: 'none',
            }}>
            SER<br/>VICES
        </h1>
      </div>

      <img
        src="/LineV3.svg"
        alt="Decorative Line"
        className="absolute object-cover z-30" 
        style={{
          width: '800px', 
          right: 'calc(100% - 28rem)', 
          top: 'calc(70% + 85px)',
          transform: 'translateY(-50%)' 
        }}
      />
      <div className='mx-24 border-t-2 border-light my-38 py-28 flex flex-row justify-between relative z-20'>
        <div className="w-3/4 ">
          <h1 className='font-anton text-5xl text-light'>SERVICES</h1>
        </div>
        <div className="flex flex-col w-full justify-between items-start space-x-12 -pl-24">
          <p className="text-light">
            Web development tools come as browser add-ons or built-in features in web browsers. Most popular web browsers, such as Google Chrome, Firefox, Internet Explorer, Safari, Microsoft Edge and Opera have built-in tools to help web developers, and many additional add-ons can be found in their respective plugin download centers.
          </p>
          <div className="text-7xl font-anton space-y-10 mt-12 text-light">
            <h1>WEB DEVELOPMENT</h1>
            <h1>MOBILE DEVELOPMENT</h1>
            <h1>BACKEND DEVELOPMENT</h1>
          </div>
        </div>
      </div>
    </div>
  );
};