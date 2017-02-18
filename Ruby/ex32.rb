the_count = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

the_count.each {|number| puts "This is the count: #{number}"}

fruits.each do |fruit|
  puts "A fruit of type: #{fruit}"
end

change.each {|i| puts "I got #{i}"}

elements = []

(0..5).each {|i| elements << i}

elements.each do |i|
  puts "Element was: #{i}"
end
