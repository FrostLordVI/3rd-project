

let data=[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]



const workHours = document.querySelector('#workHours')
const playHours = document.querySelector('#playHours')
const studyHours = document.querySelector('#studyHours')
const exerciseHours = document.querySelector('#exerciseHours')
const socialHours = document.querySelector('#socialHours')
const selfCareHours=document.querySelector('#selfCareHours')

const lastWorkHours = document.querySelector('#lastWorkHours')
const lastPlayHours = document.querySelector('#lastPlayHours')
const lastStudyHours = document.querySelector('#lastStudyHours')
const lastExerciseHours = document.querySelector('#lastExerciseHours')
const lastSocialHours = document.querySelector('#lastSocialHours')
const lastSelfCareHours = document.querySelector('#lastSelfCareHours')

const array = [workHours,playHours,studyHours,exerciseHours,socialHours,selfCareHours]

const array2 = [lastWorkHours,lastPlayHours,lastStudyHours,lastExerciseHours,lastSocialHours,lastSelfCareHours]




for(i=0;i<6;i++){
    array[i].innerHTML=data[i].timeframes.weekly.current+`hrs`
    array2[i].innerHTML=`Last Week - ${data[i].timeframes.weekly.previous}hrs`
    }



const daily = document.querySelector('#daily')
daily.addEventListener('click',dailyFunction)

function dailyFunction(){

    for(i=0;i<6;i++){
        array[i].innerHTML=data[i].timeframes.daily.current+'hrs'
        array2[i].innerHTML=`Last Week - ${data[i].timeframes.daily.previous}hrs`
        }

    daily.classList.add('chosen')
    weekly.classList.remove('chosen')
    monthly.classList.remove('chosen')
}


const monthly = document.querySelector('#monthly')
monthly.addEventListener('click',monthlyFunction)

function monthlyFunction(){
   
    for(i=0;i<6;i++){
        array[i].innerHTML=data[i].timeframes.monthly.current+'hrs'
        array2[i].innerHTML=`Last Week - ${data[i].timeframes.monthly.previous}hrs`
        }

    monthly.classList.add('chosen')
    weekly.classList.remove('chosen')
    daily.classList.remove('chosen')
}



const weekly = document.querySelector('#weekly')
weekly.addEventListener('click',weeklyFunction)

function weeklyFunction(){

    for(i=0;i<6;i++){
        array[i].innerHTML=data[i].timeframes.weekly.current+'hrs'
        array2[i].innerHTML=`Last Week - ${data[i].timeframes.weekly.previous}hrs`
        }

weekly.classList.add('chosen')
daily.classList.remove('chosen')
monthly.classList.remove('chosen')
}

