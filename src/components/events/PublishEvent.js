export function PublishEvent(source){
    var appEvent ={ 
        source: source,
        timestamp: new Date().toISOString(),
        position:{},
        platform:{},
        user:{}
    };
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position)=>{
            appEvent.position.latitude = position.coords.latitude;
            appEvent.position.longitude = position.coords.longitude;
            appEvent.position.altitude = position.coords.altitude;
            appEvent.position.accuracy = position.coords.accuracy;
            appEvent.position.altitudeAccuracy = position.coords.altitudeAccuracy;
            appEvent.position.heading = position.coords.heading;
            appEvent.position.speed = position.coords.speed;
            appEvent.platform.userAgent = navigator.userAgent;
            appEvent.platform.platform = navigator.platform;
            appEvent.platform.vendor = navigator.vendor;
            appEvent.platform.language = navigator.language;
            appEvent.platform.onLine = navigator.onLine;
            appEvent.platform.cookieEnabled = navigator.cookieEnabled;
            appEvent.platform.product = navigator.product;
            appEvent.platform.productSub = navigator.productSub;     
            appEvent.platform.appVersion = navigator.appVersion;
            appEvent.user.sessionId = window.sessionId;

            console.log("appEvent",JSON.stringify(appEvent));
            try{
                fetch("https://localhost:8443/kafka/v1/event",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(appEvent)
                }).then((response)=>{
                    console.log("Response",response);
                }).catch((error)=>{
                    console.log("Error",error);
                });
            } catch (error){
                console.log("Error",error);
            } finally {
                console.log("Finally");
            }
        },geoLocationFailure,{timeout:10000});
        //console.log("Position",position);
    }
}

// const geoLocationSuccess = (position) => {
//     //appEvent.latitude = position.coords.latitude;
//     //appEvent.longitude = position.coords.longitude;
//     console.log("Geolocation Success", position);
//     return JSON.stringify(position);
// }

const geoLocationFailure = (error) => {
    console.log("Geolocation Failure", error);
}