// utils/kakaoMap.js
export function createKakaoMap(mapContainer) {
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
  
    return new kakao.maps.Map(mapContainer, mapOption);
  }
  
  export function createMarker(map, lat, lng, title) {
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
      map,
      title,
    });
  
    // You can customize the marker icon if needed
    // const markerImage = new kakao.maps.MarkerImage(
    //   'path-to-your-custom-marker-image.png',
    //   new kakao.maps.Size(30, 30)
    // );
    // marker.setImage(markerImage);
  
    return marker;
  }
  