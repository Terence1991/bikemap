export const RESULTS_PER_PAGE = 6;

const actionsTypes = {
  setAllStations: 'SET_ALL_STATIONS',
  onSearchChange: 'ON_SEARCH_CHANGE',
  onTermSubmit: 'ON_TERM_SUMBIT',
  resetSearch: 'RESET_SEARCH',
  nextPage: 'NEXT_PAGE',
  previousPage: 'PREVIOUS_PAGE'
}

const filterResults = (allStations, term) => {
  return allStations.filter(({ stationName }) => stationName.toLowerCase().includes(term));
}

const paginationResults = (stations, currentPage) => {
  return stations.slice(currentPage, currentPage + RESULTS_PER_PAGE);
}

export const resetSearch = () => {
  return { 
    type: actionsTypes.resetSearch
  }
}

export const setAllStations = (station) => {
  return {
    type: actionsTypes.setAllStations,
    payload: station
  }
}

export const onSearchChange = (term) => {
  return {
    type: actionsTypes.onSearchChange,
    payload: term
  }
}

export const onTermSubmit = (term) => {
  return {
    type: actionsTypes.onTermSubmit,
    payload: term
  }
}

export const nextPage = () => {
  return {
    type: actionsTypes.nextPage
  }
}

export const previousPage = () => {
  return {
    type: actionsTypes.previousPage
  }
}

const INITIAL_STATE = {
  allStations: [], 
  stations: [], 
  searchTerm: '',
  totalStations: 0,
  currentPage: 0,
  paginationResults: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.setAllStations: {
      return { 
        ...state,
        totalStations: action.payload.length,
        allStations: action.payload 
      }
    }
    case actionsTypes.onSearchChange: {
      const { allStations } = state;
      const searchTerm = action.payload;

      if (!searchTerm) {
        return {
          ...state,
          searchTerm: INITIAL_STATE.searchTerm,
          stations: INITIAL_STATE.stations,
          currentPage: INITIAL_STATE.currentPage
        }
      }
      const stations = filterResults(allStations, searchTerm);
      return {
        ...state,
        searchTerm,
        stations,
        currentPage: INITIAL_STATE.currentPage,
        paginationResults: paginationResults(
          stations,
          INITIAL_STATE.currentPage
        )
      }
    }
    case actionsTypes.onTermSubmit: {
      const { allStations } = state;
      const stations = filterResults(allStations, action.payload);

      return {
        ...state,
        stations,
        currentPage: INITIAL_STATE.currentPage,
        paginationResults: paginationResults(
          stations,
          INITIAL_STATE.currentPage
        )
      }
    }
    case actionsTypes.resetSearch: {
      return {
        ...state, 
        stations: INITIAL_STATE.stations,
        searchTerm: INITIAL_STATE.searchTerm
      }
    }
    case actionsTypes.nextPage: {
      const { currentPage, stations } = state;
      const nextPage = currentPage + 1;
      return {
        ...state,
        currentPage: nextPage,
        paginationResults: paginationResults(stations, nextPage)
      }
    }
    case actionsTypes.previousPage: {
      const { currentPage, stations } = state;
      const prevPage = Math.max(0, currentPage - 1);
      return {
        ...state,
        currentPage: prevPage,
        paginationResults: paginationResults(stations, prevPage)
      }
    }
    default: {
      return state;
    }
  }
}
  