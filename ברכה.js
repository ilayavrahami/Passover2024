const blessings = [
    "שיהיה חג הפסח שלך מלא בשלום ואושר!",
    "מאחל לך עונת פסח מבורכת וחגיגית!",
    "יהי רצון שרוח חג הפסח תמלא את לבך באהבה ושמחה!",
    "שולח לך איחולים חמים לחגיגת פסח משמעותית!" ,
    "שיהיה חג בלי טילים "
];

function changeBlessing() {
    const randomIndex = Math.floor(Math.random() * blessings.length);
    document.getElementById("blessing").textContent = blessings[randomIndex]
    }
