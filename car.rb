class Car
  def initialize(initial_speed=0)
    @speed = initial_speed
  end
end 

class Car
  def accelerate(howmuch=1)
    @speed += howmuch
  end

  def decelerate(howmuch=1)
    @speed -= howmuch
  end

  def speed_report
    "The car is cruising at #{@speed} mph"
  end
end

some_car = Car.new(10)
puts some_car.speed_report
some_car.accelerate(100) #autobahn!
puts some_car.speed_report
