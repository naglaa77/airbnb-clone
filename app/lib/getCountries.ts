import countries from "world-countries";


const getCountries = countries.map((item) => ({
    value: item.cca2,
    label: item.name.common,
    flag: item.flag,
    latLang: item.latlng  ,
    region: item.region
}));

export const useCountries = () => {
    const getAllCountries = () => getCountries;

    const getCountryByValue = (value:string) => {
        return getCountries.find((item) => item.value === value);
    }
    return {getAllCountries, getCountryByValue}
}
