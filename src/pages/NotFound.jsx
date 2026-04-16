import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full flex-1 min-h-[70vh] flex flex-col items-center justify-center bg-[#F9F9F9]">
      <div className="text-center px-6">
        <h1 className="text-7xl md:text-9xl font-bold text-[#8DC83A] mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl text-[#343434] mb-8">
          Sorry, we were unable to find that page
        </p>
        <p className="text-[#343434] text-sm md:text-base">
          Back to{' '}
          <Link to="/" className="text-[#8DC83A] font-bold hover:opacity-80 transition-opacity">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
