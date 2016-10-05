class StaticPagesController < ApplicationController
  def index
    # @response = HTTParty.get("https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image&api_key=RGAPI-a0a32011-1833-4044-a0f6-b49230ce29b1")
    # render json: @response, status: :ok
  end
end
