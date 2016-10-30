export interface IBuilding {
  $key?: string,
  buildingAddress?: IBuildingAddress,
  code?: string,
  name?: string,
  type?: 'OFFICES' | 'PARKING'
}

export interface IBuildingAddress {
  city?: string,
  country?: string,
  postalCode?: string,
  streetAddress?: string
  gpsCoordinates: IGpsCoordinates
}

export interface IGpsCoordinates {
  latitude: number,
  longitude: number
}