RegisterCommand("snotify_example_js", function() {
    const options = {
        duration: 10000,
        color: 'red',
        icon: 'ExclamationTriangleIcon',
        title: 'Mass DV',
        description: 'A mass DV will occur in 10 seconds.'
    };    

    TriggerEvent("snotify:notify", options)
}, false);
