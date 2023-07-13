import React, { useState, ChangeEvent } from 'react';
import getAddressData, { AddressData } from '../utils/getAddressData';

const AddressFinder: React.FC = () => {
  const [addressQuery, setAddressQuery] = useState('');
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [suggestedAddresses, setSuggestedAddresses] = useState<string[]>([]);
  const [isAddressComplete, setIsAddressComplete] = useState(false);

  const handleAddressSearch = async () => {
    const data = await getAddressData(addressQuery);
    setAddressData(data);
    setSuggestedAddresses([]);
    setIsAddressComplete(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressQuery(e.target.value);
    fetchSuggestedAddresses(e.target.value);
    setIsAddressComplete(false);
  };

  const handleAddressSuggestionClick = (suggestion: string) => {
    setAddressQuery(suggestion);
    setSuggestedAddresses([]);
    setIsAddressComplete(false);
  };

  const fetchSuggestedAddresses = async (query: string) => {
    const data = await getAddressData(query);
    if (data) {
      const suggestions = data.documents.map((document) => document.address_name);
      setSuggestedAddresses(suggestions);
    }
  };

  const handleSubmitAddress = async () => {
    if (!addressData || !addressData.documents.length) {
      alert('Please specify the address.');
      return;
    }

    const fullAddress = addressData.documents[0].address_name.toLowerCase();
    const containsCity = fullAddress.includes(addressQuery.trim().toLowerCase());
    const containsStreet = fullAddress.includes(addressQuery.trim().toLowerCase());

    if (!containsCity || !containsStreet) {
      alert('Please provide the complete address.');
      return;
    }

    setIsAddressComplete(true);
    // You can perform any additional actions with the complete address here
  };

  return (
    <div className="w-full">
       <h1 className='mb-5 flex items-center justify-center text-[24px] text-[#49111c]'>행사 예정 지역을 선택해주세요</h1>
      <div className="flex">
       
       
       
       
        <input
          type="text"
          value={addressQuery}
          onChange={handleChange}
          className="w-full mr-2 p-3 border border-gray-300 rounded"
          required
        />
        <button
          onClick={handleAddressSearch}
          className="px-4 py-2 bg-[#49111c] text-white rounded"
        >
          Search
        </button>
      </div>
      {suggestedAddresses.length > 0 && (
        <div className="mt-2">
          <p className="text-gray-500">Suggestions:</p>
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
      {addressData && (
        <div className="mt-4">
          <h2 className="font-semibold">Address:</h2>
          <p>{addressData.documents[0].address_name}</p>
        </div>
      )}
      {addressData && !isAddressComplete && (
        <div className="mt-4">
          <button
            onClick={handleSubmitAddress}
            className="px-4 py-2 bg-[#49111c] text-white rounded"
          >
            Submit Address
          </button>
        </div>
      )}

      <div>
        {/* <h2 className="font-semibold">Chosen Address: <p>{addressData.documents[0].address_name}</p></h2> */}
      </div>
    </div>
  );
};

export default AddressFinder;
