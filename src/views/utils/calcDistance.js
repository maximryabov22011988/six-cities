const convertToRadian = (degrees) => {
  const DEGREES_IN_RADIAN = 180;
  return (degrees * Math.PI) / DEGREES_IN_RADIAN;
};

const calcDistance = (lat1, lon1, lat2, lon2) => {
  const EARTH_RADIUS = 6371;

  const dLat = convertToRadian(lat2 - lat1);
  const dLon = convertToRadian(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(convertToRadian(lat1)) * Math.cos(convertToRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const angle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS * angle; // km
};

export default calcDistance;
