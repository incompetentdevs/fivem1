RegisterCommand("snotify_example_lua", function()
    local options = {
        duration = 10000,
        color = 'red',
        icon = 'ExclamationTriangleIcon',
        title = 'Mass DV',
        description = 'A mass DV will occur in 10 seconds.'
    }

    TriggerEvent("snotify:notify", options)
end, false)
