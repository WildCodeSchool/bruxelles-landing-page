export default function loadMeetutGroupEvents (groupName) {
  var eventListElement = document.getElementById('meetup__events')
	
  if (eventListElement) {
    // To write date in french format
    function writeDate (date) {
      var Days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
      var Months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
      return `${Days[date.getDay()]} ${date.getDate()} ${Months[date.getMonth()]}`
    }

    // to Add a emoji in function of event
    function getEventEmoji (event) {
      var eventsEmo = {
        wildvisio: '&#x1F4F9',
        'wildapéro': '&#x1F37A',
        wildbreakfast: '&#x1F950',
        wildtalk: '&#x1F4AC'
      }
      var defaultEventEmo = '&#x1F98C'
      var type = event.name.split(' ')[0].toLowerCase()
      return eventsEmo[type] ? eventsEmo[type] : defaultEventEmo
    }
    
    // Create event item
    function generateEventItem (event) {
      var col = document.createElement('div')
      col.className = "col-xs-12 col-sm"
      var item = document.createElement('a')
      item.className = "meetup__event__item"
      item.href = event.link
      var content = `
        <div class="meetup__event__item__emoji">${getEventEmoji(event)}</div>
        <div class="meetup__event__item__content">
          <span class="meetup__event__item__name"> ${event.name} </span>
          <span class="meetup__event__item__date"> à ${event.local_time} </span>
        </div>
       `
      item.innerHTML = content
      col.appendChild(item)
      return col
    }
    
    // CallBack with 5 next meetup events
    window.myJsonpCallback = function(res) {
      if (res.data && res.data.length > 0) {
        eventListElement.innerHTML = ''
        var count = 0
        var elementByDay = {}
        res.data.forEach(function (event) {
          if (count < 4) {
            if (elementByDay[event.local_date]) {
              elementByDay[event.local_date].push(event)
            } else {
              count++
              if (count < 4) {
                elementByDay[event.local_date] = [event]
              }
            }
          }
        })

    
        Object.values(elementByDay).forEach(function (day, index) {
          var dateElement = document.createElement('div')
          var date = new Date(day[0].time)
          dateElement.className = `meetup__days__events__date ${index === 0 ? 'first': ''}`
          dateElement.innerHTML = `${writeDate(date)} :`
          
          var dayElement = document.createElement('div')
          dayElement.className = "meetup__days__events__container row"
          day.forEach(function (event) {
            dayElement.appendChild(generateEventItem(event))
          })
          
          eventListElement.appendChild(dateElement)
          eventListElement.appendChild(dayElement)
        })
      } else {
        eventListElement.innerHTML = '&#x1F3DC Aucun événements à venir'
      } 
    }
    
    // Current date in in ISO 8601 format without a time zone specified
    // See https://www.meetup.com/fr-FR/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
    var now = new Date()
    now.setUTCHours(0,0,0,0)
    now = now.toISOString().slice(0, -1)
    
    // Number of results to return. Must be an integer greater than or equal to 1.
    var numberOfresult = 30
    
    // Build url
    var url = `https://api.meetup.com/${groupName}/events?callback=myJsonpCallback&no_earlier_than=${now}&page=${numberOfresult}`
    
    // Create script element for load events from meetup api
    var scriptEl = document.createElement('script')
    scriptEl.setAttribute('src', url)
    document.body.appendChild(scriptEl)
  }
}
