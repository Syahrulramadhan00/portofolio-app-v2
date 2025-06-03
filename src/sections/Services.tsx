

export const Services = () => {
  return (
    <div className='relative min-h-screen h-full overflow-visible bg-primary flex flex-col'>
      <div className="absolute right-[34rem] top-[65%] transform -translate-y-1/2 -translate-x-3/4 z-10 opacity-50">
        <h1 className='text-[16rem] font-anton'
            style={{
              WebkitTextStroke: '2px var(--color-light)',
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
      <div id="services" className='mx-24 border-t-2 border-light my-18 py-18 flex flex-row justify-between relative z-20'>
        <div className="w-3/4">
          <h1 className='font-anton text-5xl text-light'>SERVICES</h1>
        </div>
        <div className="flex flex-col w-full justify-between items-start space-x-12 -pl-24">
          <p className="text-light">
        Forget the old 'just frontend' label. We're talking Web Development that blends cutting-edge frontend techniques with a thoughtful design approach, creating websites that are both powerful and a pleasure to use for the Indonesian market. Mobile Development is no longer a separate entity, but an extension of creating seamless digital experiences across all devices. And yes, the backend isn't so scary anymore! Backend Development is now part of the arsenal, ensuring that the foundations are as solid and well-architected as the interfaces we craft. Consider it a complete digital toolkit, wielded by someone who appreciates both the elegance of code and the impact of good design
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