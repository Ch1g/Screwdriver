class SendMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    html = ApplicationController.render(
      partial: 'messages/message',
      locals: { message: message })


    ActionCable.server.broadcast "lobby_channel", html: html, message: message
  end
end
