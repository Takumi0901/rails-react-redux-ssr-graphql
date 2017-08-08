# frozen_string_literal: true

class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { helloWorld: {name: "Stranger", books: Book.all }}
  end
end
