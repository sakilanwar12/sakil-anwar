
const PreLoader = () => {

  return (
    <div className="fixed inset-0 z-50  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50 animate-pulse"></div>
      
      <div className="text-center z-10">
        {/* Animated name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider">
            <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>M</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>D</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>.</span>
            <span className="inline-block mx-4"></span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>S</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>A</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.5s'}}>K</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.6s'}}>I</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.7s'}}>L</span>
            <span className="inline-block mx-4"></span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.8s'}}>A</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.9s'}}>N</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '1.0s'}}>W</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '1.1s'}}>A</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '1.2s'}}>R</span>
          </h1>
        </div>
        
        {/* Loading animation */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
        
      </div>
    </div>
  );
};

export default PreLoader;