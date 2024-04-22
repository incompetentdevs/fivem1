RegisterCommand("snotify_example_js", function() {
    const options = {
        duration: 10000,
        color: 'red',
        icon: 'ExclamationTriangleIcon',
        title: 'Mass DV',
        description: 'A mass DV will occur in 10 seconds.',
        play_sound: true
    };    

    TriggerEvent("snotify:notify", options)
}, false);

// https://heroicons.dev/ add Icon to the end of the name