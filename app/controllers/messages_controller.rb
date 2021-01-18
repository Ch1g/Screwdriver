class MessagesController < ApplicationController
  # creating message and performing broadcasting job
  def create
    @message = Message.new(message_params)
    @message.user = current_user
    @message.save

    SendMessageJob.perform_later(@message)
  end

  private
    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:content, :user_id)
    end
end
