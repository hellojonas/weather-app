const openWeatherIconMap = {
  // thunderstorm: 'wi-owm-200',
  // thunderstorm: 'wi-owm-201',
  // thunderstorm: 'wi-owm-202',
  lightning: 'wi-owm-210',
  // lightning: 'wi-owm-211',
  // lightning: 'wi-owm-212',
  // lightning: 'wi-owm-221',
  thunderstorm: 'wi-owm-230',
  // thunderstorm: 'wi-owm-231',
  // thunderstorm: 'wi-owm-232',
  sprinkle: 'wi-owm-300',
  // sprinkle: 'wi-owm-301',
  rain: 'wi-owm-302',
  'rain-mix': 'wi-owm-310',
  // rain: 'wi-owm-311',
  // rain: 'wi-owm-312',
  showers: 'wi-owm-313',
  // rain: 'wi-owm-314',
  // sprinkle: 'wi-owm-321',
  // sprinkle: 'wi-owm-500',
  // rain: 'wi-owm-501',
  // rain: 'wi-owm-502',
  // rain: 'wi-owm-503',
  // rain: 'wi-owm-504',
  // 'rain-mix': 'wi-owm-511',
  // showers: 'wi-owm-520',
  // showers: 'wi-owm-521',
  // showers: 'wi-owm-522',
  'storm-showers': 'wi-owm-531',
  snow: 'wi-owm-600',
  // snow: 'wi-owm-601',
  sleet: 'wi-owm-602',
  // 'rain-mix': 'wi-owm-611',
  // 'rain-mix': 'wi-owm-612',
  // 'rain-mix': 'wi-owm-615',
  // 'rain-mix': 'wi-owm-616',
  // 'rain-mix': 'wi-owm-620',
  // snow: 'wi-owm-621',
  // snow: 'wi-owm-622',
  // showers: 'wi-owm-701',
  smoke: 'wi-owm-711',
  'day-haze': 'wi-owm-721',
  dust: 'wi-owm-731',
  fog: 'wi-owm-741',
  // dust: 'wi-owm-761',
  // dust: 'wi-owm-762',
  'cloudy-gusts': 'wi-owm-771',
  tornado: 'wi-owm-781',
  'day-sunny': 'wi-owm-800',
  // 'cloudy-gusts': 'wi-owm-801',
  // 'cloudy-gusts': 'wi-owm-802',
  // 'cloudy-gusts': 'wi-owm-803',
  cloudy: 'wi-owm-804',
  // tornado: 'wi-owm-900',
  // 'storm-showers': 'wi-owm-901',
  hurricane: 'wi-owm-902',
  'snowflake-cold': 'wi-owm-903',
  hot: 'wi-owm-904',
  windy: 'wi-owm-905',
  hail: 'wi-owm-906',
  'strong-wind': 'wi-owm-957',
  'day-thunderstorm': 'wi-owm-day-200',
  // 'day-thunderstorm': 'wi-owm-day-201',
  // 'day-thunderstorm': 'wi-owm-day-202',
  'day-lightning': 'wi-owm-day-210',
  // 'day-lightning': 'wi-owm-day-211',
  // 'day-lightning': 'wi-owm-day-212',
  // 'day-lightning': 'wi-owm-day-221',
  // 'day-thunderstorm': 'wi-owm-day-230',
  // 'day-thunderstorm': 'wi-owm-day-231',
  // 'day-thunderstorm': 'wi-owm-day-232',
  'day-sprinkle': 'wi-owm-day-300',
  // 'day-sprinkle': 'wi-owm-day-301',
  'day-rain': 'wi-owm-day-302',
  // 'day-rain': 'wi-owm-day-310',
  // 'day-rain': 'wi-owm-day-311',
  // 'day-rain': 'wi-owm-day-312',
  // 'day-rain': 'wi-owm-day-313',
  // 'day-rain': 'wi-owm-day-314',
  // 'day-sprinkle': 'wi-owm-day-321',
  // 'day-sprinkle': 'wi-owm-day-500',
  // 'day-rain': 'wi-owm-day-501',
  // 'day-rain': 'wi-owm-day-502',
  // 'day-rain': 'wi-owm-day-503',
  // 'day-rain': 'wi-owm-day-504',
  'day-rain-mix': 'wi-owm-day-511',
  'day-showers': 'wi-owm-day-520',
  // 'day-showers': 'wi-owm-day-521',
  // 'day-showers': 'wi-owm-day-522',
  'day-storm-showers': 'wi-owm-day-531',
  'day-snow': 'wi-owm-day-600',
  'day-sleet': 'wi-owm-day-601',
  // 'day-snow': 'wi-owm-day-602',
  // 'day-rain-mix': 'wi-owm-day-611',
  // 'day-rain-mix': 'wi-owm-day-612',
  // 'day-rain-mix': 'wi-owm-day-615',
  // 'day-rain-mix': 'wi-owm-day-616',
  // 'day-rain-mix': 'wi-owm-day-620',
  // 'day-snow': 'wi-owm-day-621',
  // 'day-snow': 'wi-owm-day-622',
  // 'day-showers': 'wi-owm-day-701',
  // smoke: 'wi-owm-day-711',
  // 'day-haze': 'wi-owm-day-721',
  // dust: 'wi-owm-day-731',
  'day-fog': 'wi-owm-day-741',
  // dust: 'wi-owm-day-761',
  // dust: 'wi-owm-day-762',
  // tornado: 'wi-owm-day-781',
  // 'day-sunny': 'wi-owm-day-800',
  'day-cloudy-gusts': 'wi-owm-day-801',
  // 'day-cloudy-gusts': 'wi-owm-day-802',
  // 'day-cloudy-gusts': 'wi-owm-day-803',
  'day-sunny-overcast': 'wi-owm-day-804',
  // tornado: 'wi-owm-day-900',
  // hurricane: 'wi-owm-day-902',
  // 'snowflake-cold': 'wi-owm-day-903',
  // hot: 'wi-owm-day-904',
  'day-hail': 'wi-owm-day-906',
  // 'strong-wind': 'wi-owm-day-957',
  'night-alt-thunderstorm': 'wi-owm-night-200',
  // 'night-alt-thunderstorm': 'wi-owm-night-201',
  // 'night-alt-thunderstorm': 'wi-owm-night-202',
  'night-alt-lightning': 'wi-owm-night-210',
  // 'night-alt-lightning': 'wi-owm-night-211',
  // 'night-alt-lightning': 'wi-owm-night-212',
  // 'night-alt-lightning': 'wi-owm-night-221',
  // 'night-alt-thunderstorm': 'wi-owm-night-230',
  // 'night-alt-thunderstorm': 'wi-owm-night-231',
  // 'night-alt-thunderstorm': 'wi-owm-night-232',
  'night-alt-sprinkle': 'wi-owm-night-300',
  // 'night-alt-sprinkle': 'wi-owm-night-301',
  'night-alt-rain': 'wi-owm-night-302',
  // 'night-alt-rain': 'wi-owm-night-310',
  // 'night-alt-rain': 'wi-owm-night-311',
  // 'night-alt-rain': 'wi-owm-night-312',
  // 'night-alt-rain': 'wi-owm-night-313',
  // 'night-alt-rain': 'wi-owm-night-314',
  // 'night-alt-sprinkle': 'wi-owm-night-321',
  // 'night-alt-sprinkle': 'wi-owm-night-500',
  // 'night-alt-rain': 'wi-owm-night-501',
  // 'night-alt-rain': 'wi-owm-night-502',
  // 'night-alt-rain': 'wi-owm-night-503',
  // 'night-alt-rain': 'wi-owm-night-504',
  'night-alt-rain-mix': 'wi-owm-night-511',
  'night-alt-showers': 'wi-owm-night-520',
  // 'night-alt-showers': 'wi-owm-night-521',
  // 'night-alt-showers': 'wi-owm-night-522',
  'night-alt-storm-showers': 'wi-owm-night-531',
  'night-alt-snow': 'wi-owm-night-600',
  'night-alt-sleet': 'wi-owm-night-601',
  // 'night-alt-snow': 'wi-owm-night-602',
  // 'night-alt-rain-mix': 'wi-owm-night-611',
  // 'night-alt-rain-mix': 'wi-owm-night-612',
  // 'night-alt-rain-mix': 'wi-owm-night-615',
  // 'night-alt-rain-mix': 'wi-owm-night-616',
  // 'night-alt-rain-mix': 'wi-owm-night-620',
  // 'night-alt-snow': 'wi-owm-night-621',
  // 'night-alt-snow': 'wi-owm-night-622',
  // 'night-alt-showers': 'wi-owm-night-701',
  // smoke: 'wi-owm-night-711',
  // 'day-haze': 'wi-owm-night-721',
  // dust: 'wi-owm-night-731',
  'night-fog': 'wi-owm-night-741',
  // dust: 'wi-owm-night-761',
  // dust: 'wi-owm-night-762',
  // tornado: 'wi-owm-night-781',
  'night-clear': 'wi-owm-night-800',
  'night-alt-cloudy-gusts': 'wi-owm-night-801',
  // 'night-alt-cloudy-gusts': 'wi-owm-night-802',
  // 'night-alt-cloudy-gusts': 'wi-owm-night-803',
  'night-alt-cloudy': 'wi-owm-night-804',
  // tornado: 'wi-owm-night-900',
  // hurricane: 'wi-owm-night-902',
  // 'snowflake-cold': 'wi-owm-night-903',
  // hot: 'wi-owm-night-904',
  'night-alt-hail': 'wi-owm-night-906',
  // 'strong-wind': 'wi-owm-night-957',
};

export default openWeatherIconMap;
