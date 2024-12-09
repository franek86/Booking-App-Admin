function Loader() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <svg className='w-12 h-12 animate-spin text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2'></circle>
        <path className='opacity-15' fill='currentColor' d='M4 12a8 8 0 018-8v8H4z'></path>
      </svg>
    </div>
  );
}

export default Loader;
