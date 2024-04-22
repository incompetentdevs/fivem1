fx_version "cerulean"

game "gta5"

author 'sprunk <sprunk@incompetent.dev>'
description 'my second ever script, not my proudest work but its something!'
version '1.0.0'

client_scripts {
    "client.js",
    "examples/example.js",
    "examples/example.lua"
}

server_scripts {
    "server.js",
}

ui_page 'out/index.html'

files {
    'out/index.html',
    'out/*',
    'out/**/*'
}

