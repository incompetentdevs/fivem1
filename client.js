SendNUIMessage({
    type: "app/setDisplay",
    data: true
});

RegisterNetEvent("snotify:notify");
AddEventHandler("snotify:notify", function (options) {
    if (options.duration !== undefined) options.duration = options.duration;
    if (options.color !== undefined) options.color = options.color;
    if (options.icon !== undefined) options.icon = options.icon;
    if (options.title !== undefined) options.title = options.title;
    if (options.description !== undefined) options.description = options.description;
    if (options.small_description !== undefined) options.small_description = options.small_description;

    SendNUIMessage({
        type: "CREATE_NOTIFICATION",
        data: options
    });
});