
import { actions } from '../actions/All_actions';

function checkPermission(result) {
  return new Promise((resolve, reject) => {
    if (result.status === "401") {
      result.routes ?
        window.location.assign(`https://dev.accounts.leader.codes/login?des=${result.des}'&routes='${result.routes}`) :
        window.location.assign(`https://dev.accounts.leader.codes/login?des=${result.des}`)
      reject(false)
    }
    resolve(true)
  })
}

export const getAllCitiesByCountry = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GET_CITY_BY_COUNTRY') {
    let countryName = action.payload;
    return fetch(
      // `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=israel&facet=timezone&facet=country`
      // `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=israel&facet=timezone&facet=country&refine.country=Israel `
      `https://api.geonames.org/searchJSON?username=ksuhiyp&country=
       ${countryName}&maxRows=1000&style=SHORT`
      , {
        method: 'GET',
        headers: {
          Authorization: getState().publicReducer.tokenFromCookies,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json()).then((resJson) => {
        console.log("cities", resJson);
        dispatch(actions.setAllCities(resJson))
      }).catch((err) => {
        console.log(err)
      })
  }
  return next(action);
}


export const getAllCountry = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GET_COUNTRY') {
    return fetch(`https://restcountries.eu/rest/v2/all`
      , {
        method: 'GET',
        headers: {
          Authorization: getState().publicReducer.tokenFromCookies,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json()).then((resJson) => {
        console.log("countries", resJson);
        dispatch(actions.setCountry(resJson))
      }).catch((err) => {
        console.log(err)
      })
  }
  return next(action);
}

  // export const getAllCitiesByCountry = ({ dispatch, getState }) => next => action => {
  //   console.log("allCities")
  //   if (action.type === 'GET_CITY_BY_COUNTRY') {
  //      
  //     let countryName = action.payload;
  //      
  //     // return new Promise((resolve, reject) => {
  //     let urlData = `https://finance.leader.codes/api/${countryName}/getAllCitiesByCountry`
  //     $.ajax({
  //       headers: {
  //         Authorization: getState().publicReducer.tokenFromCookies
  //       },
  //       url: urlData,
  //       type: 'GET',
  //       withCradentials: true,
  //       async: false,
  //       contentType: "application/json; charset=utf-8",
  //       dataType: 'json',
  //       success: (data) => {
  //         console.log("data", data)
  //         checkPermission(data).then((ifOk) => {
  //           dispatch(actions.setGetAllBuisness(data))
  //         })
  //       },
  //       error: (err) => {
  //         console.log("error", err)
  //       },
  //     });
  //   }
  //   return next(action);
  //  }