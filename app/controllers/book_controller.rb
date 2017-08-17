class BookController < ApplicationController
  def index
    @book_props = { helloWorld: {name: "Stranger" }}
  end
end
