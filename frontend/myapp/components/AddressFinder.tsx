import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMapLocationDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"
import { set } from 'date-fns';

interface AddressFinderProps {
  setEventAddress: React.Dispatch<React.SetStateAction<string>>;
  buttonBackground: string;
}

const AddressFinder: React.FC<AddressFinderProps> = ({ setEventAddress, buttonBackground }) => {
  const [ loading, error ] = useKakaoLoader({
    appkey: "88fa5e46979c83c2b9f77cf0c4da1025",
    libraries: ["clusterer", "drawing", "services"],
  });

  const [addressQuery, setAddressQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<any | null>(null);
  const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 37.5566803113882, lng: 126.904501286522 });
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

 
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setAddressQuery(query);

    const ps = new window.kakao.maps.services.Geocoder();
    ps.addressSearch(query, placesSearchCB);
  };

  const placesSearchCB = (data: any, status: any, pagination: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      // No need to extract only address names, keep the entire data
      setSearchResults(data);
    }
  };
  
  
  
  const handleAddressSelect = (place: any, index: number) => {
    setSelectedItemIndex(index);
    setSelectedAddress(place); // Pass the entire place object
    console.log("This is selectedAddress: ", selectedAddress)
    setCenter({
      lat: place.y,
      lng: place.x,
    });
      setEventAddress(place.address_name);

  };
  
  
  const handleSubmitAddress = () => {
    if (selectedAddress) {
      const { lat, lng } = selectedAddress; // Extract lat and lng
      const exactAddress = `${lat}, ${lng}`; // Format the address as needed
      // console.log('Selected Address:', exactAddress);
      setEventAddress(selectedAddress.address_name);
      
    } else {
      alert('Please select an address from the suggestions.');
    }
  };
  

  const handleMapClick = (map: any, mouseEvent: any) => {
    // Create a new InfoWindow object
    const newInfoWindow = new window.kakao.maps.InfoWindow({
      content: addressQuery, // Use addressQuery here or the appropriate variable
      position: selectedAddress.latLng,
    });
  
    // setInfoWindow(newInfoWindow); // Uncomment this if needed
  };
  

  return (
    <div className="w-full">
      <motion.h1
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="mb-5 flex items-center justify-center text-[0.9rem] lg:text-[22px] font-semibold font-kr"
      >
        <FontAwesomeIcon icon={faMapLocationDot} style={{ color: buttonBackground }} className='w-9 h-9 mr-2' /> 행사 예정 지역을 선택해주세요
      </motion.h1>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className="flex mb-4"
      >
        <input
          type="text"
          value={addressQuery}
          onChange={handleAddressChange}
          className="flex-grow w-[100%] h-[40px] mt-1 text-[#49111c] my-0 focus:outline-none pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c]"
          required
          placeholder='주소를 입력하세요'
        />
        
      </motion.div>

      <div className="search-results">
  {searchResults.length > 0 && (
    <ul className='flex flex-wrap '>
      {searchResults.slice(0, 4).map((place, index) => (
     <motion.li
     initial={{ scale: 1 }}
     whileTap={{ scale: 1.1 }}
     transition={{ duration: 0.2, type: 'spring', bounce: 0.25 }}
     key={`${index}-${place.address_name}`} // Use a unique key
     onClick={() => handleAddressSelect(place, index)}
     className='search-result cursor-pointer shadow-sm p-2 border-b hover:bg-slate-50 mb-2 md:mb-3 md:mx-[2px] w-full md:w-[49%] rounded-lg'
     style={selectedItemIndex === index ? { background: buttonBackground, color: '#fff', fontWeight: 'bold' } : {}}
  >
     <FontAwesomeIcon style={{ color: buttonBackground }} icon={faLocationDot} /> {place.address_name}
  </motion.li>
  
     
      ))}
    </ul>
  )}
</div>




{selectedAddress && (
  <Map
    className="w-full h-[200px] md:h-[300px] border"
    center={center}
    level={3}
    //onClick={handleMapClick}
    onClick={(_target, mouseEvent) => {
      setCenter({lat: mouseEvent.latLng.getLat(), lng: mouseEvent.latLng.getLng()})
      handleMapClick
    }}
  >
    <MapMarker
      position={center}
    />
  </Map>
)}

    </div>
  );
};

export default AddressFinder;






// onClick={(_t, mouseEvent) => {
//   setCenter({
//     lat: mouseEvent.latLng.getLat(),
//     lng: mouseEvent.latLng.getLng(),
//   });
//   console.log("This is lat, lng inside onClick of Map: ", center.lat, center.lng)
//   //getAddress(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());
// }}


// const [addressData, setAddressData] = useState<AddressData | null>(null);
// const [suggestedAddresses, setSuggestedAddresses] = useState<string[]>([]);
// const [selectedAddress, setSelectedAddress] = useState<string>('');
// const [isAddressComplete, setIsAddressComplete] = useState(false);
// const [isSubmitClicked, setIsSubmitClicked] = useState(false);

// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//   const query = e.target.value;
//   setAddressQuery(query);
//   fetchSuggestedAddresses(query);
//   setIsAddressComplete(false);
//   setSelectedAddress('');
// };

// const handleAddressSuggestionClick = (suggestion: string) => {
//   setAddressQuery(suggestion);
//   setSuggestedAddresses([]);
//   setIsAddressComplete(true);
//   setSelectedAddress(suggestion);
// };

// const fetchSuggestedAddresses = async (query: string) => {
//   const data = await getAddressData(query);
//   if (data) {
//     const suggestions = data.documents.map((document) => {
//       const { address_name } = document;
//       return address_name;
//     });
//     setSuggestedAddresses(suggestions);
//   }
// };






// {suggestedAddresses.length > 0 && (
//   <div className="mt-2">
//     {/* <p className="text-gray-500">Suggestions:</p> */}
//     <div className="list-disc pl-4 ">
//       <span className='font-bold'>Found Address:</span> 
//       {suggestedAddresses.map((suggestion) => (
//         <p
//           key={suggestion}
//           onClick={() => handleAddressSuggestionClick(suggestion)}
//           className="cursor-pointer hover:text-blue-500"
//         >
//            {suggestion}
//         </p>
//       ))}
//     </div>
//   </div>
// )}
// {isAddressComplete && isSubmitClicked && (
//   <div className="mt-4 flex">
//     <h2 className="font-semibold mr-1">행사 주소: </h2>
//     <p className='underline decoration-solid underline-offset-4'>{selectedAddress}</p>
//   </div>
// )}
// {isSubmitClicked && (
//   <div className="mt-4">
//     <p className="font-semibold text-[green]">주소 확인이 완료되었습니다!</p>
//   </div>
// )}















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
  
  






//   const handleMapClick = (map: any, mouseEvent: any) => {
//     // Create a new InfoWindow object
//     const newInfoWindow = new window.kakao.maps.InfoWindow({
//       content: address,
//       position: mouseEvent.latLng,
//     });

//    // setInfoWindow(newInfoWindow);
//   };



// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//   const query = e.target.value;
//   setAddressQuery(query);
//   setAddress(query)
// };

