RegisterNetEvent("snotify:notify");
AddEventHandler("snotify:notify", function (options) {
    SendNUIMessage({
        type: "CREATE_NOTIFICATION",
        data: options
    });
});