import axios, { AxiosResponse } from 'axios';

export interface AddressData {
  documents: {
    address_name: string;
    // Add other properties if needed
  }[];
  // Add other properties if needed
}

const getAddressData = async (addressQuery: string): Promise<AddressData | null> => {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const apiUrl = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
    addressQuery
  )}`;

  try {
    const response: AxiosResponse<AddressData> = await axios.get(apiUrl, {
      headers: { Authorization: `KakaoAK ${apiKey}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching address data:', error);
    return null;
  }
};

export default getAddressData;
