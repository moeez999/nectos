const CreateCard = ({ handleAddCardDetails }) => {
  return (
    <div className="rounded-[28px]  bg-[#EFFAF5] p-5 flex flex-col items-center justify-center h-48 w-80">
      <div
        className="bg-[#1DD588] bg-opacity-40 rounded-full p-4"
        onClick={handleAddCardDetails}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20.6241C11.3527 20.6241 10.8281 20.0996 10.8281 19.4522V4.54785C10.8281 3.90051 11.3527 3.37598 12 3.37598C12.6473 3.37598 13.1719 3.90051 13.1719 4.54785V19.4522C13.1719 20.0996 12.6473 20.6241 12 20.6241Z"
            fill="black"
          />
          <path
            d="M19.4522 13.1719H4.54785C3.90051 13.1719 3.37598 12.6473 3.37598 12C3.37598 11.3527 3.90051 10.8281 4.54785 10.8281H19.4522C20.0996 10.8281 20.6241 11.3527 20.6241 12C20.6241 12.6473 20.0996 13.1719 19.4522 13.1719Z"
            fill="black"
          />
        </svg>
      </div>
      <h2 className="text-lg font-medium text-[#1B1E28] mt-4">
        Create New Card
      </h2>
    </div>
  );
};

export default CreateCard;
