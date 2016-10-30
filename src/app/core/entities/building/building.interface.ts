export interface IBuilding {
  $key?: string,
  buildingAddress?: IBuildingAddress,
  code?: string,
  name?: string,
  type?: 'OFFICES' | 'PARKING',
  occupants?: string,
  buildingOpeningHoursList?: IBuildingOpeningHoursList
}

export interface IBuildingAddress {
  city?: string,
  country?: string,
  postalCode?: string,
  streetAddress?: string
  gpsCoordinates?: IGpsCoordinates
}

export interface IGpsCoordinates {
  latitude?: number,
  longitude?: number
}

export interface IBuildingOpeningHoursList {
  openingHours?: any
}

export interface IOpeningHours {
  daysOfWeek?: any,
  startTime?: string,
  endTime?: string
}

export interface IDaysOfWeek {

}