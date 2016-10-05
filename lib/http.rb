require 'faraday'
require 'faraday_middleware'

url = 'https://api.spotify.com/v1'

conn = Faraday.new(url: url) do |faraday|
  faraday.adapter Faraday.default_adapter
  faraday.response :json
end

response = conn.get('search', type: 'artist', q: 'tycho')
response.body
