class SampleController < ApplicationController
  layout "hello_world"

  def index
    @sample_props = { name: "hgoehoge" }
  end
end
