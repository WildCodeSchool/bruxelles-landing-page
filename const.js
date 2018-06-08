export const PROGRAMM_URL = 'http://wildcodeschool-2902314.hs-sites.com/d%C3%A9veloppeur?__hstc=83542985.ae958f26ee4a5f2928577040d10ea65a.1520949375924.1528379128638.1528455777077.66&__hssc=83542985.1.1528455777077&__hsfp=2367772540'
export const COORD = {
  lat: 50.84746759999999,
  lng: 4.359115699999961
}

const GG_MAP_STYLE = [
  {
    featureType: 'landscape',
    stylers: [
      {
        hue: '#FFBB00'
      },
      {
        saturation: 43.400000000000006
      },
      {
        lightness: 37.599999999999994
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'road.highway',
    stylers: [
      {
        hue: '#FFC200'
      },
      {
        saturation: -61.8
      },
      {
        lightness: 45.599999999999994
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'road.arterial',
    stylers: [
      {
        hue: '#FF0300'
      },
      {
        saturation: -100
      },
      {
        lightness: 51.19999999999999
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        hue: '#FF0300'
      },
      {
        saturation: -100
      },
      {
        lightness: 52
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'water',
    stylers: [
      {
        hue: '#0078FF'
      },
      {
        saturation: -13.200000000000003
      },
      {
        lightness: 2.4000000000000057
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'poi',
    stylers: [
      {
        hue: '#00FF6A'
      },
      {
        saturation: -1.0989010989011234
      },
      {
        lightness: 11.200000000000017
      },
      {
        gamma: 1
      }
    ]
  }
]

export const GG_MAP_OPT = {
  fullscreenControl: false,
  keyboardShortcuts: false,
  mapTypeControl: false,
  streetViewControl: false,
  streetViewControlOptions: false,
  streetView: false,
  styles: GG_MAP_STYLE
}