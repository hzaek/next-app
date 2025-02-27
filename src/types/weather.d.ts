interface WeatherData {
    error?:{
      code: number;
      message: string
    }
    location: {
      name: string;
      region: string;
      country: string;
      lat: number;
      lon: number;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
    };
    current: {
      humidity:number;
      temp_c: number;
      temp_f: number;
      is_day: number;
      code: number;
      wind_mph: number;
      wind_kph: number;
      wind_degree: number;
      wind_dir: string;
      pressure_mb: number;
      pressure_in: number;
      precip_mm: number;
      condition: {
        text: string;
        icon: string;

      };
      air_quality: {
        co: number;
        no2: number;
        o3: number;
        so2: number;
        pm2_5: number;
        pm10: number;
        us_epa_index: number;
        gb_defra_index: number;
      };
    };
  }
  