RegisterCommand("snotify_example_lua", function()
    local options = {
        duration = 10000,
        color = 'red',
        icon = 'ExclamationTriangleIcon',
        title = 'Mass DV',
        description = 'A mass DV will occur in 10 seconds.',
        play_sound = true
    }

    TriggerEvent("snotify:notify", options)
end, false)

-- https://heroicons.dev/ add Icon to the end of the name