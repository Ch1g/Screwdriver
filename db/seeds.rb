# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Crazy Button game seed:
Game.create({title: 'Бешеная кнопка',
            description: 'Эту кнопку нажимали столько раз, что даже представить трудно! Она сошла с ума и угрожает безопасности пользователей, её нужно изловить, пока дел не наворотила! Но помни, если решишься пойти на охоту, ты такой не один.',
            default_render: '{"left": 50, "top": 50}',
            asset_name: 'crazy_button'})
