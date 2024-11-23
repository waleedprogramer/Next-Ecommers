type Button3Props = {
  text: string;
  onClick?: () => void; // Add support for the onClick prop
};

function Button3 ({ text, onClick }: Button3Props){
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

export default Button3;
