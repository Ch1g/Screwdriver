class PlaygroundChannel < ApplicationCable::Channel
  def subscribed
    stream_from "playground_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
