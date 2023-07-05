const PLANNING_CONST = {
  ARRIVAL: {
    ICON: 'pi pi-flag',
    COLOR: '#961b19',
  },
  DEPART: {
    ICON: 'pi pi-car',
    COLOR: '#591300',
  },
  BAR: {
    ICON: 'fa-solid fa-beer-mug-empty',
    COLOR: '#000000'
  },
  CHECKIN: {
    ICON: 'pi pi-home',
    COLOR: '#954200',
  },
  SIGHTSEEING: {
    ICON: 'pi pi-camera',
    COLOR: 'rgb(255, 204, 0)',
  },
  FOOD: {
    ICON: 'fa-solid fa-utensils',
    COLOR: "#D27400",
  }
}

export const firstDayEvents = [
  {
    status: 'Abfahrt',
    time: '10 Uhr',
    icon: PLANNING_CONST.DEPART.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.DEPART.COLOR,
  },
  {
    status: 'Ankunft in Pilsen',
    time: '15 Uhr',
    icon: PLANNING_CONST.ARRIVAL.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.ARRIVAL.COLOR,
  },
  {
    status: 'Check-in Apartsee',
    time: 'Frei',
    icon: PLANNING_CONST.CHECKIN.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.CHECKIN.COLOR,
  },
  {
    status: 'Freizeit (See)',
    time: 'Bis 18 Uhr',
    icon: PLANNING_CONST.SIGHTSEEING.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.SIGHTSEEING.COLOR,
  },
  {
    status: 'Restaurant',
    time: '19 Uhr',
    icon: '',
    secondaryIcon: PLANNING_CONST.FOOD.ICON,
    color: PLANNING_CONST.FOOD.COLOR
  },
  {
    status: 'Bar',
    time: '21 Uhr',
    icon: '',
    secondaryIcon: PLANNING_CONST.BAR.ICON,
    color: PLANNING_CONST.BAR.COLOR,
  }
]

export const secondDayEvents = [
  {
    status: 'Frühstück',
    time: '7:30-9:30',
    icon: '',
    secondaryIcon: PLANNING_CONST.FOOD.ICON,
    color: PLANNING_CONST.FOOD.COLOR
  },
  {
    status: 'Besichtigung der Brauerei',
    time: '11:30 Uhr',
    icon: PLANNING_CONST.SIGHTSEEING.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.SIGHTSEEING.COLOR,
  },
  {
    status: 'Abfahrt',
    time: '14 Uhr',
    icon: PLANNING_CONST.DEPART.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.DEPART.COLOR,
  },
  {
    status: 'Ankunft in Prag',
    time: '16 Uhr',
    icon: PLANNING_CONST.ARRIVAL.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.ARRIVAL.COLOR,
  },
  {
    status: 'Check-in Ibis Mala Strana',
    time: '16 Uhr',
    icon: PLANNING_CONST.CHECKIN.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.CHECKIN.COLOR,
  },
  {
    status: 'Sightseeing',
    time: 'Frei',
    icon: PLANNING_CONST.SIGHTSEEING.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.SIGHTSEEING.COLOR,
  },
  {
    status: 'Abendprogramm',
    time: '19 Uhr',
    icon: '',
    secondaryIcon: PLANNING_CONST.BAR.ICON,
    color: PLANNING_CONST.BAR.COLOR,
  }
]

export const thirdDayEvents = [
  {
    status: 'Frühstück',
    time: '6:30-10:30',
    icon: '',
    secondaryIcon: PLANNING_CONST.FOOD.ICON,
    color: PLANNING_CONST.FOOD.COLOR
  },
  {
    status: 'Sightseeing',
    time: 'Frei',
    icon: PLANNING_CONST.SIGHTSEEING.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.SIGHTSEEING.COLOR,
  },
  {
    status: 'Atomuhr',
    time: '16 Uhr',
    icon: '',
    secondaryIcon: PLANNING_CONST.BAR.ICON,
    color: PLANNING_CONST.BAR.COLOR,
  },
  {
    status: 'Abendprogramm',
    time: '19 Uhr',
    icon: '',
    secondaryIcon: PLANNING_CONST.BAR.ICON,
    color: PLANNING_CONST.BAR.COLOR,
  }
]

export const fourthDayEvents = [
  {
    status: 'Frühstück',
    time: '6:30-10:30',
    icon: '',
    secondaryIcon: PLANNING_CONST.FOOD.ICON,
    color: PLANNING_CONST.FOOD.COLOR
  },
  {
    status: 'Check-Out Ibis Mala Strana',
    time: '11 Uhr',
    icon: PLANNING_CONST.CHECKIN.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.CHECKIN.COLOR,
  },
  {
    status: 'Sightseeing',
    time: 'Frei',
    icon: PLANNING_CONST.SIGHTSEEING.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.SIGHTSEEING.COLOR,
  },
  {
    status: 'Abfahrt',
    time: '13:30-15:30',
    icon: PLANNING_CONST.DEPART.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.DEPART.COLOR,
  },
  {
    status: 'Ankunft in Schifferstadt',
    time: '18:30-20:30',
    icon: PLANNING_CONST.ARRIVAL.ICON,
    secondaryIcon: '',
    color: PLANNING_CONST.ARRIVAL.COLOR,
  },
]
