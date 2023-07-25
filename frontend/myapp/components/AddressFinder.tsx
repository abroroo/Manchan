import React, { useState, ChangeEvent } from 'react';
import getAddressData, { AddressData } from '../utils/getAddressData';

interface AddressFinderProps {
  setEventAddress: React.Dispatch<React.SetStateAction<string>>;
  buttonBackground: string;
}

const AddressFinder: React.FC<AddressFinderProps> = ({ setEventAddress, buttonBackground }) => {
  const [addressQuery, setAddressQuery] = useState('');
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [suggestedAddresses, setSuggestedAddresses] = useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [isAddressComplete, setIsAddressComplete] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setAddressQuery(query);
    fetchSuggestedAddresses(query);
    setIsAddressComplete(false);
    setSelectedAddress('');
  };

  const handleAddressSuggestionClick = (suggestion: string) => {
    setAddressQuery(suggestion);
    setSuggestedAddresses([]);
    setIsAddressComplete(true);
    setSelectedAddress(suggestion);
  };

  const fetchSuggestedAddresses = async (query: string) => {
    const data = await getAddressData(query);
    if (data) {
      const suggestions = data.documents.map((document) => {
        const { address_name } = document;
        return address_name;
      });
      setSuggestedAddresses(suggestions);
    }
  };

  const handleSubmitAddress = () => {
    if (selectedAddress === '') {
      alert('Please select an address from the suggestions.');
      return;
    }

    setEventAddress(selectedAddress);
    setIsSubmitClicked(true);
    setIsAddressComplete(true);
    // You can perform any additional actions with the complete address here
    console.log('Selected Address:', selectedAddress);
  };

  return (
    <div className="w-full">
      <h1 className="mb-5 flex items-center justify-center text-[24px] text-[#49111c]">
        행사 예정 지역을 선택해주세요
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={addressQuery}
          onChange={handleChange}
          className="flex-grow p-3 border border-gray-300 rounded"
          required
          placeholder='주소를 입력'
        />
        <button
          onClick={handleSubmitAddress}
          className="px-4 md:px-10 py-2 bg-[#49111c] text-white rounded ml-2"
          style={{ background: buttonBackground }}
        >
          확인
        </button>
      </div>
      {suggestedAddresses.length > 0 && (
        <div className="mt-2">
          {/* <p className="text-gray-500">Suggestions:</p> */}
          <ul className="list-disc pl-4">
            {suggestedAddresses.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => handleAddressSuggestionClick(suggestion)}
                className="cursor-pointer hover:text-blue-500"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
      {isAddressComplete && isSubmitClicked && (
        <div className="mt-4 flex">
          <h2 className="font-semibold mr-1">행사 주소: </h2>
          <p className='underline decoration-solid underline-offset-4'>{selectedAddress}</p>
        </div>
      )}
      {isSubmitClicked && (
        <div className="mt-4">
          <p className="font-semibold text-[green]">주소 확인이 완료되었습니다!</p>
        </div>
      )}
    </div>
  );
};

export default AddressFinder;
