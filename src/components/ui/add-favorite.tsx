import { useState } from "react";
import { HeartIcon } from "lucide-react";

function AddFavorite() {
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div className='bg-white rounded-full absolute top-2 right-2 p-1 cursor-pointer'>
      <div onClick={handleToogle}>{toogle ? <HeartIcon size={16} fill='#000' /> : <HeartIcon size={16} />}</div>
    </div>
  );
}

export default AddFavorite;
