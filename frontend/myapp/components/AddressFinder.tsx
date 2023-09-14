import React, { useState, ChangeEvent, useEffect } from 'react';
import getAddressData, { AddressData } from '../utils/getAddressData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion';
import { createKakaoMap, createMarker } from '../utils/kakaoMap'; 
//import * as kakao from 'kakao-maps-sdk';
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"

interface AddressFinderProps {
  setEventAddress: React.Dispatch<React.SetStateAction<string>>;
  buttonBackground: string;
}



const AddressFinder: React.FC<AddressFinderProps> = ({ setEventAddress, buttonBackground }, ) => {
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




  // useEffect(() => {
  //   if (selectedAddress && addressData) {
  //     // Create the map container
  //     const mapContainer = document.getElementById('map');
  //     if (mapContainer) {
  //       // Create the map
  //       const map = createKakaoMap(mapContainer);

  //       // Get the coordinates from the address data
  //       const { x, y } = addressData.documents[0];

  //       // Create a marker on the map
  //       createMarker(map, parseFloat(y), parseFloat(x), selectedAddress);

  //       // Set the center of the map to the marker's position
  //       map.setCenter(new kakao.maps.LatLng(parseFloat(y), parseFloat(x)));
  //     }
  //   }
  // }, [selectedAddress, addressData]);



  const [ loading, error ] = useKakaoLoader({
    appkey: "88fa5e46979c83c2b9f77cf0c4da1025", // 발급 받은 APPKEY
    libraries: ["clusterer", "drawing", "services"], // 사용할 라이브러리 목록
     // 추가 옵션
  })


  const { kakao } = window;
	const [address, setAddress] = useState(null); // 현재 좌표의 주소를 저장할 상태
  const [center, setCenter] = useState({ lat: 37.5566803113882, lng: 126.904501286522 });
  


	// const getAddress = (lat: any, lng: any) => {
  //   const geocoder = new kakao.maps.services.Geocoder(); // 좌표 -> 주소로 변환해주는 객체
  //   const coord = new kakao.maps.LatLng(37.5566803113882, 126.904501286522); // 주소로 변환할 좌표 입력
  //   const callback = function (result: any, status: string) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       setAddress(result[0].address.address_name);
  //     }
  //     console.log(result[0].address.address_name)
      
  //   };
  //   geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  // };
  
  // ...
  
 
  // useEffect(() => {
  //   if (center) {
  //     getAddress(center.lat, center.lng);
  //     console.log("This is address: ", address)
  //   }}, []);
  
  


  return (
    <div className="w-full">
      
      <motion.h1 
      initial={{ x: -200}}
      whileInView={{ x: 0}}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className="mb-5 flex items-center justify-center text-lg lg:text-[22px] font-semibold font-kr">
        행사 예정 지역을 선택해주세요
      </motion.h1>
      <motion.div 
      initial={{ x: -200}}
      whileInView={{ x: 0}}
      transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
      className="flex mb-4">
        <input
          type="text"
          value={addressQuery}
          onChange={handleChange}
          className="flex-grow px-3 border border-gray-300 rounded"
          required
          placeholder='주소를 입력'
        />
        <button
        type='submit'
          onClick={handleSubmitAddress}
          className="px-4 md:px-10 py-2 bg-[#6161ff] text-white rounded ml-2"
          style={{ background: buttonBackground }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </motion.div>
      {suggestedAddresses.length > 0 && (
        <div className="mt-2">
          {/* <p className="text-gray-500">Suggestions:</p> */}
          <div className="list-disc pl-4 ">
            <span className='font-bold'>Found Address:</span> 
            {suggestedAddresses.map((suggestion) => (
              <p
                key={suggestion}
                onClick={() => handleAddressSuggestionClick(suggestion)}
                className="cursor-pointer hover:text-blue-500"
              >
                 {suggestion}
              </p>
            ))}
          </div>
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

<Map className="w-full h-full" 
center={{ lat: 37.5566803113882, lng: 126.904501286522 }} 
style={{ height: '300px' }} level={3}
onClick={(_t, mouseEvent) => {
  setCenter({
    lat: mouseEvent.latLng.getLat(),
    lng: mouseEvent.latLng.getLng(),
  });
  console.log("This is lat, lng inside onClick of Map: ", center.lat, center.lng)
  //getAddress(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());
}}
>
				<MapMarker position={{ lat: 37.5566803113882, lng: 126.904501286522 }} />
        <div className='flex items-center'>
        {/* <button style={{ background: buttonBackground }} className="text-[#fff]  rounded my-2 px-5 py-2 font-semibold" onClick={getAddress}>현재 좌표의 주소 얻기</button> */}
        {address && (
				<div className='my-5 '>
					<p> {address}</p>
					
				</div>
			)}
      </div>
			</Map>

			
    </div>
  );
};

export default AddressFinder;
